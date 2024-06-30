import apiSlice from "./api";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: 'auth/users',
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useGetUsersQuery } = authApi;