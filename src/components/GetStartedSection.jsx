import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GetStartedSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <section
      className="py-20 relative overflow-hidden text-center"
      style={{ backgroundColor: "#faf8f5" }}
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-6 relative z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="clinking-font text-3xl md:text-5xl lg:text-6xl mb-4 font-bold uppercase"
          style={{ color: '#493423' }}
          variants={itemVariants}
        >
          Let's Get Started
        </motion.h2>

        <motion.div variants={itemVariants} className="flex justify-center">
            <div className="section-gold-accent mb-8"></div>
        </motion.div>

        <motion.p
          className="bubbles-font text-xl md:text-2xl font-semibold mb-6 tracking-wide"
          style={{ color: '#493423' }}
          variants={itemVariants}
        >
          Ready to Plan Your Perfect Event?
        </motion.p>

        <motion.p
          className="bubbles-font text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-700"
          variants={itemVariants}
        >
          Get a personalized, no-obligation quote tailored to your unique vision. Our passionate team is ready to bring your dream event to life and will be in touch within 24 hours.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a href="/contact">
            <button
              className="bubbles-font text-lg md:text-xl text-black font-semibold px-10 py-4 rounded-full transition transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#c9952e]/50 inline-flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #e6c34d 0%, #c9952e 50%, #e6c34d 100%)',
                backgroundSize: '200% 200%',
                boxShadow: '0 4px 15px rgba(201, 149, 46, 0.3)'
              }}
            >
              Request Your Free Quote
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative floating bubbles for extra styling */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 rounded-full border border-[#c9952e] opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-24 h-24 rounded-full border border-[#c9952e] opacity-10"
        animate={{
          y: [0, -40, 0],
          x: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
};

export default GetStartedSection;
