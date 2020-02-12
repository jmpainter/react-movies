import React from "react";
import { Link } from "react-router-dom";

export default function MovieSearch({ movies, match }) {
  if (!match) {
    return null;
  }
  const results = movies.filter(movie =>
    movie.title.toLowerCase().includes(match.params.term.toLowerCase())
  );

  return (
    <div style={{ margin: "20px" }}>
      <h2>Search Results:</h2>
      <ul>
        {results.map(movie => (
          <li>
            <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
