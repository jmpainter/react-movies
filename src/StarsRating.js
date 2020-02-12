import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarsRating({ rating }) {
  const numStars = Math.floor(rating / 2);
  const yellowStars = [];
  for (let i = 0; i < numStars; i++) {
    yellowStars.push(<FaStar style={{ color: "yellow" }} />);
  }
  const whiteStars = [];
  for (let i = 0; i < 5 - numStars; i++) {
    whiteStars.push(<FaStar />);
  }

  return (
    <div>
      {yellowStars}
      {whiteStars}
    </div>
  );
}
