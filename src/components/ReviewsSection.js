import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSwipeable } from "react-swipeable";

const REVIEWS_URL = "https://share.google/iYwsv22C4KxZOubqp";

// `excerpt` is a verbatim passage from the full Google review.
// `only` limits a review to one layout: 6 show on desktop, 5 on mobile.
const reviewsData = [
  {
    name: "Alex H.",
    event: "Wedding",
    stars: 5,
    excerpt: "Clinking Bubbles bartended my wedding and they were absolutely a pleasure to work with. The coordination was easy and flawless. The drinks were outstanding. I kept getting compliments on how delish everything was. They were so professional, I could not recommend them enough!"
  },
  {
    name: "Ariana B.",
    event: "Birthday party",
    stars: 5,
    excerpt: "I hired Clinking Bubbles to bartend my birthday party and they were absolutely incredible from start to finish. They were prompt, so kind, and extremely professional."
  },
  {
    name: "Alex F.",
    event: "Corporate networking event",
    stars: 5,
    only: "mobile",
    excerpt: "They arrived early to set up, were professional, and helped create a fun engaging environment for everyone there. Would recommend and will use again!"
  },
  {
    name: "Caroline M.",
    event: "Private party",
    stars: 5,
    only: "desktop",
    excerpt: "From beginning to end, the service at Clinking Bubbles was superb. They really helped make our party a success!"
  },
  {
    name: "Andre P.",
    event: "Corporate holiday party",
    stars: 5,
    excerpt: "Clinking bubbles is the best! They came and bartended at our company holiday party and made a custom themed menu off our business! You can tell how much effort they put in, not to mention the cocktails were delicious."
  },
  {
    name: "Linda G.",
    event: "Bridal shower",
    stars: 5,
    excerpt: "The drinks were so refreshing and delicious. They really personalize every detail and made the day extra special!"
  },
  {
    name: "Priten P.",
    event: "Professional networking event",
    stars: 5,
    only: "desktop",
    excerpt: "It was seamless from start to finish. The whole bar was beautiful and impressed the guests, and the bartenders were delightful."
  }
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const reviews = reviewsData.filter((r) => !r.only || r.only === (isMobile ? "mobile" : "desktop"));
  const count = reviews.length;
  const index = Math.min(current, count - 1);
  const next = () => setCurrent((index + 1) % count);
  const prev = () => setCurrent((index - 1 + count) % count);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: false,
  });

  return (
    <section className="py-12 md:py-20 px-4 text-black" style={{ backgroundColor: "#faf8f5" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="clinking-font text-3xl font-bold text-center mb-2 leading-tight">
          What Our Clients Say
        </h2>
        <div className="section-gold-accent mb-4 md:mb-12"></div>

        <div {...swipeHandlers} className="relative text-center">
          <span
            aria-hidden="true"
            className="bubbles-font block text-8xl leading-none select-none h-[3rem] md:h-[3.25rem]"
            style={{ color: "#e6d8bf" }}
          >
            &ldquo;
          </span>

          {/* All quotes share one grid cell so the section keeps the tallest height */}
          <div className="grid" aria-live="polite">
            {reviews.map((review, i) => (
              <figure
                key={review.name}
                aria-hidden={i !== index}
                className="m-0 col-start-1 row-start-1 flex flex-col items-center transition-opacity duration-500 ease-out"
                style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
              >
                <div className="flex text-xl mb-4 md:mb-6" style={{ color: "#f0a800" }} aria-label="5 out of 5 stars">
                  {[...Array(review.stars)].map((_, s) => (
                    <FaStar key={s} className="mx-0.5" />
                  ))}
                </div>
                <blockquote
                  className="bubbles-font m-0 max-w-3xl text-xl sm:text-2xl md:text-[1.75rem] leading-[1.55]"
                  style={{ color: "#3a2a1c" }}
                >
                  &ldquo;{review.excerpt}&rdquo;
                </blockquote>
                <figcaption className="mt-6 md:mt-8 flex flex-col items-center gap-1">
                  <span className="font-semibold text-[15px] tracking-wide" style={{ color: "#493423" }}>
                    {review.name}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-500">
                    {review.event}
                    <span aria-hidden="true">&middot;</span>
                    <FcGoogle className="text-base" aria-hidden="true" />
                    <a
                      href={REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={i === index ? 0 : -1}
                      className="underline underline-offset-4 decoration-[#c9952e]/50 hover:decoration-[#c9952e] hover:text-gray-800 transition-colors"
                    >
                      Google review
                    </a>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Reviewer index */}
        <div
          role="tablist"
          aria-label="Choose a review"
          className="mt-8 md:mt-14 grid border-t border-[#493423]/15"
          style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
        >
          {reviews.map((review, i) => {
            const active = i === index;
            return (
              <button
                key={review.name}
                role="tab"
                aria-selected={active}
                onClick={() => setCurrent(i)}
                className="relative pt-4 pb-1 text-center bg-transparent border-none cursor-pointer group"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 -top-px h-0.5 transition-opacity duration-300"
                  style={{ backgroundColor: "#c9952e", opacity: active ? 1 : 0 }}
                />
                <span
                  className={`block text-[12px] md:text-sm tracking-normal md:tracking-wide transition-colors ${
                    active ? "font-semibold text-[#493423]" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {review.name}
                </span>
                <span className="hidden md:block text-xs text-gray-400 mt-0.5 truncate px-2">
                  {review.event}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bubbles-font text-base sm:text-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3 rounded-full shadow-sm hover:shadow transition w-full sm:w-auto text-center"
          >
            See more reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
