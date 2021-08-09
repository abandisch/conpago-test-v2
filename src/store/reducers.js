import booksApi from "../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  bookTitles: [],
  numFound: 0,
  apiStatus: "idle",
};

export const searchAuthorBooks = createAsyncThunk(
  "books/searchAuthorBooks",
  async (author) => {
    const data = await booksApi.searchBooks(author);
    return data;
  }
);

const slice = createSlice({
  name: "books",
  initialState,
  extraReducers: {
    [searchAuthorBooks.pending]: (state) => {
      state.bookTitles = [];
      state.numFound = 0;
      state.apiStatus = "pending";
    },
    [searchAuthorBooks.fulfilled]: (state, action) => {
      const { numFound, docs } = action.payload;

      state.bookTitles = docs.map((book) => book.title);
      state.numFound = numFound;
      state.apiStatus = "idle";
    },
    [searchAuthorBooks.rejected]: (state) => {
      state.apiStatus = "idle";
    },
  },
});

export default slice.reducer;
