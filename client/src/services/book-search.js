import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import i18n from "../translation/i18n";

// Define a service using a base URL and expected endpoints and returns a query
export const bookSearchApi = createApi({
  reducerPath: "bookSearchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://openlibrary.org/search.json" }),
  endpoints: (builder) => ({
    getBookByTitleAndLanguage: builder.query({
      query: (searchValue) => {
        if (!searchValue) {
          return "";
        } else {
          return `?q=language:${i18n.language}&title=${searchValue}&limit=10&sort=editions`;
        }
      },
    }),
  }),
});

export const { useGetBookByTitleAndLanguageQuery } = bookSearchApi;
