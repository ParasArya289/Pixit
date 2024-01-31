import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const pickRandomIndex = () => {
  return Math.floor(Math.random() * 200);
};
console.log(pickRandomIndex())

export const fetchBackground = createAsyncThunk(
  "background/fetchBackground",
  async () => {
    const response = await axios.get(
      "https://pixabay.com/api/?key=42128430-a5f2c1adfe1543c70380109ea&image_type=photo&pretty=true&orientation=horizontal&order=popular&min_width=1920&min_height=1080&per_page=200&q=dark"
    );
    return response.data.hits[pickRandomIndex()];
  }
);

const initialState = {
  status: "idle",
  error: null,
  background: {},
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBackground.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBackground.fulfilled, (state, action) => {
        state.status = "success";
        state.background = action.payload;
      })
      .addCase(fetchBackground.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});
export const { reducer: backgroundReducer } = backgroundSlice;
