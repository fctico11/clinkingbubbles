// src/App.js
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home"; // Import homepage normally

// Lazy load the remaining pages
const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BookingProcess = lazy(() => import("./pages/BookingProcess"));
const AlcoholCalculator = lazy(() => import("./pages/AlcoholCalculator"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Homepage loads immediately */}
        <Route path="/" element={<Home />} />

        {/* Other routes are lazy loaded */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<div style={{ textAlign: "center", marginTop: "4rem" }}>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<div style={{ textAlign: "center", marginTop: "4rem" }}>Loading...</div>}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/booking-process"
          element={
            <Suspense fallback={<div style={{ textAlign: "center", marginTop: "4rem" }}>Loading...</div>}>
              <BookingProcess />
            </Suspense>
          }
        />
        <Route
          path="/alcohol-calculator"
          element={
            <Suspense fallback={<div style={{ textAlign: "center", marginTop: "4rem" }}>Loading...</div>}>
              <AlcoholCalculator />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div style={{ textAlign: "center", marginTop: "4rem" }}>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
