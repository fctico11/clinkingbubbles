import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookingProcess = () => {
  return (
    <div>
      <Navbar />
      <section className="py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-4">Booking Process</h1>
        <p className="max-w-3xl mx-auto text-center">
          Our booking process is as smooth as a perfectly shaken cocktail. 
          From inquiry to confirmation, we'll guide you step-by-step. 
          Discover how simple it is to secure your next unforgettable event!
        </p>
        {/* Add additional details, images, or animations as needed */}
      </section>
      <Footer />
    </div>
  );
};

export default BookingProcess;
