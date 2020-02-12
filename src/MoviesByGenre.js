import React from "react";
import GenreRow from "./GenreRow";

export default function MoviesByGenre({ movies = [] }) {
  let totalGenres = [];
  movies.forEach(movie => {
    movie.genres.forEach(genre => totalGenres.push(genre));
  });
  totalGenres = [...new Set(totalGenres)];

  return (
    <div>
      {totalGenres.map(genre => (
        <GenreRow genre={genre} movies={movies} />
      ))}
    </div>
  );
}
