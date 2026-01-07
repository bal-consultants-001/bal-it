"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const MIN_MESSAGE_LENGTH = 30;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const message = String(formData.get("message") || "");

    if (message.length < MIN_MESSAGE_LENGTH) {
      setStatus(`Message must be at least ${MIN_MESSAGE_LENGTH} characters.`);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message,
      }),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      e.currentTarget.reset();
      setMessageLength(0);
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="name"
        required
        placeholder="Name"
        className="w-full border p-2"
      />

      <input
        name="email"
        required
        type="email"
        placeholder="Email"
        className="w-full border p-2"
      />

      {/* Subject dropdown */}
      <select
        name="subject"
        required
        className="w-full border p-2"
        defaultValue=""
      >
        <option value="" disabled>
          Select a subject
        </option>
        <option value="General IT Support">General IT Support</option>
        <option value="PC / Laptop Repair">PC / Laptop Repair</option>
        <option value="Virus & Security Issues">Virus & Security Issues</option>
        <option value="Network / Wi-Fi Problems">Network / Wi-Fi Problems</option>
        <option value="Remote Support Request">Remote Support Request</option>
        <option value="Other Enquiry">Other Enquiry</option>
      </select>

      <textarea
        name="message"
        required
        placeholder="Message (minimum 30 characters)"
        className="w-full border p-2"
        onChange={(e) => setMessageLength(e.target.value.length)}
      />

      <p className="text-sm text-gray-600">
        {messageLength}/{MIN_MESSAGE_LENGTH} characters
      </p>

      <button
        className="bg-blue-600 text-white px-4 py-2 disabled:opacity-50"
        disabled={messageLength < MIN_MESSAGE_LENGTH}
      >
        Send Message
      </button>

      <p>{status}</p>
    </form>
  );
}
