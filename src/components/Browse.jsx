import React from "react";
import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import MainContainer from "./MainContainer.jsx"
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import useTrendingMovies from "../hooks/useTrendingMovies.jsx";
import useUpcomingMovies from "../hooks/useUpcomingMovies.jsx";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
