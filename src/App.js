import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import MoviesByGenre from "./MoviesByGenre";
import MovieDetail from "./MovieDetail";
import moviesData from "./movies";

function App() {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch("https://wookie.codesubmit.io/movies", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Bearer Wookie2019"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const genres = [];
  //       data.movies.forEach(movie => {
  //         movie.genres.forEach(genre => genres.push(genre));
  //       });

  //       setGenres([...new Set(genres)]);
  //     });
  // }, []);

  useEffect(() => {
    setMovies(moviesData);
  }, []);
  console.log("FROM APP");
  console.log(movies);
  return (
    <div className="App">
      <Header />
      <Router>
        <Route
          path="/"
          exact
          render={props => <MoviesByGenre movies={movies} {...props} />}
        />
        <Route
          path="/detail/:id"
          render={props => <MovieDetail movies={movies} {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
