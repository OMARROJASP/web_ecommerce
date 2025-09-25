import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Banner {
  bnn_id: number,
  bnn_title: string,
  bnn_description: string,
  bnn_image_url_desktop: string,
  bnn_image_url_mobile: string,
  bnn_is_active: boolean,
  bnn_position: number
}

interface ResponseProduct {
  message: string,
  data: Banner[]
}

export const bannersApi = createApi({
  reducerPath: "bannersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL, // ✅ lee la variable de entorno
  }),
  endpoints: (builder) => ({
    getBanners: builder.query<ResponseProduct, void>({
      query: () => "banner",
    }),
  }),
})

export const { useGetBannersQuery } = bannersApi
