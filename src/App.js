// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookingProcess from "./pages/BookingProcess";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPage from "./pages/ServicesPage";
import AlcoholCalculator from "./pages/AlcoholCalculator";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking-process" element={<BookingProcess />} />
        <Route path="/alcohol-calculator" element={<AlcoholCalculator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;