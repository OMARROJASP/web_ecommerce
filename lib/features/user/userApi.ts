import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
    cx_id:number,
    cx_first_name: string,
    cx_last_name: number,
    cx_email: string,
    cx_phone: string,
    cx_address: string,
    cx_city: string,
    cx_postal_code: string,
}

interface ResponseUser {
    message: string,
    data: User,
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    }),
     endpoints: (builder) => ({
        getUser: builder.query<ResponseUser, void>({ query: () => "customer"})
    })
})

export const { useGetUserQuery} = userApi