import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Our Bartending Team: Get a Quote for Your Events</title>
        {console.log("Helmet mounted for Contact")}
        <meta name="description" content="Reach out to Clinking Bubbles for private bartending quotes, questions, or custom packages for your NJ or NY event. We'll respond quickly!" />
        <meta name="keywords" content="contact bartenders NJ, contact bartenders NY, bartending quotes, private event quotes, hire bartenders NJ, hire bartenders NY, event bartending contact" />
        <link rel="canonical" href="https://www.clinkingbubbles.com/contact" />

        <meta property="og:title" content="Contact Our Bartending Team: Get a Quote for Your Events" />
        <meta property="og:description" content="Reach out to Clinking Bubbles for private bartending quotes, questions, or custom packages for your NJ or NY event. We'll respond quickly!" />
        <meta property="og:url" content="https://www.clinkingbubbles.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.clinkingbubbles.com/assets/mainlogo.png" />
        <meta property="og:site_name" content="Clinking Bubbles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Get in touch with Clinking Bubbles." />
      </Helmet>
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default Contact;

