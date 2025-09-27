"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { useGetProductsQuery, type Product } from '@/lib/features/products/productsApi'
import { CardProduct } from './CardProduct'


export function Carrucel() {

    const { data: response, isLoading, isError} = useGetProductsQuery();
    return (
    <Carousel 
    opts={{ loop: true }}
    plugins={[
    Autoplay({ delay: 3000 }) // cada 3 segundos
    ]}
    >
        <CarouselContent>
  {response?.data.map((prod: Product) => (
    <CarouselItem
      key={prod.prod_id}
      className="basis-1/3 md:basis-1/4 lg:basis-1/5"
    >
      <CardProduct product={prod} />
    </CarouselItem>
  ))}
</CarouselContent>

        <CarouselPrevious className='ml-[40px] p-[20px]' />
        <CarouselNext className='mr-[40px] p-[20px]'/>
    </Carousel>
    );
}
