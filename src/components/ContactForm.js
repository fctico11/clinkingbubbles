// src/pages/ContactForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import usePlacesAutocomplete from "use-places-autocomplete";
import Lottie from "lottie-react";
import successAnimation from "../assets/success.json";
import "../components/ContactForm.css";

const standardEventTypes = [
  "Birthday Party",
  "Graduation Party",
  "Corporate Event",
  "Wedding",
];

// AddressAutocomplete component encapsulates the autocomplete hook.
// It renders an input field and suggestion list.
const AddressAutocomplete = ({ onSelect, initialValue }) => {
  const {
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  // If an initial value is provided, set it.
  useEffect(() => {
    if (initialValue) {
      setValue(initialValue, false);
    }
  }, [initialValue, setValue]);

  return (
    <div>
      <input
        type="text"
        name="eventAddress"
        placeholder="Start typing address..."
        className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {status === "OK" &&
        data.map((suggestion) => (
          <div
            key={suggestion.place_id}
            className="autocomplete-suggestion cursor-pointer p-2 bg-gray-100"
            onClick={() => {
              setValue(suggestion.description, false);
              onSelect(suggestion.description);
              clearSuggestions();
            }}
          >
            {suggestion.description}
          </div>
        ))}
    </div>
  );
};

const ContactForm = () => {
  const navigate = useNavigate();

  // Track if the Google Maps Places API script has loaded.
  const [mapsScriptLoaded, setMapsScriptLoaded] = useState(false);

  // Dynamically load the Google Maps API script on mount.
  useEffect(() => {
    if (window.google && window.google.maps) {
      setMapsScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBQgCzOmUK7dZ06L22eHjYWC1rMIjCJU5Y&libraries=places";
    script.async = true;
    script.defer = true;
    script.onload = () => setMapsScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventAddress: "",
    eventLocation: "Residence",
    eventDate: "",
    eventType: "Birthday Party",
    otherEventType: "",
    eventStartTime: "17:00",
    eventEndTime: "22:00",
    guestCount: "",
    bartendingOption: "Bartender(s) only",
    additionalDetails: "",
    contactMethod: "Email",
    dryHireAccepted: false,
  });

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDryHireOverlay, setShowDryHireOverlay] = useState(false);
  const [showOtherEventModal, setShowOtherEventModal] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  // Handler to update eventAddress when an address is selected.
  const handleAddressSelect = (address) => {
    setFormData({ ...formData, eventAddress: address });
  };

  const closeSuccessOverlay = () => {
    window.location.href = "/";
  };

  const handleChange = (e) => {
    const { name, value: val, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : val;
    if (name === "eventType" && newValue === "Other") {
      setShowOtherEventModal(true);
    }
    setFormData({ ...formData, [name]: newValue });
  };

  const handleOtherEventSubmit = (e) => {
    e.preventDefault();
    if (formData.otherEventType.trim() !== "") {
      setFormData({ ...formData, eventType: formData.otherEventType });
    }
    setShowOtherEventModal(false);
  };

  const closeOtherEventModal = () => {
    setShowOtherEventModal(false);
    if (!formData.otherEventType.trim()) {
      setFormData({ ...formData, eventType: standardEventTypes[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isNaN(formData.guestCount) || formData.guestCount.trim() === "") {
      setFeedback("❌ Please enter a numeric value for estimated guests.");
      setLoading(false);
      return;
    }
    let submissionData = { ...formData };
    const isStandard =
      standardEventTypes.includes(formData.eventType) ||
      formData.eventType.trim() === "";
    if (isStandard) {
      delete submissionData.otherEventType;
    }
    try {
      await axios.post("https://formspree.io/f/xjkyvqoe", submissionData);
      setShowSuccessOverlay(true);
    } catch (error) {
      setFeedback("❌ There was an error submitting your request. Please try again.");
    }
    setLoading(false);
  };

  // Optional: If the Google Maps script isn't loaded yet, display a simple loading message.
  if (!mapsScriptLoaded) {
    return (
      <div className="bg-white min-h-screen flex flex-col justify-center">
        <div className="mt-20 mb-20 text-center">
          <h2 className="text-xl">Loading Contact Form... Please Hang Tight</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between relative">
      {/* Inline styles for animations */}
      <style>{`
        @keyframes dropDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-dropDown { animation: dropDown 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards; }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in forwards; }
      `}</style>

      {/* Intro Section */}
      <section className="py-10 px-4 bg-[#EBE6D6] text-white text-center mt-5">
        <h2 className="clinking-font text-black text-3xl font-bold mt-12">
          Let's Make Your Event <span className="sparkle">Unforgettable</span>
        </h2>
        <p className="bubbles-font text-xl text-black max-w-2xl mx-auto mt-4">
          We’re excited to craft amazing drinks and create a fun atmosphere for your special occasion!
          Fill out the details below, and we’ll tailor our services to your needs. Once submitted,
          you’ll be hearing from our team within 48 hours to finalize your consultation.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 mt-1">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          {/* Full Name */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. (555) 123-4567"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.phone}
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
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          {/* Event Address with Autocomplete */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Event Address *</label>
            <AddressAutocomplete
              onSelect={handleAddressSelect}
              initialValue={formData.eventAddress}
            />
          </div>

          {/* Event Location */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Location of Event *</label>
            <select
              name="eventLocation"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={formData.eventLocation}
            >
              <option>Residence</option>
              <option>Rented Venue</option>
            </select>
          </div>

          {/* Date of Event */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Date of Event *</label>
            <input
              type="date"
              name="eventDate"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={formData.eventDate}
              required
            />
          </div>

          {/* Type of Event */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Type of Event *</label>
            <select
              name="eventType"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={
                (() => {
                  const isStandard =
                    standardEventTypes.includes(formData.eventType) ||
                    formData.eventType.trim() === "";
                  return isStandard
                    ? formData.eventType
                    : formData.eventType === "Other"
                    ? "Other"
                    : formData.eventType;
                })()
              }
            >
              {standardEventTypes.map((et) => (
                <option key={et} value={et}>
                  {et}
                </option>
              ))}
              <option value="Other">Other</option>
              {!standardEventTypes.includes(formData.eventType) &&
                formData.eventType !== "Other" &&
                formData.eventType.trim() !== "" && (
                  <option value={formData.eventType}>{formData.eventType}</option>
                )}
            </select>
          </div>

          {/* Hours of Event */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Hours of Event *</label>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="bubbles-font text-lg block text-sm font-medium mb-1">Start Time</label>
                <input
                  type="time"
                  name="eventStartTime"
                  className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 bg-white text-black"
                  onChange={handleChange}
                  value={formData.eventStartTime}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="bubbles-font text-lg block text-sm font-medium mb-1">End Time</label>
                <input
                  type="time"
                  name="eventEndTime"
                  className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 bg-white text-black"
                  onChange={handleChange}
                  value={formData.eventEndTime}
                  required
                />
              </div>
            </div>
          </div>

          {/* Estimated Number of Guests */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Estimated Number of Guests *
            </label>
            <input
              type="number"
              name="guestCount"
              placeholder="e.g. 75"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.guestCount}
              required
            />
          </div>

          {/* Bartending Options */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">Bartending Options *</label>
            <select
              name="bartendingOption"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={formData.bartendingOption}
            >
              <option>Bartender(s) only</option>
              <option>Bartender(s) + Mobile Bar</option>
            </select>
          </div>

          {/* Additional Details */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Any other details you would like for us to know:
            </label>
            <textarea
              name="additionalDetails"
              placeholder="e.g. Special drink requests, event theme, etc."
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.additionalDetails}
            ></textarea>
          </div>

          {/* Preferred Method of Contact */}
          <div>
            <label className="bubbles-font text-lg block font-semibold mb-1">
              Preferred Method of Contact *
            </label>
            <select
              name="contactMethod"
              className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={formData.contactMethod}
            >
              <option>Phone call</option>
              <option>Text</option>
              <option>Email</option>
            </select>
          </div>

          {/* Dry Hire Acknowledgment */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="dryHireAccepted"
              onChange={handleChange}
              checked={formData.dryHireAccepted}
              required
            />
            <span
              className="bubbles-font text-lg text-blue-400 underline cursor-pointer"
              onClick={() => setShowDryHireOverlay(true)}
            >
              Acknowledgment of Dry Hire*
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bubbles-font text-lg w-full bg-black text-white p-3 rounded font-semibold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>
          {feedback && <p className="text-center mt-4">{feedback}</p>}
        </form>
      </section>

      {showDryHireOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowDryHireOverlay(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDryHireOverlay(false)}
              className="absolute top-2 right-2 text-black font-bold"
            >
              X
            </button>
            <h3 className="bubbles-font text-lg text-xl font-bold mb-4">
              Dry Hire Agreement
            </h3>
            <p className="bubbles-font text-lg mb-4">
              By accepting the dry hire agreement, you agree to provide all the alcohol for
              your event, and we will provide the bartending service, bar set-up, and any
              supplies and materials you may need (napkins, cups, straws, etc.). This allows
              you (the client) to purchase alcohol at cost and means you get to keep all of
              the unused alcohol from the event. We will help you determine how much and
              what kind of alcohol/specialty drinks you would like at your event at the next
              step after you submit this form.
            </p>
            <button
              onClick={() => setShowDryHireOverlay(false)}
              className="bubbles-font text-lg bg-black text-white px-4 py-2 rounded"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {showOtherEventModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeOtherEventModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeOtherEventModal}
              className="absolute top-2 right-2 text-black font-bold"
            >
              X
            </button>
            <h3 className="bubbles-font text-lg text-xl font-bold mb-4">
              Specify Event Type
            </h3>
            <form onSubmit={handleOtherEventSubmit}>
              <input
                type="text"
                name="otherEventType"
                placeholder="e.g. Anniversary, Reunion, etc."
                className="bubbles-font text-lg w-full p-3 rounded border border-gray-400 mb-4"
                onChange={handleChange}
                value={formData.otherEventType}
              />
              <button
                type="submit"
                className="bubbles-font text-lg bg-black text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {showSuccessOverlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-green-500 bg-opacity-90 z-50 animate-dropDown">
          <button
            onClick={closeSuccessOverlay}
            className="absolute top-20 right-4 text-white text-3xl font-bold border-2 border-black rounded-full px-3 py-1"
          >
            X
          </button>
          <div className="max-w-md mx-auto p-6 text-center text-white animate-fadeIn">
            <div className="w-40 h-40 mx-auto mb-4">
              <Lottie loop autoplay animationData={successAnimation} />
            </div>
            <h3 className="bubbles-font text-lg text-2xl font-extrabold mb-4">
              Thank you for submitting the contact form, we're almost ready to get this party started!
            </h3>
            <p className="bubbles-font text-lg">
              Hang tight while our team reviews your request. We'll be in touch within 48 hours.
              In the meantime, feel free to check out our{" "}
              <span
                className="bubbles-font text-lg underline cursor-pointer"
                onClick={() => navigate("/alcohol-calculator")}
              >
                alcohol calculator
              </span>{" "}
              or return to the{" "}
              <span
                className="bubbles-font text-lg underline cursor-pointer"
                onClick={() => navigate("/")}
              >
                home page
              </span>.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactForm;
