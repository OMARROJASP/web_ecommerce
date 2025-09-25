"use client"
import { useGetBannersQuery } from '@/lib/features/banners/bannersApi'
import React from 'react'

export function Banner() {
  const { data: response, isLoading, isError} = useGetBannersQuery();

  if (isLoading) {
    return <p>Cargando banners...</p>
  }

  if (isError) {
    return <p>Error al cargar los banners.</p>
  }
  return (
    <section className='bg-blue-100'>
      {
        response?.data.map((banner) => (
          <p key={banner.bnn_id}>{banner.bnn_title}</p>
        ))
      }
    </section>
  )
}
