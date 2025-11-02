import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  // ----- Existing state -----
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});

  // ----- NEW: Watchlist state -----
  const [watchlist, setWatchlist] = useState([]);

  // ----- Favorites -----
  const addToFavorites = (movie) => {
    if (!favorites.includes(movie.id)) {
      setFavorites([...favorites, movie.id]);
    }
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  // ----- Reviews -----
  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  // ----- NEW: Watchlist functions -----
  const addToWatchList = (movie) => {
    if (!watchlist.includes(movie.id)) {
      setWatchlist([...watchlist, movie.id]);
      console.log("Added to watchlist:", movie.title);
    }
  };

  const handleRemoveFromWatchList = (movie) => {
    setWatchlist(watchlist.filter((mId) => mId !== movie.id));
    console.log("Removed from watchlist:", movie.title);
  };

  // ----- Context value -----
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        watchlist,
        addToWatchList,
        handleRemoveFromWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
