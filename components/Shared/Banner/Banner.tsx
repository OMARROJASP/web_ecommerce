"use client"
import { useGetBannersQuery } from '@/lib/features/banners/bannersApi'
import React from 'react'
import { Carrucel } from './Carrucel';
import { SkeletonCarrucel } from './Carrucel/CarrucelSkeleton';

export function Banner() {
  const { data: response, isLoading, isError} = useGetBannersQuery();

  if (isLoading) {
    return <SkeletonCarrucel />
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
