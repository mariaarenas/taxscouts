import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
          return `?q=language:${search.language}&title=${search.search}&limit=10&sort=editions`;
        }
      },
    }),
  }),
});

export const { useGetBookByTitleAndLanguageQuery } = bookSearchApi;
