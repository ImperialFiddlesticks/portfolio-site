import { createFileRoute, Link } from "@tanstack/react-router";
import "./contact.css";
import { useState } from "react";

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Please write a message");
      return;
    }
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <header className="contact-header">
        <p className="section-label">Contact</p>
        <h1 className="contact-title">
          Let's <em>work</em> together.
        </h1>
        <p className="contact-subtitle">
          Open to LIA placement and first developer roles in Sweden.
        </p>
      </header>
      <Link to="/" className="back-link-arrow">
        Back
      </Link>
      <section className="contact-body">
        {submitted ? (
          <div className="contact-success">
            <p className="section-label">Message sent!</p>
            <h2 className="contact-success__title">Thanks for reaching out.</h2>
            <p className="about-body">I'll get back to you as soon as I can.</p>
            <button
              className="btn-primary"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Write your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {error && <p className="contact-error">{error}</p>}
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
