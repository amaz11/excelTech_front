import apiSlice from "./api";


const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postTask: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/tasks",
                body: data,
            }),
            invalidatesTags: ['Task'],

        }),
        getTask: builder.query({
            query: () => ({
                url: `/tasks/?limits=10&page=1`,
            }),
            providesTags: ['Task'],
        }),
        getTaskID: builder.query({
            query: (id) => ({
                url: `/tasks/${id}`,
            }),
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `tasks/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Task'],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task'],
        })
    }),
});

export const { useDeleteTaskMutation, useGetTaskIDQuery, usePostTaskMutation, useUpdateTaskMutation, useGetTaskQuery } = taskApi;