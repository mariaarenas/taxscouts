import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";
import itemsSlice from "./items-slice";

const store = configureStore({
  reducer: { search: searchSlice.reducer, items: itemsSlice.reducer },
});

export default store;
