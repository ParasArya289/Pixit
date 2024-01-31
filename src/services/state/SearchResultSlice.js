import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const formateQuery = (query) => {
  return query.replaceAll(" ", "+");
};

export const fetchSearchResult = createAsyncThunk(
  "searchResult/fetchSearchResult",
  async (query) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=42128430-a5f2c1adfe1543c70380109ea&image_type=photo&q=${formateQuery(
        query
      )}`
    );
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  error: null,
  searchQuery: "",
  searchResult: {},
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    changeSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResult.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResult.fulfilled, (state, action) => {
        state.status = "success";
        state.searchResult = action.payload;
      })
      .addCase(fetchSearchResult.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});
export const { changeSearchQuery } = searchResultSlice.actions;
export const { reducer: searchResultReducer } = searchResultSlice;
