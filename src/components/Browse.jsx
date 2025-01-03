import React from "react";
import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
