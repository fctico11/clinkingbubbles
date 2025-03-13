// src/components/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/sendEmail", formData);
      setFeedback("Your message has been sent!");
    } catch (error) {
      setFeedback("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section className="py-20 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded border border-gray-300 text-black"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded border border-gray-300 text-black"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 rounded border border-gray-300 text-black"
          rows="5"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded font-semibold">
          Send Message
        </button>
        {feedback && <p className="text-center mt-4">{feedback}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
