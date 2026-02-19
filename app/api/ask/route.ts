import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";
import { vectorStore } from "../../../lib/langchain";

const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const question = body.question;

  if (!question)
    return NextResponse.json(
      { error: "No question provided" },
      { status: 400 },
    );

  const docs = await vectorStore.similaritySearch(question, 3);

  const context = docs.map((d) => d.pageContent).join("\n\n");
  const prompt = `Answer the question about Segni Tsega using the context below. 
If the answer is not in the context, say "I don't know."

Context:
${context}

Question:
${question}

Answer:`;

  const response = await hf.chatCompletion({
    model: "meta-llama/Llama-3.3-70B-Instruct",
    messages: [{ role: "user", content: prompt }],
    provider: "groq",
    max_tokens: 500,
    temperature: 0.3,
  });

  const answer = response.choices?.[0]?.message?.content ?? "";
  return NextResponse.json({ answer });
}
