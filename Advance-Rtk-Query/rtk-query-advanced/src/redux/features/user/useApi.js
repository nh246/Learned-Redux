import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    tagTypes:['user'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['user']
        }),
        // adding new user
        addUser: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['user']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['user']
        })
    })
})



export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation}= userApi

export default userApi