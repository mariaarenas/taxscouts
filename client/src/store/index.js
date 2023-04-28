import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchData = () => {
  return async () => {
    const getItems = async () => {
      const response = await axios.get(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=2"
      );

      const items = await response.data;
      return items;
    };

    try {
      const data = await getItems();
      console.log(data.docs);
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchActions = searchSlice.actions;

export default store;
