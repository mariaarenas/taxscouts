import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    replaceItems(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
