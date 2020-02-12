import React from "react";
import { Link } from "react-router-dom";

export default function GenreRow({ genre, movies }) {
  const genreMovies = movies.filter(movie => movie.genres.includes(genre));
  return (
    <div>
      <h2>{genre}</h2>
      <div style={{ display: "flex" }}>
        {genreMovies.map(movie => (
          <Link to={`/detail/${movie.id}`}>
            <div style={{ margin: "20px" }}>{movie.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
