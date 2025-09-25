import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Banner {
    bnn_id: number,
    bnn_title: string,
    bnn_description: string,
    bnn_image_url_desktop:string,
    bnn_is_active:boolean,
    bnn_position:number
}

interface responseProduct {
    message: string,
    data: Banner[]
}

export const bannersApi = createApi({
    reducerPath: 'bannersApi',
    // Usa la variable de entorno para la base URL del backend
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    endpoints: (builder) => ({
        getBanners: builder.query<responseProduct, void>({
            // La ruta aquí es relativa a la baseUrl
            query: () => 'banner'
        })
    })
});

export const { useGetBannersQuery } = bannersApi;