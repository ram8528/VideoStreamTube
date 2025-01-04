import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";
import moviesReducer from "./moviesSlice.jsx";
import gptReducer from "./gptSlice.jsx";
import configReducer from "./configSlice.jsx";

const appStore = configureStore({
    reducer: {
      user: userReducer,
      movies: moviesReducer,
      gpt: gptReducer,
      config : configReducer,
    },
  });
  
  export default appStore;
