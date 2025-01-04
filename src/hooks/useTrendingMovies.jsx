import { useDispatch } from "react-redux";
import { addPopularMovies, addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const page = Math.floor(Math.random() * (40 - 1 + 1)) + 1;
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page="+ page, // here can change the movie trailer to show
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
