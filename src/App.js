import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import MoviesByGenre from "./MoviesByGenre";
import MovieDetail from "./MovieDetail";
import MovieSearch from "./MovieSearch";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://wookie.codesubmit.io/movies", {
      method: "GET",
      headers: {
        Authorization: "Bearer Wookie2019"
      }
    })
      .then(res => res.json())
      .then(data => {
        setMovies(data.movies);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          path="/"
          exact
          render={props => <MoviesByGenre movies={movies} {...props} />}
        />
        <Route
          path="/detail/:id"
          render={props => <MovieDetail movies={movies} {...props} />}
        />
        <Route
          path="/search/:term"
          render={props => <MovieSearch movies={movies} {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
