import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";
import moviesReducer from "./moviesSlice.jsx";

const appStore = configureStore({
    reducer: {
      user: userReducer,
      movies: moviesReducer,
    },
  });
  
  export default appStore;
