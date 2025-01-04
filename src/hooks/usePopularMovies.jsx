import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const page = Math.floor(Math.random() * (40 - 1 + 1)) + 1;
  const getpopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page="+ page, // here can change the movie trailer to show
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getpopularMovies();
  }, []);
};

export default usePopularMovies;
