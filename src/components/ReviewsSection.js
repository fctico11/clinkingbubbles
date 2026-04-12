import React, { useState } from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useSwipeable } from "react-swipeable";

const reviewsData = [
  {
    name: "Andre P.",
    stars: 5,
    text: "Clinking bubbles is the best! They came and bartended at our company holiday party and made a custom themed menu off our business! You can tell how much effort they put in, not to mention the cocktails were delicious. Top notch people and a top notch service. Can't wait to use them next year, 100% recommend.\n\nThank you!!!!"
  },
  {
    name: "Ariana B.",
    stars: 5,
    text: "I hired Clinking Bubbles to bartend my birthday party and they were absolutely incredible from start to finish. They were prompt, so kind, and extremely professional. They came fully prepared with everything we could possibly need — their entire setup was impressive, complete with every garnish and mixer you could imagine.\n\nWe collaborated on two signature cocktails ahead of time, and they absolutely nailed them. They printed and designed menus for us! Not only were the drinks delicious, they were beautifully presented and so decorative — they truly elevated the whole party experience. Our guests couldn't stop raving about them and went back for seconds (and thirds!).\n\nThey also cleaned up their entire space before leaving, which I appreciated so much at the end of the night. I couldn't recommend them enough. If you’re hosting an event and want a talented, prepared, and genuinely lovely team to work with — Clinking Bubbles is for you! 🥂"
  },
  {
    name: "Alex F.",
    stars: 5,
    text: "Used Clinking Bubbles for a corporate networking event. They arrived early to set up, were professional, and helped create a fun engaging environment for everyone there. Would recommend and will use again!"
  },
  {
    name: "Priten P.",
    stars: 5,
    text: "I hired Clinking Bubbles for a professional networking event and could not be happier with their services! It was seamless from start to finish- they came in and set everything up in a short amount of time, the whole bar was beautiful and impressed the guests, and the bartenders were delightful. Will definitely use them again and highly suggest others do too!"
  },
  {
    name: "Linda G.",
    stars: 5,
    text: "We hired Clinking Bubbles for my bridal shower and they were amazing. The drinks were so refreshing and delicious. They really personalize every detail and made the day extra special! We can can't wait to hire them for our next event! Thank you!!!!"
  }
];

const renderReviewText = (text) => {
  const MAX_LENGTH = 220;
  if (text.length <= MAX_LENGTH) {
    return text;
  }
  let truncated = text.substring(0, MAX_LENGTH);
  truncated = truncated.substring(0, Math.min(truncated.length, truncated.lastIndexOf(" ")));
  return (
    <>
      {truncated}...{" "}
      <a 
        href="https://share.google/kgl36l7dVIDmGAlYE" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium whitespace-nowrap"
      >
        read more
      </a>
    </>
  );
};

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextReview,
    onSwipedRight: prevReview,
    preventScrollOnSwipe: true,
  });

  const displayedReviews = [
    reviewsData[currentIndex % reviewsData.length],
    reviewsData[(currentIndex + 1) % reviewsData.length],
    reviewsData[(currentIndex + 2) % reviewsData.length],
  ];

  return (
    <section className="py-16 px-4 text-black" style={{ backgroundColor: '#faf8f5' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="clinking-font text-3xl font-bold text-center mb-2 leading-tight">
          What Our Clients Say
        </h2>
        <div className="section-gold-accent mb-8"></div>
        
        <div className="relative" {...swipeHandlers}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 mb-12 items-start relative">
            {displayedReviews.map((review, idx) => {
              let mobileStackClass = "hidden md:flex";
              if (idx === 0) {
                mobileStackClass = "flex relative z-30 translate-y-0 scale-100 opacity-100 shadow-md";
              } else if (idx === 1) {
                mobileStackClass = "flex absolute inset-x-0 top-0 z-20 translate-y-4 scale-[0.95] opacity-60 pointer-events-none shadow-none md:pointer-events-auto border-b-0";
              } else if (idx === 2) {
                mobileStackClass = "flex absolute inset-x-0 top-0 z-10 translate-y-8 scale-[0.90] opacity-30 pointer-events-none shadow-none md:pointer-events-auto border-b-0";
              }

              return (
                <div 
                  key={`${currentIndex}-${idx}`} 
                  className={`${mobileStackClass} md:relative md:!translate-y-0 md:!scale-100 md:!opacity-100 md:!shadow-sm md:!inset-auto md:!border-b flex-col bg-white rounded-2xl p-6 items-start border border-gray-100 border-t-4 border-t-[#f59e0b] hover:shadow-lg transition-all duration-300 ease-in-out h-72 sm:h-64 overflow-hidden`}
                >
                  <FaQuoteRight className="absolute bottom-4 right-4 text-[6rem] text-gray-100 opacity-40 z-0 pointer-events-none" />
                  
                  <div className="relative z-10 flex items-center gap-3 mb-3 w-full">
                    <div className="w-10 h-10 rounded-full bg-[#493423] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-[15px] truncate">{review.name}</h3>
                    </div>
                    <div className="flex-shrink-0">
                      <FcGoogle className="text-2xl" />
                    </div>
                  </div>
                  <div className="relative z-10 flex text-yellow-400 mb-2 text-sm flex-shrink-0">
                    {[...Array(review.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="relative z-10 text-gray-600 text-[15px] leading-relaxed whitespace-pre-wrap flex-grow overflow-hidden w-full">
                    {renderReviewText(review.text)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-10">
            <button 
              onClick={prevReview}
              className="bg-transparent border-none text-yellow-500 text-[2rem] w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Previous review"
            >
              <TiChevronLeftOutline />
            </button>
            <div className="flex gap-2">
              {reviewsData.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`block w-3 h-3 rounded-full cursor-pointer transition-colors ${i === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
            <button 
              onClick={nextReview}
              className="bg-transparent border-none text-yellow-500 text-[2rem] w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Next review"
            >
              <TiChevronRightOutline />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://share.google/kgl36l7dVIDmGAlYE"
            target="_blank"
            rel="noopener noreferrer"
            className="bubbles-font text-base sm:text-lg md:text-xl bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3 rounded-full shadow-sm hover:shadow transition flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            See more reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
