import apiSlice from "./api";


const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postCategory: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "/category",
                body: data,
            }),
            invalidatesTags: ['Category'],

        }),
        getCategory: builder.query({
            query: () => ({
                url: `/category`,
            }),
            providesTags: ['Category'],
        }),
        getCategoryID: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
            }),
        }),
        updateCategory: builder.mutation({
            query: ({ id, formData }) => ({
                url: `category/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['Category'],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `category/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Category'],
        })
    }),
});

export const { useDeleteCategoryMutation, useGetCategoryIDQuery, usePostCategoryMutation, useUpdateCategoryMutation, useGetCategoryQuery } = categoryApi;