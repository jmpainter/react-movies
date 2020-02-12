import React from "react";
import StarsRating from "./StarsRating";

export default function MovieDetail({ movies = [], match = {} }) {
  if (!match.params || movies.length === 0) {
    return <div>Loading...</div>;
  }
  const movie = movies.find(item => item.id === match.params.id);
  return (
    <div style={{ maxWidth: "800px" }}>
      <img
        src={movie.poster}
        alt="poster"
        style={{ float: "left", width: "250px", margin: "20px" }}
      />
      <h1>{movie.title}</h1>
      <StarsRating rating={movie.imdb_rating} />
      <p>
        {movie.released_on.slice(0, 4)} | {movie.length} | {movie.director}
      </p>
      <p>{movie.overview}</p>
    </div>
  );
}
