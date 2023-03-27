import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "./slices/personsSlice";

export const store = configureStore({
  reducer: {
    persons: personsReducer,
  },
});
