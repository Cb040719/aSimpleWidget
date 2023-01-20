import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { winesApi } from "../services/wines";

export const store = configureStore({
	reducer: {
		[winesApi.reducerPath]: winesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(winesApi.middleware),
});

setupListeners(store.dispatch);
