"use client"

import React, { useState } from 'react'
import { type Product } from '@/lib/features/products/productsApi'

import {
  Card,
  CardContent,
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
        if (aux.length > 20 ) {
            return `${aux.slice(0,20)}...`
        }
        return aux
    }

    return (
      <Card>
    <CardHeader>
      <CardTitle className='h-[54px] md:h-auto'>{countProductName(product.prod_name)}</CardTitle>
    </CardHeader>
    <CardContent>
  <div className=" flex items-center justify-center overflow-hidden rounded-md bg-gray-100 sm:text-xs">
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
