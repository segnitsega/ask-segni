import fs from "fs";
import path from "path";
import { vectorStore } from "../lib/langchain";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 50,
});

async function uploadAllDocs() {
  console.log("Starting knowledge base upload...\n");

  const dataDir = "./data";

  const files = await fs.promises.readdir(dataDir);

  const validFiles = files.filter(
    (file) => file.endsWith(".txt") || file.endsWith(".md"),
  );

  console.log(`Found ${validFiles.length} files to process\n`);

  let totalChunks = 0;

  for (const file of validFiles) {
    const filePath = path.join(dataDir, file);
    console.log(`Processing: ${file}`);

    try {
      const content = await fs.promises.readFile(filePath, "utf-8");

      if (content.trim().length === 0) {
        console.log(` File is empty, skipping\n`);
        continue;
      }

      const docs = await splitter.createDocuments([content]);

      for (const doc of docs) {
        await vectorStore.addDocuments([
          {
            pageContent: doc.pageContent,
            metadata: {
              source: file,
              filename: file,
              filetype: file.endsWith(".md") ? "markdown" : "text",
              uploaded: new Date().toISOString(),
              ...doc.metadata,
            },
          },
        ]);
      }

      console.log(`Added ${docs.length} chunks from ${file}\n`);
      totalChunks += docs.length;
    } catch (error) {
      console.log(` Error processing ${file}: ${error}\n`);
    }
  }

  console.log(
    `Done! Uploaded ${totalChunks} total chunks from ${validFiles.length} files`,
  );
}

uploadAllDocs().catch(console.error);
