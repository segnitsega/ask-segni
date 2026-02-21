declare global {
  interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}


  type ApiResponse<T = unknown> = {
    success: boolean;
    data?: T;
    error?: string;
  };
}

export {};
