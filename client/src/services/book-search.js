import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../resources/config";

// Define a service using a base URL and expected endpoints and returns a query
export const bookSearchApi = createApi({
  reducerPath: "bookSearchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://openlibrary.org/search.json" }),
  endpoints: (builder) => ({
    getBookByTitleAndLanguage: builder.query({
      query: (search) => {
        if (!search.search) {
          return "";
        } else {
          return `?q=language:${search.language}&title=${search.search}&limit=${config.default_limit}&sort=editions`;
        }
      },
    }),
  }),
});

export const { useGetBookByTitleAndLanguageQuery } = bookSearchApi;
