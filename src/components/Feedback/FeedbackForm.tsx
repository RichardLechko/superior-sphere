import React, { useState } from "react";

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject: "Feedback", message }), // Ensure subject is included
    });

    if (response.ok) {
      setStatus("Feedback sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Failed to send feedback.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-3xl font-bold">Feedback Form</h2>
      {status && <p className="text-red-500">{status}</p>}
      <div>
        <label className="block">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="dark:text-black border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="dark:text-black border rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="dark:text-black border rounded w-full p-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2"
      >
        Send Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
