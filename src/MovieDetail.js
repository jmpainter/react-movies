import React from "react";
import { FaStar } from "react-icons/fa";

export default function MovieDetail({ movies = [], match = {} }) {
  if (match.params && movies.length > 0) {
    const movie = movies.find(item => item.id === match.params.id);
    return (
      <div>
        <img
          src={movie.poster}
          alt="poster"
          style={{ float: "left", width: "250px", margin: "20px" }}
        />
        <h1>{movie.title}</h1>
        <FaStar style={{ color: "yellow" }} />
        <FaStar style={{ color: "white" }} />
        <p>
          {movie.released_on} | {movie.length} | {movie.director}
        </p>
        <p>{movie.overview}</p>
      </div>
    );
  } else {
    return null;
  }
}
