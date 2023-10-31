import React from "react";

const Stars = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(
      <span style={{color: "goldenrod"}} key={i}>
        &#9733;
      </span> // Unicode for a star (★)
    );
  }

  if (hasHalfStar) {
    starIcons.push(
      <span style={{ color: "goldenrod" }} key="half-star">
        &#9734;&#65039;
      </span> // Unicode for a half star (☆)
    );
  }

  const emptyStars = totalStars - (fullStars + (hasHalfStar ? 1 : 0));
  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(
      <span key={i + fullStars + 1}>
        &#9734;
      </span> // Unicode for an empty star (☆)
    );
  }

  return <div >{starIcons}</div>;
};

export default Stars;
