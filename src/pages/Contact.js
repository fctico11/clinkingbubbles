// src/pages/Contact.js
import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Contact Us | Clinking Bubbles Private Bartenders</title>
  <meta name="description" content="Get in touch to book Clinking Bubbles for your next event. Serving New Jersey and New York with premium private bartending." />
  <link rel="canonical" href="https://www.clinkingbubbles.com/contact" />
  <meta property="og:title" content="Contact Us | Clinking Bubbles" />
  <meta property="og:description" content="Book your private bartender for weddings, parties, and events in NJ & NY." />
  <meta property="og:url" content="https://www.clinkingbubbles.com/contact" />
  <meta property="og:image" content="https://www.clinkingbubbles.com/mainlogo.png" />
</Helmet>

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default Contact;

