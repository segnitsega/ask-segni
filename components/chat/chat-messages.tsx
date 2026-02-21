"use client";

import { useEffect, useRef } from "react";
import { ChatMessage } from "./chat-message";
import { Spinner } from "@/components/ui/spinner";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="container mx-auto px-4 py-6 space-y-6 max-w-4xl">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading && (
          <div className="flex justify-center py-8">
            <Spinner />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
