import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: { search: searchSlice.reducer },
});

export const searchActions = searchSlice.actions;

export default store;
