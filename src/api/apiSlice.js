import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),//https://fakestoreapi.com/
  tagTypes: ["Products", "User","Admin","adminUsers"],
  endpoints: (builder) => ({}),
})