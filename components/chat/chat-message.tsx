"use client";

import { Brain, User } from "lucide-react";

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Brain className="h-4 w-4 text-primary" />
          </div>
        </div>
      )}

      <div
        className={`max-w-sm md:max-w-xl lg:max-w-2xl rounded-lg px-4 py-3 ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-card border border-border text-card-foreground"
        }`}
      >
        <p className="text-sm sm:text-base leading-relaxed">
          {message.content}
        </p>
        <p
          className={`text-xs mt-2 ${isUser ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <User className="h-4 w-4 text-accent" />
          </div>
        </div>
      )}
    </div>
  );
}
