import { configureStore } from "@reduxjs/toolkit";
import { backgroundReducer } from "./backgroundSlice";
import { searchResultReducer } from "./SearchResultSlice";

export default configureStore({
  reducer: {
    background: backgroundReducer,
    searchResult: searchResultReducer,
  },
});
