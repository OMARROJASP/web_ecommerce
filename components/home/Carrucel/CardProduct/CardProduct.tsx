import React from 'react'
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
  return (
    <Card>
  <CardHeader>
    <CardTitle>{product.prod_name}</CardTitle>
    <CardDescription>{product.prod_description}</CardDescription>
    <CardAction>
        <Button>Comprar</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <Image 
    src={product.prod_imageUrl}
    alt={product.prod_name}
    >

    </Image>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}
