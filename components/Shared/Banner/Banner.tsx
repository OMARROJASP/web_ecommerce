"use client"
import { useGetBannersQuery } from '@/lib/features/banners/bannersApi'
import React from 'react'
import { Carrucel } from './Carrucel';

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
    <Carrucel banners={response?.data ? response?.data : []}/>
    </section>
  )
}
