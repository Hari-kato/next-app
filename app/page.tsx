"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Hello World");

  const toggleMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "Hello World" ? "Welcome to Next.js!" : "Hello World!"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="font-bold text-2xl">{message}</h1>
      <button
        onClick={toggleMessage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Message
      </button>
    </div>
  );
}
