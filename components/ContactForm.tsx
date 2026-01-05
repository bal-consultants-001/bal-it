"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    setStatus(res.ok ? "Message sent!" : "Failed to send.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input name="name" required placeholder="Name" className="w-full border p-2" />
      <input name="email" required type="email" placeholder="Email" className="w-full border p-2" />
      <textarea name="message" required placeholder="Message" className="w-full border p-2" />
      <button className="bg-blue-600 text-white px-4 py-2">
        Send Message
      </button>
      <p>{status}</p>
    </form>
  );
}
