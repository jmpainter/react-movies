import React from "react";
import GenreRow from "./GenreRow";

export default function MoviesByGenre({ movies }) {
  if (!movies || movies.length === 0) {
    return <div style={{ margin: "30px" }}>Loading...</div>;
  }
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
