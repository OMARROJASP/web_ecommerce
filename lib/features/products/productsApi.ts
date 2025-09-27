import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Product {
    prod_id:number,
    prod_name: string,
    prod_price: number,
    prod_description: string,
    prod_imageUrl: string,
    prod_categoty: string,
    prod_stock: string,
    prod_ofert: string,
    prod_supplier: string,
    prod_state: boolean
}

interface ResponseProduct {
    message: string,
    data: Product[]
}

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<ResponseProduct, void>({ query: () => "product"})
    })
})

export const { useGetProductsQuery } = productsApi;