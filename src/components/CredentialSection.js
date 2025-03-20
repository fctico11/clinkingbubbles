import React from "react";

const CredentialsSection = () => {
  return (
    <section className="bg-white text-black py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="clinking-font text-3xl font-bold mb-6">
          FULLY LICENSED &amp; INSURED
        </h2>

        {/* Intro Text */}
        <p className="bubbles-font text-lg mb-8 max-w-3xl mx-auto">
        We’re a fully licensed and insured LLC in New Jersey, 
        carrying general and liquor liability insurance. 
        As Food Manager Certified professionals with all required alcohol and 
        bartending licenses, we ensure a safe and compliant experience for you 
        and your guests.
        </p>

        {/* Icons / Highlights: 2 columns on mobile, 4 columns on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-3">🏢</span>
            <p className="bubbles-font text-lg font-semibold">NJ LLC</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl mb-3">⚖️</span>
            <p className="bubbles-font text-lg font-semibold">Liability Insurance</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl mb-3">✔️</span>
            <p className="bubbles-font text-lg font-semibold">Food Manager Certified</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl mb-3">🍸</span>
            <p className="bubbles-font text-lg font-semibold">Bartending License</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
