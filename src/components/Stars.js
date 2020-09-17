import React from "react";

//How to use:
//  <Stars />            ->    (     )
//  <Stars fill="3" />   ->    (***  )
//  <Stars fill="5" />   ->    (*****)

const Stars = ({ fill = 0, className }) => {
  const FullStar = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
          fill="#F2994A"
          stroke="#F2994A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const EmptyStar = () => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
          stroke="#F2994A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className={className}>
      {[1, 2, 3, 4, 5].map((x, i) =>
        x <= fill ? <FullStar key={i} /> : <EmptyStar key={i} />
      )}
    </div>
  );
};

export default Stars;
