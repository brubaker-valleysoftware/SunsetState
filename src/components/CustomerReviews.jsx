"use client";
import React, { useState, useEffect } from "react";

function getTimeAgo(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return years === 1 ? "a year ago" : `${years} years ago`;
  if (months > 0) return months === 1 ? "a month ago" : `${months} months ago`;
  if (weeks > 0) return weeks === 1 ? "a week ago" : `${weeks} weeks ago`;
  if (days > 0) return days === 1 ? "a day ago" : `${days} days ago`;
  if (hours > 0) return hours === 1 ? "an hour ago" : `${hours} hours ago`;
  if (minutes > 0) return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
  return "just now";
}

const reviews = [
  {
    name: "Diane Wyatt",
    rating: 5,
    date: "2026-07-12",
    review:
      "Lots of junk removal choices in AZ. PICK Sunset State Junk Removal and here's WHY: Ecomonically and competitively priced: You get more than what you pay for. Professional: Local-owned business provides better service. Integrity: They do ...",
  },
  {
    name: "E B",
    rating: 5,
    date: "2026-07-09",
    review:
      "Excellent! They did exactly what they said they would do! Very professional! Friendly and awesome communication! We will absolutely use them again without hesitation! Family owned!",
  },
  {
    name: "Robert Bubik",
    rating: 5,
    date: "2026-07-09",
    review:
      "Sunset State Junk Removal is the BOMB! I am moving and Fernand meet all my needs to the fullest. Give him a try, you will not be disappointed I promise.",
  },
  {
    name: "brandon reyes",
    rating: 5,
    date: "2026-07-09",
    review:
      "Excellent service! Very reliable, affordable, and professional. I contacted him about junk removal and everything was taken care of within the hour. I would definitely recommend him to anyone needing junk removed!",
  },
  {
    name: "Geoff Walchli",
    rating: 5,
    date: "2026-06-09",
    review:
      "Sunset State Junk Removal provided excellent service. Great communication and showed up exactly when they said they would. Will definitely be using them again for any future junk removals! Highly recommend!",
  },
  {
    name: "Michael Zimmerman",
    rating: 5,
    date: "2026-06-09",
    review:
      "Fernand was amazing. He came into our home and was respectful to everyone, including our pets. Worked diligently to get all the items out of the house without issue or damage to walls or doorframes. He actively asked if there were any ...",
  },
  {
    name: "Mitch Erickson",
    rating: 5,
    date: "2026-05-25",
    review:
      "Fantastic customer service. My junk problem was solved quickly, professionally and all for a very reasonable cost. The area of the yard was left in better condition than before I starded piling debris there. Highly recommended. I will definately be utilizing Sunset for future projects. Thank you Sunset! You are the best!",
  },
  {
    name: "Reed Adams",
    rating: 5,
    date: "2026-05-23",
    review:
      "They showed up right on time and took care of everything! Sunset cleaned up my space and was extremely professional. So glad to have my full yard back!",
  },
  {
    name: "Nadia Untalan",
    rating: 5,
    date: "2026-05-23",
    review:
      "I had a great experience with Sunset State Junk Removal. Fernand is very welcoming and nice guy. He cleaned out my garage in a timely manner and definitely made my move out less stressful.",
  },
  {
    name: "Tessa Pellham",
    rating: 5,
    date: "2026-05-20",
    review:
      "We had an excellent experience with Sunset State Junk Removal from start to finish. Fernand was professional, punctual, and extremely hardworking. He arrived on time, worked quickly, and handled everything with care and efficiency.",
  },
  {
    name: "London Carsh",
    rating: 5,
    date: "2026-05-18",
    review:
      "Fernando was so friendly, professional, and fast! They came out only a few hours after my inquiry. Would definitely recommend their services.",
  },
  {
    name: "Dan Franey",
    rating: 5,
    date: "2026-05-18",
    review: "Very professional and great pricing, quick turnaround.",
  },
  {
    name: "Jacob Schneidmiller",
    rating: 5,
    date: "2026-05-04",
    review: "Was very friendly, on time, and efficient! Will definately use him again in the future.",
  },
  {
    name: "Jessica Hayes",
    rating: 5,
    date: "2026-05-04",
    review: "Fantastic service, on time fairly priced and very kind. Would recommend, would call again 10/10",
  },
  {
    name: "Kayla Dixon",
    rating: 5,
    date: "2026-04-25",
    review:
      "Fernand was at our residence within 30 minutes of asking for his services. He is very kind and respectful! 5 stars!!",
  },
  {
    name: "J R",
    rating: 5,
    date: "2026-04-25",
    review:
      "I had a great experience with Sunset State Junk Removal. Everything was easy and straightforward. He showed up right on time, which I really appreciated, and immediately got to work without any hassle. What stood out the most was how respectful and efficient he was.",
  },
  {
    name: "Blue Desert Pools",
    rating: 5,
    date: "2026-03-25",
    review:
      "These guys are always quick and professional. Scheduling is a breeze and the customer service is unmatched! The after photos are great as well. Thank you!",
  },
  {
    name: "Justin",
    rating: 5,
    date: "2026-02-25",
    review:
      "Quick, efficient, and reliable! I made a last minute call to get some garage clutter cleared and it was taken care of in less than 30 minutes. Would highly recommend to anyone who needs junk removal done right, and at a great price.",
  },
  {
    name: "Jeff Waliszewski",
    rating: 5,
    date: "2026-02-25",
    review: "Friendly, very reasonable and did a great job!",
  },
  {
    name: "Dennis Kvasnikov",
    rating: 5,
    date: "2026-02-25",
    review:
      "I had an awesome experience with Sunset State Junk Removal. They helped me clear out a big pile of yard waste, and the whole process was smooth from start to finish. The team showed up on time, worked quickly, and handled everything with care.",
  },
  {
    name: "Gage Farmer",
    rating: 5,
    date: "2026-01-25",
    review:
      "On time, professional, and very reasonable price! Will be using them for any future junk/trash removal needs!",
  },
  {
    name: "George Fischer",
    rating: 5,
    date: "2025-12-25",
    review: "Came over next day on time and gave me a great price. Would definitely recommend.",
  },
  {
    name: "Kathy Swistek",
    rating: 5,
    date: "2025-12-25",
    review:
      "Very good experience. After filling out online request for quote I received a text immediately and sent some pictures over of the stuff we had to pick up. I received a price almost immediately and we scheduled a pick up for the following day.",
  },
  {
    name: "Garrett Gonzales",
    rating: 5,
    date: "2025-11-25",
    review:
      "Sunset State Junk Removal is great! They were able to clean up the side of my yard on the same day I reached out! I appreciate how fast, friendly, and professional their service was!",
  },
  {
    name: "Kaycee S",
    rating: 5,
    date: "2025-11-25",
    review: "Responds quickly and gets the job done fast! Great workers.",
  },
  {
    name: "Noah Clarke",
    rating: 5,
    date: "2025-11-25",
    review:
      "Fast and Get the job done! My yard n garage look great! They go above and beyond for customers and couldn't have called for a better company to remove my junk!",
  },
  {
    name: "Michael Attwood",
    rating: 5,
    date: "2025-11-25",
    review:
      "They arrived on time. The owner took the time to listen to what I wanted removed and did so in a timely manner. He then took his leaf blower and cleared the area. Thank you Fernand and crew! You did a great job!",
  },
  {
    name: "Nick Boswell",
    rating: 5,
    date: "2025-11-25",
    review: "Thanks for the great service. Very respectful and expedient.",
  },
  {
    name: "Bryce Montague",
    rating: 5,
    date: "2025-10-25",
    review:
      "Communication and transparency is most important when choosing which company to hire. The team over at Sunset State Junk Removal is incredibly responsive and got the job done in a timely manner. I could not have asked for a better experience.",
  },
  {
    name: "Lavish Crew",
    rating: 5,
    date: "2025-10-25",
    review:
      "Fernand and family from Sunset State were AMAZING!! They showed up right on time, and were extremely communicative throughout the whole process. They came out a day after I contacted them and offered a VERY fair price for the work.",
  },
  {
    name: "Omegalul",
    rating: 5,
    date: "2025-10-25",
    review:
      "Sunset State Junk Removal was awesome! They showed up on time, worked super fast, and were really friendly. Pricing was fair and everything was cleaned up perfectly. I'd definitely use them again and recommend them to anyone needing junk gone!",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? "text-orange" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-deepteal flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-montserrat font-semibold text-deepteal text-lg truncate">{review.name}</h4>
          <p className="text-gray-500 text-sm font-montserrat">{getTimeAgo(review.date)}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="mb-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 font-montserrat text-sm leading-relaxed flex-1">"{review.review}"</p>

      {/* Google Icon */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="text-gray-500 text-xs font-montserrat">Google Review</span>
      </div>
    </div>
  );
};

export default function CustomerReviews() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const initialCount = isMobile ? 3 : 6;
  const displayedReviews = showAll ? reviews : reviews.slice(0, initialCount);

  return (
    <section className="bg-sand py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-deepteal text-4xl md:text-5xl font-montserrat font-bold mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-deepteal font-montserrat font-semibold text-xl">5.0</span>
            <span className="text-gray-600 font-montserrat">({reviews.length} Reviews)</span>
          </div>
          <p className="text-gray-600 font-montserrat text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {reviews.length > initialCount && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-deepteal text-white font-montserrat font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-teal hover:shadow-lg"
            >
              {showAll ? "Show Less" : `Show All Reviews`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
