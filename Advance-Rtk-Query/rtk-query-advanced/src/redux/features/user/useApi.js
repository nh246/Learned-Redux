import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({page, limit}) => `/users?_page=${page}&_per_page=${limit}`,
      // providesTags: ['user']
      // providesTags: (result) =>
        providesTags: (result) => result ? result?.data.map(({id}) => ({type: 'user', id })): ['user']
      // providesTags:  ["user"]
    }),
    //get a single user
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    // adding new user
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      // invalidatesTags: ['user']
      invalidatesTags: (result, error, userId) => [
        { type: "user", id: userId },
      ],
    }),
    updateUserById: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: (result, error, {id}) => [
        { type: "user", id: id },
      ],
    }) 
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdateUserByIdMutation
} = userApi;

export default userApi;
