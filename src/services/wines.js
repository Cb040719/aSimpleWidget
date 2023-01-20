import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://cb040719.github.io/RestApi/wines-api-test/";
export const BASE_QUERY = "api.json";

export const winesApi = createApi({
	reducerPath: "winesApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getWinesByName: builder.query({
			query: (name) => `${BASE_QUERY}${name}`,
		}),
	}),
});

export const { useGetWinesByNameQuery } = winesApi;
