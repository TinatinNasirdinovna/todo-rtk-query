import { BaseQueryFn, fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.elchocrud.pro/api/v1/5e25470e9276a3027c2ed5f6b7a97f4b/todoo",
})

const baseQueryExtended: BaseQueryFn = async(args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    return result;
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryExtended,
    refetchOnFocus: true,
    refetchOnReconnect:true,
    tagTypes: ["todo"],
    endpoints: () => ({}),
})

