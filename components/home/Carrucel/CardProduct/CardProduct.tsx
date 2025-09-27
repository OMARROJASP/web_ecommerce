"use client"

import React, { useState } from 'react'
import { type Product } from '@/lib/features/products/productsApi'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface CardProductProps  {
    product: Product
}


  export function CardProduct({product}: CardProductProps) {

    //const [name, setName] = useState("");

    const countProductName = (aux:string) => {
        if (aux.length > 25 ) {
            return `${aux.slice(0,22)}...`
        }
        return aux
    }

    return (
      <Card>
    <CardHeader>
      <CardTitle className='h-[54px] md:h-auto'>{countProductName(product.prod_name)}</CardTitle>
      {/* <CardDescription>{product.prod_description}</CardDescription> */}
    </CardHeader>
    <CardContent>
  <div className="w-full h-[150px] flex items-center justify-center overflow-hidden rounded-md bg-gray-100 sm:text-xs">
    <Image 
      src={product.prod_imageUrl}
      alt={product.prod_name}
      width={150}
      height={150}
      className="object-contain w-full h-full"
    />
  </div>
</CardContent>

    <CardFooter>
              <Button>Comprar</Button>
    </CardFooter>
  </Card>
    )
}
