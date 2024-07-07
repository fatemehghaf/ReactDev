import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorSlice";
import themeReducer from "./slices/themeSlice";


export const store = configureStore({
  reducer: {
    colors: colorReducer,
    theme: themeReducer, 
    
  },
});
