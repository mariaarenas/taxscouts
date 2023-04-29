import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action) {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
