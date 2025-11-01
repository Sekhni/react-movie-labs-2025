import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlayingMovies } from "../api/tmdb-api";

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title="Now Playing"
      movies={movies}
      action={(movie) => {
        // Placeholder for any icons or buttons
        return null;
      }}
    />
  );
};

export default NowPlayingPage;
