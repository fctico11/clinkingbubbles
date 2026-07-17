// src/App.js
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

// Non-home routes are code-split so the home page only loads what it needs
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BookingProcess = lazy(() => import("./pages/BookingProcess"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AlcoholCalculator = lazy(() => import("./pages/AlcoholCalculator"));
const Faq = lazy(() => import("./pages/Faq"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking-process" element={<BookingProcess />} />
          <Route path="/alcohol-calculator" element={<AlcoholCalculator />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
