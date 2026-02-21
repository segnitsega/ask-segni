'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-2">
            <Brain className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">RAG Assistant</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>
          </nav>
          <ThemeToggle />
          <Link href="/chat" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
            Start Chat
          </Link>
        </div>
      </div>
    </header>
  );
}
