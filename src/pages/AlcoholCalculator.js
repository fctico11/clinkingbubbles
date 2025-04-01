import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/ContactForm.css"; // Reuse styling if desired
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Calculate Drinks for Your Event: Bartender Approved Tool</title>
  <meta name="description" content="Estimate how much alcohol you’ll need with our bartender-backed event drink calculator. Quick, easy, and tailored to your guest list." />
  <meta name="keywords" content="alcohol calculator, drink calculator, event drink planner, party alcohol estimate, NJ event planning, NY event planning, bar prep tool" />
  <link rel="canonical" href="https://www.clinkingbubbles.com/alcohol-calculator" />

  <meta property="og:title" content="Calculate Drinks for Your Event: Bartender Approved Tool" />
  <meta property="og:description" content="Estimate how much alcohol you’ll need with our bartender-backed event drink calculator. Quick, easy, and tailored to your guest list." />
  <meta property="og:url" content="https://www.clinkingbubbles.com/alcohol-calculator" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/mainlogo.png" />
  <meta property="og:site_name" content="Clinking Bubbles" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:alt" content="Estimate drinks easily with Clinking Bubbles' calculator." />
</Helmet>

const SCROLL_OFFSET = 180;

const AlcoholCalculator = () => {
  // State declarations
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hours_of_event: "",
    total_guests: "",
    drinks_per_hour: "1", // 1 for average, 2 for heavy
    beer_percentage: 30,
    wine_percentage: 20,
    cocktail_percentage: 50,
  });

  const [resultsData, setResultsData] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  // Consent states
  const [emailConsent, setEmailConsent] = useState(false);
  const [showEmailConsentOverlay, setShowEmailConsentOverlay] = useState(false);

  // Initialize React Router's navigation
  const navigate = useNavigate();

  // Initialize AOS with animations that play only once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Auto-scroll to the results section with a slight offset so the top is visible below the navbar
  useEffect(() => {
    if (resultsData) {
      const resultsEl = document.getElementById("resultsSection");
      if (resultsEl) {
        const y =
          resultsEl.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [resultsData]);

  // Handle input changes for text/number fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle slider changes (ensuring numeric values)
  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  // Return a style for the slider track: gold up to the value, gray for the remainder.
  const getSliderStyle = (value) => {
    return {
      background: `linear-gradient(to right, #FFD700 0%, #FFD700 ${value}%, #ccc ${value}%, #ccc 100%)`,
    };
  };

  // Perform the calculation locally on form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    setResultsData(null);

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.hours_of_event.trim() ||
      !formData.total_guests.trim()
    ) {
      setFeedback("❌ Please fill out all required fields (Name, Email, Hours, Guests).");
      setLoading(false);
      return;
    }

    // Validate that slider percentages add up to 100%
    const totalPercentage =
      Number(formData.beer_percentage) +
      Number(formData.wine_percentage) +
      Number(formData.cocktail_percentage);
    if (totalPercentage !== 100) {
      setFeedback("❌ The percentages for beer, wine, and cocktails must add up to 100%.");
      setLoading(false);
      return;
    }

    // Convert values
    const hours = Number(formData.hours_of_event);
    const guests = Number(formData.total_guests);
    const drinksPerHour = Number(formData.drinks_per_hour);
    const beerPerc = Number(formData.beer_percentage) / 100;
    const winePerc = Number(formData.wine_percentage) / 100;
    const cocktailPerc = Number(formData.cocktail_percentage) / 100;

    // Calculate total drinks
    const totalDrinks = guests * hours * drinksPerHour;
    const beerDrinks = totalDrinks * beerPerc;
    const wineDrinks = totalDrinks * winePerc;
    const cocktailDrinks = totalDrinks * cocktailPerc;

    // Calculate quantities needed
    const beerCases = Math.ceil(beerDrinks / 24);
    const wineBottles = Math.ceil((wineDrinks * 5) / 25.4);
    const liquorBottles = Math.ceil((cocktailDrinks * 1.5) / 25.4);

    // Hard-coded average prices:
    const priceBeerCase = 30; // $30 per case
    const priceWineBottle = 15; // $15 per bottle
    const priceLiquorBottle = 20; // $20 per bottle

    // Calculate costs
    const costBeer = beerCases * priceBeerCase;
    const costWine = wineBottles * priceWineBottle;
    const costLiquor = liquorBottles * priceLiquorBottle;
    const totalCost = costBeer + costWine + costLiquor;

    // Build results object
    const newResultsData = {
      beerCases,
      wineBottles,
      liquorBottles,
      costBeer,
      costWine,
      costLiquor,
      totalCost,
    };

    // If user consented, email the data via Formspree
    if (emailConsent) {
      try {
        // Combine user inputs + results
        const submissionData = {
          // User input
          name: formData.name,
          email: formData.email,
          hours_of_event: formData.hours_of_event,
          total_guests: formData.total_guests,
          drinks_per_hour: formData.drinks_per_hour,
          beer_percentage: formData.beer_percentage,
          wine_percentage: formData.wine_percentage,
          cocktail_percentage: formData.cocktail_percentage,

          // Results
          beerCases,
          wineBottles,
          liquorBottles,
          costBeer,
          costWine,
          costLiquor,
          totalCost,
        };

        await axios.post("https://formspree.io/f/xjkyvqoe", submissionData);
        // Optional: setFeedback("✔️ Your results have been emailed!");
      } catch (error) {
        console.error("Error emailing results via Formspree:", error);
        // Optional: setFeedback("❌ There was an error emailing your results.");
      }
    }

    // Set local results for display
    setResultsData(newResultsData);
    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between relative">
      <Navbar />

      {/* Inline CSS for slider thumbs styling */}
      <style>{`
        .gold-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          background: #FFD700;
          border-radius: 50%;
          margin-top: -6px;
          cursor: pointer;
        }
        .gold-thumb::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: #FFD700;
          border-radius: 50%;
          cursor: pointer;
        }
        .gold-thumb::-webkit-slider-runnable-track {
          height: 4px;
          border-radius: 2px;
        }
        .gold-thumb::-moz-range-track {
          height: 4px;
          border-radius: 2px;
        }
      `}</style>

      {/* Intro Section */}
      <section className="py-10 px-4 bg-[#EBE6D6] text-white text-center mt-5">
        <h2 className="clinking-font text-black text-3xl font-bold mt-12">
          Plan Your Event’s Drinks with Ease
        </h2>
        <p className="bubbles-font text-xl text-black max-w-2xl mx-auto mt-4">
          Use our alcohol calculator to estimate the required quantities and costs for beer, wine, and liquor for your event.
        </p>
      </section>

      {/* Calculator Form */}
      <section className="py-12 px-4 mt-1">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          {/* Name */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. john@example.com"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Hours of Event */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Hours of event *</label>
            <input
              type="number"
              name="hours_of_event"
              placeholder="e.g. 5"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              value={formData.hours_of_event}
              onChange={handleChange}
              required
            />
          </div>

          {/* Total Number of Guests */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Total number of guests at event *
            </label>
            <input
              type="number"
              name="total_guests"
              placeholder="e.g. 100"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              value={formData.total_guests}
              onChange={handleChange}
              required
            />
          </div>

          {/* Drinks per Guest per Hour */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Drinks per guest per hour (1 for average, 2 for heavy) *
            </label>
            <input
              type="number"
              name="drinks_per_hour"
              placeholder="1 or 2"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              value={formData.drinks_per_hour}
              onChange={handleChange}
              required
            />
          </div>

          {/* Beer Slider */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Percentage of guests who prefer beer: {formData.beer_percentage}%
            </label>
            <input
              type="range"
              className="gold-thumb w-full appearance-none focus:outline-none"
              style={getSliderStyle(formData.beer_percentage)}
              min="0"
              max="100"
              step="1"
              name="beer_percentage"
              value={formData.beer_percentage}
              onChange={handleSliderChange}
            />
          </div>

          {/* Wine Slider */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Percentage of guests who prefer wine: {formData.wine_percentage}%
            </label>
            <input
              type="range"
              className="gold-thumb w-full appearance-none focus:outline-none"
              style={getSliderStyle(formData.wine_percentage)}
              min="0"
              max="100"
              step="1"
              name="wine_percentage"
              value={formData.wine_percentage}
              onChange={handleSliderChange}
            />
          </div>

          {/* Cocktail Slider */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Percentage of guests who prefer cocktails: {formData.cocktail_percentage}%
            </label>
            <input
              type="range"
              className="gold-thumb w-full appearance-none focus:outline-none"
              style={getSliderStyle(formData.cocktail_percentage)}
              min="0"
              max="100"
              step="1"
              name="cocktail_percentage"
              value={formData.cocktail_percentage}
              onChange={handleSliderChange}
            />
          </div>

          {/* Email Consent Checkbox */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="emailConsent"
              checked={emailConsent}
              onChange={(e) => setEmailConsent(e.target.checked)}
            />
            <span
              className="bubbles-font text-lg text-blue-400 underline cursor-pointer"
              onClick={() => setShowEmailConsentOverlay(true)}
            >
              I consent to have my info and results saved*
            </span>
          </div>

          <button
            type="submit"
            className="bubbles-font text-lg w-full bg-[#493423] text-white p-3 rounded font-semibold hover:bg-[#3A2514] transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Calculating..." : "Calculate"}
          </button>

          {feedback && <p className="text-center mt-4 text-red-600">{feedback}</p>}
        </form>
      </section>

      {/* Email Consent Overlay */}
      {showEmailConsentOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowEmailConsentOverlay(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEmailConsentOverlay(false)}
              className="absolute top-2 right-2 text-black font-bold"
            >
              X
            </button>
            <h3 className="bubbles-font text-lg text-xl font-bold mb-4">Info Consent</h3>
            <p className="bubbles-font text-lg mb-4">
              By checking the box, you agree to let us save your name, email, and the results of 
              the calculation for our team. We will use this information solely to follow up regarding 
              your event and the alcohol calculation.
            </p>
            <button
              onClick={() => setShowEmailConsentOverlay(false)}
              className="bubbles-font text-lg bg-black text-white px-4 py-2 rounded"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Results Section */}
      {resultsData && (
        <section
          id="resultsSection"
          className="px-4 mt-1 max-w-lg mx-auto mb-10"
          data-aos="fade-up"
        >
          <div className="border-4 border-yellow-500 p-6 rounded-lg space-y-6">
            <div>
              <h4 className="bubbles-font text-lg font-semibold">Cases Of Beer Or Seltzers Needed*</h4>
              <p className="text-gray-600 text-sm">Corona, Blue Moon, White Claw Etc.</p>
              <p className="bubbles-font text-2xl font-bold">{resultsData.beerCases}</p>
            </div>
            <div>
              <h4 className="bubbles-font text-lg font-semibold">Bottles Of Wine Needed*</h4>
              <p className="text-gray-600 text-sm">Red, White, Rose, Sparkling Etc.</p>
              <p className="bubbles-font text-2xl font-bold">{resultsData.wineBottles}</p>
            </div>
            <div>
              <h4 className="bubbles-font text-lg font-semibold">Bottles Of Liquor Needed*</h4>
              <p className="text-gray-600 text-sm">
                A Combination Of Liquors (Vodka, Tequila, Rum, Whiskey, Gin, Etc.)
              </p>
              <p className="bubbles-font text-2xl font-bold">{resultsData.liquorBottles}</p>
            </div>
            <div>
              <h4 className="bubbles-font text-lg font-semibold">Estimated Beer & Seltzers Cost*</h4>
              <p className="text-gray-600 text-sm">Avg. $30.00 Per Case</p>
              <p className="bubbles-font text-2xl font-bold">
                ${resultsData.costBeer.toFixed(2)}
              </p>
            </div>
            <div>
              <h4 className="bubbles-font text-lg font-semibold">Estimated Wine Cost*</h4>
              <p className="text-gray-600 text-sm">Avg. $15.00 Per Bottle</p>
              <p className="bubbles-font text-2xl font-bold">
                ${resultsData.costWine.toFixed(2)}
              </p>
            </div>
            <div>
              <h4 className="bubbles-font text-lg font-semibold">Estimated Liquor Cost*</h4>
              <p className="text-gray-600 text-sm">Avg. $20.00 Per 750ml Bottle</p>
              <p className="bubbles-font text-2xl font-bold">
                ${resultsData.costLiquor.toFixed(2)}
              </p>
            </div>
            <div>
              <h4 className="bubbles-font text-lg font-semibold">Total Estimated Spend On Alcohol*</h4>
              <p className="text-gray-600 text-sm">
                Based On 1 Drink Per Person Per Hour (Adjust As Needed)
              </p>
              <p className="bubbles-font text-2xl font-bold">
                ${resultsData.totalCost.toFixed(2)}
              </p>
            </div>
          </div>

          <div
            className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
            data-aos="zoom-in"
          >
            <button
              onClick={() => navigate("/booking-process")}
              className="bubbles-font text-lg bg-[#493423] text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition"
            >
              Learn More About The Booking Process
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bubbles-font text-lg bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition"
            >
              Request A Quote
            </button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default AlcoholCalculator;

