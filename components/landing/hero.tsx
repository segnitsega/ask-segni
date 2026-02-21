"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32">
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <Sparkles className="h-4 w-4 mr-2 text-primary" />
          <span className="text-sm font-medium text-primary">
            Your Personal Knowledge Assistant
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6 text-balance">
          Ask About My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Projects & Experience
          </span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Powered by AI-driven retrieval and semantic search. Get instant,
          context-aware answers about my work, skills, and achievements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/chat">
            <Button size="lg" className="gap-2 group">
              Start Chatting
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"></div>
          <div className="relative rounded-lg border border-border bg-card p-8 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-semibold">Try asking:</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="text-muted-foreground">
                    Which projects have I worked on?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="text-muted-foreground">
                    What technologies did you use for AI integration?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="text-muted-foreground">
                    Have you built real-time systems?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
