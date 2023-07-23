import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import userReducer from "./reducers/userReducer"
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})
setupListeners(store.dispatch)
