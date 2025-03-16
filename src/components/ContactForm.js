import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import usePlacesAutocomplete from "use-places-autocomplete";

// Default event types
const standardEventTypes = [
  "Birthday Party",
  "Graduation Party",
  "Corporate Event",
  "Wedding",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventAddress: "",
    eventLocation: "Residence",
    eventDate: "",
    eventType: "Birthday Party",
    otherEventType: "",
    eventStartTime: "",
    eventEndTime: "",
    guestCount: "",
    bartendingOption: "bartender(s) only",
    additionalDetails: "",
    contactMethod: "Email",
    dryHireAccepted: false,
  });

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDryHireOverlay, setShowDryHireOverlay] = useState(false);
  const [showOtherEventModal, setShowOtherEventModal] = useState(false);

  // Google Places Autocomplete Hook
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  // Handle address autocomplete selection
  const handleAddressSelect = (address) => {
    setValue(address, false);
    setFormData({ ...formData, eventAddress: address });
    clearSuggestions();
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;

    // If user selects "Other" from the main eventType dropdown, open the modal
    if (name === "eventType" && newValue === "Other") {
      setShowOtherEventModal(true);
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Save the user’s custom event type from the modal
  const handleOtherEventSubmit = (e) => {
    e.preventDefault();
    // Transfer otherEventType to eventType so it displays in the dropdown
    if (formData.otherEventType.trim() !== "") {
      setFormData({
        ...formData,
        eventType: formData.otherEventType,
      });
    }
    setShowOtherEventModal(false);
  };

  // Close the "Other Event" modal if clicking outside or on "X"
  const closeOtherEventModal = () => {
    setShowOtherEventModal(false);
    // If user typed nothing, revert eventType to the first standard type
    if (!formData.otherEventType.trim()) {
      setFormData({ ...formData, eventType: standardEventTypes[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate guest count as numeric
    if (isNaN(formData.guestCount) || formData.guestCount.trim() === "") {
      setFeedback("❌ Please enter a numeric value for estimated guests.");
      setLoading(false);
      return;
    }

    // If user’s final eventType is one of the standard ones, remove otherEventType
    let submissionData = { ...formData };
    const isStandard =
      standardEventTypes.includes(formData.eventType) ||
      formData.eventType.trim() === "";
    if (isStandard) {
      delete submissionData.otherEventType;
    }

    try {
      await axios.post("https://formspree.io/f/xjkyvqoe", submissionData);
      setFeedback(
        "✅ Your request has been submitted! You'll be redirected to our calendar shortly."
      );
      setTimeout(() => {
        window.location.href = "/calendar";
      }, 3000);
    } catch (error) {
      setFeedback("❌ There was an error submitting your request. Please try again.");
    }

    setLoading(false);
  };

  // Compute what the eventType <select> should show
  const eventTypeValue = standardEventTypes.includes(formData.eventType)
    ? formData.eventType
    : formData.eventType === "Other"
    ? "Other"
    : formData.eventType; // e.g. "Reunion"

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Intro Section with Black Background */}
      <section className="py-10 px-4 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mt-10">Let's Make Your Event Unforgettable</h2>
        <p className="max-w-2xl mx-auto mt-4">
          We’re excited to craft amazing drinks and create a fun atmosphere for your special occasion!
          Fill out the details below, and we’ll tailor our services to your needs. Once submitted,
          you’ll be hearing from are team in 2-5 business days to finalize your consultation.
        </p>
      </section>

      {/* Contact Form */}
      {/* Added "mt-10" to create space from the navbar (or top) */}
      <section className="py-12 px-4 mt-2">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              className="w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-semibold mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. (555) 123-4567"
              className="w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. john@example.com"
              className="w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          {/* Event Address with Autocomplete */}
          <div>
            <label className="block font-semibold mb-1">Event Address *</label>
            <input
              type="text"
              name="eventAddress"
              placeholder="Start typing address..."
              className="w-full p-3 rounded border border-gray-400"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
            {status === "OK" &&
              data.map((suggestion) => (
                <div
                  key={suggestion.place_id}
                  className="cursor-pointer p-2 bg-gray-100"
                  onClick={() => handleAddressSelect(suggestion.description)}
                >
                  {suggestion.description}
                </div>
              ))}
          </div>

          {/* Event Location */}
          <div>
            <label className="block font-semibold mb-1">Location of Event *</label>
            <select
              name="eventLocation"
              className="w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={formData.eventLocation}
            >
              <option>Residence</option>
              <option>Rented Venue</option>
            </select>
          </div>

          {/* Date of Event */}
          <div>
            <label className="block font-semibold mb-1">Date of Event *</label>
            <input
              type="date"
              name="eventDate"
              className="w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={formData.eventDate}
              required
            />
          </div>

          {/* Type of Event */}
          <div>
            <label className="block font-semibold mb-1">Type of Event *</label>
            <select
              name="eventType"
              className="w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={eventTypeValue}
            >
              {standardEventTypes.map((et) => (
                <option key={et} value={et}>
                  {et}
                </option>
              ))}
              <option value="Other">Other</option>
              {/* If user typed something custom like "Reunion", show it as an extra option */}
              {!standardEventTypes.includes(formData.eventType) &&
                formData.eventType !== "Other" &&
                formData.eventType.trim() !== "" && (
                  <option value={formData.eventType}>{formData.eventType}</option>
                )}
            </select>
          </div>

          {/* Hours of Event (Removed AM/PM selects) */}
          <div>
            <label className="block font-semibold mb-1">Hours of Event *</label>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Start Time</label>
                <input
                  type="time"
                  name="eventStartTime"
                  className="w-full p-3 rounded border border-gray-400 bg-white text-black"
                  onChange={handleChange}
                  value={formData.eventStartTime}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">End Time</label>
                <input
                  type="time"
                  name="eventEndTime"
                  className="w-full p-3 rounded border border-gray-400 bg-white text-black"
                  onChange={handleChange}
                  value={formData.eventEndTime}
                  required
                />
              </div>
            </div>
          </div>

          {/* Estimated Number of Guests */}
          <div>
            <label className="block font-semibold mb-1">Estimated Number of Guests *</label>
            <input
              type="number"
              name="guestCount"
              placeholder="e.g. 75"
              className="w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.guestCount}
              required
            />
          </div>

          {/* Bartending Options */}
          <div>
            <label className="block font-semibold mb-1">Bartending Options *</label>
            <select
              name="bartendingOption"
              className="w-full p-3 rounded border border-gray-400 bg-white text-black"
              onChange={handleChange}
              value={formData.bartendingOption}
            >
              <option>bartender(s) only</option>
              <option>bartender(s) + Mobile Bar</option>
            </select>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block font-semibold mb-1">Any other details you would like for us to know:</label>
            <textarea
              name="additionalDetails"
              placeholder="e.g. Special drink requests, event theme, etc."
              className="w-full p-3 rounded border border-gray-400"
              onChange={handleChange}
              value={formData.additionalDetails}
            ></textarea>
          </div>

          {/* Preferred Method of Contact */}
          <div>
            <label className="block font-semibold mb-1">Preferred Method of Contact *</label>
            <select
              name="contactMethod"
              className="w-full p-3 rounded border border-gray-400 bg-white text-black"
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
              className="text-blue-400 underline cursor-pointer"
              onClick={() => setShowDryHireOverlay(true)}
            >
              Acknowledgment of Dry Hire
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded font-semibold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>

          {feedback && <p className="text-center mt-4">{feedback}</p>}
        </form>
      </section>

      {/* Dry Hire Overlay */}
      {showDryHireOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowDryHireOverlay(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // prevent close on modal click
          >
            <button
              onClick={() => setShowDryHireOverlay(false)}
              className="absolute top-2 right-2 text-black font-bold"
            >
              X
            </button>
            <h3 className="text-xl font-bold mb-4">Dry Hire Agreement</h3>
            <p className="mb-4">
              By accepting the dry hire agreement, you agree to provide all the alcohol for your event, and we will provide the bartending 
              service, supplies and materials (napkins, cups, straws), bar set-up. This allows you (the client) to purchase alcohol at cost 
              and means you get to keep all of the alcohol unused at the event. Determining how much, and what kind of alcohol/specialty 
              drinks you would like at your event will be calculated at the next step after finishing this form.
            </p>
            <button
              onClick={() => setShowDryHireOverlay(false)}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Other Event Type Modal */}
      {showOtherEventModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeOtherEventModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // prevent close on modal click
          >
            <button
              onClick={closeOtherEventModal}
              className="absolute top-2 right-2 text-black font-bold"
            >
              X
            </button>
            <h3 className="text-xl font-bold mb-4">Specify Event Type</h3>
            <form onSubmit={handleOtherEventSubmit}>
              <input
                type="text"
                name="otherEventType"
                placeholder="e.g. Anniversary, Reunion, etc."
                className="w-full p-3 rounded border border-gray-400 mb-4"
                onChange={handleChange}
                value={formData.otherEventType}
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactForm;


