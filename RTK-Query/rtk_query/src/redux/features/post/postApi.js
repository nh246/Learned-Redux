import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/posts",
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    addNewPost: builder.mutation({
      query: (data)=>({
        url: '/posts',
        method: 'POST',
        body: data
      })
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
    updatePost: builder.mutation({
      query: ({id,data}) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: data
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery ,useAddNewPostMutation, useDeletePostMutation, useUpdatePostMutation} = postsApi;
export default postsApi;
