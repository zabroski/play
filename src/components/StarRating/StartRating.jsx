// import React, { useState, useEffect } from "react";
// import "./StarRating.css";

// const STORAGE_KEY = "hero_star_rating";

// export default function StarRating() {
//   const [rating, setRating] = useState(0);          // last rating user clicked
//   const [hover, setHover] = useState(0);            // star hovered
//   const [avgRating, setAvgRating] = useState(0);    // average rating
//   const [totalRatings, setTotalRatings] = useState(0); // how many people rated

//   // Load saved aggregate data from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) {
//       const { totalStars, totalRatings } = JSON.parse(saved);
//       if (totalRatings > 0) {
//         setTotalRatings(totalRatings);
//         setAvgRating(totalStars / totalRatings);
//       }
//     }
//   }, []);

//   const handleRate = (value) => {
//     setRating(value);

//     // Read existing data
//     const saved = localStorage.getItem(STORAGE_KEY);
//     let totalStars = 0;
//     let totalRatingsCount = 0;

//     if (saved) {
//       const parsed = JSON.parse(saved);
//       totalStars = parsed.totalStars || 0;
//       totalRatingsCount = parsed.totalRatings || 0;
//     }

//     // Update totals
//     totalStars += value;
//     totalRatingsCount += 1;

//     // Save back
//     localStorage.setItem(
//       STORAGE_KEY,
//       JSON.stringify({ totalStars, totalRatings: totalRatingsCount })
//     );

//     setTotalRatings(totalRatingsCount);
//     setAvgRating(totalStars / totalRatingsCount);
//   };

//   return (
//     <div className="star-rating-wrapper">
//       <div className="star-row">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             type="button"
//             className={
//               star <= (hover || rating)
//                 ? "star-btn filled"
//                 : "star-btn"
//             }
//             onClick={() => handleRate(star)}
//             onMouseEnter={() => setHover(star)}
//             onMouseLeave={() => setHover(0)}
//             aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
//           >
//             ★
//           </button>
          
//         ))}
//       </div>

//       <button
//           onClick={() => {
//             localStorage.removeItem("hero_star_rating");
//             window.location.reload();
//           }}
//           style={{
//             marginTop: "12px",
//             padding: "6px 14px",
//             background: "#eee",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             cursor: "pointer",
//           }}
//         >
//             Reset Reviews
//       </button>


//       <div className="star-meta">
//         {totalRatings > 0 ? (
//           <>
//             <span className="star-average">
//               {avgRating.toFixed(1)} / 5.0
//             </span>
//             <span className="star-count">
//               ({totalRatings} {totalRatings === 1 ? "review" : "reviews"})
//             </span>
//           </>
//         ) : (
//           <span className="star-no-reviews">
//             Be the first to leave a rating ⭐
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import "./StarRating.css";

const STORAGE_KEY = "hero_star_rating";

export default function StarRating() {
  // we don't need "rating" anymore, only hover + averages
  const [hover, setHover] = useState(0);               // star hovered
  const [avgRating, setAvgRating] = useState(0);       // average rating
  const [totalRatings, setTotalRatings] = useState(0); // how many people rated

  // Load saved aggregate data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const { totalStars, totalRatings } = JSON.parse(saved);
      if (totalRatings > 0) {
        setTotalRatings(totalRatings);
        setAvgRating(totalStars / totalRatings);
      }
    }
  }, []);

  const handleRate = (value) => {
    // Read existing data
    const saved = localStorage.getItem(STORAGE_KEY);
    let totalStars = 0;
    let totalRatingsCount = 0;

    if (saved) {
      const parsed = JSON.parse(saved);
      totalStars = parsed.totalStars || 0;
      totalRatingsCount = parsed.totalRatings || 0;
    }

    // Update totals with this new rating
    totalStars += value;
    totalRatingsCount += 1;

    // Save back
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ totalStars, totalRatings: totalRatingsCount })
    );

    setTotalRatings(totalRatingsCount);
    setAvgRating(totalStars / totalRatingsCount);
  };

  // value that controls how many stars are filled
  // hover wins while the mouse is over a star, otherwise use average
  const displayValue = hover || avgRating;
  const roundedDisplay = Math.round(displayValue); // e.g. 3.6 -> 4 filled stars

  return (
    <div className="star-rating-wrapper">
      <div className="star-row">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={star <= roundedDisplay ? "star-btn filled" : "star-btn"}
            onClick={() => handleRate(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
          >
            ★
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          localStorage.removeItem(STORAGE_KEY);
          window.location.reload();
        }}
        style={{
          marginTop: "12px",
          padding: "6px 14px",
          background: "#eee",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reset Reviews
      </button>

      <div className="star-meta">
        {totalRatings > 0 ? (
          <>
            <span className="star-average">
              {avgRating.toFixed(1)} / 5.0
            </span>
            <span className="star-count">
              ({totalRatings} {totalRatings === 1 ? "review" : "reviews"})
            </span>
          </>
        ) : (
          <span className="star-no-reviews">
            Be the first to leave a rating ⭐
          </span>
        )}
      </div>
    </div>
  );
}
