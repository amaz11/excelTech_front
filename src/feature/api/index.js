import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getTokenFromLocalStorage } from "../../utils/token"
const apiSlice = createApi({
    reducePath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8000/api/v1/`,
        headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`
        }
    }),
    endpoints: (builder) => ({})
})

export default apiSlice