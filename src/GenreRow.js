import React from "react";
import { Link } from "react-router-dom";

export default function GenreRow({ genre, movies }) {
  const genreMovies = movies.filter(movie => movie.genres.includes(genre));
  return (
    <div>
      <h2 style={{ marginLeft: "35px" }}>{genre}</h2>
      <div style={{ display: "flex", marginLeft: "30px" }}>
        {genreMovies.map(movie => (
          <Link to={`/detail/${movie.id}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "150px", margin: "10px" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
