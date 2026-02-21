'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Brain, Home } from 'lucide-react';

export function ChatHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="rounded-lg bg-primary p-1.5">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold hidden sm:inline">RAG Assistant</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="h-8 w-px bg-border"></div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
