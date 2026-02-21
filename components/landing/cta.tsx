'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-60"></div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative px-6 sm:px-12 py-16 sm:py-24 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Ready to Explore?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Start chatting with my RAG assistant. Ask questions about my projects, technologies, and experiences.
            </p>

            <Link href="/chat">
              <Button size="lg" className="gap-2 group">
                Open Chat
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
