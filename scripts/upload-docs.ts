import fs from "fs";
import { vectorStore } from "../lib/langchain";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

async function uploadDocs() {
  const document = await fs.promises.readFile("./data/my_docs.txt", "utf-8");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

  const docs = await splitter.createDocuments([document]);
  for (const doc of docs) {
    await vectorStore.addDocuments([
      {
        pageContent: doc.pageContent,
        metadata: {
          source: "my_docs.txt",
          ...doc.metadata,
        },
      },
    ]);
  }

  console.log("Documents uploaded!");
}

uploadDocs();
