import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// services
import searchSlice from "./search-slice";
import { bookSearchApi } from "../services/book-search";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    [bookSearchApi.reducerPath]: bookSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSearchApi.middleware),
});

setupListeners(store.dispatch);

export default store;
