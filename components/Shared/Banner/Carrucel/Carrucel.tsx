import React from 'react'

import { type Banner } from '@/lib/features/banners/bannersApi'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

interface CarrucelProps {
    banners: Banner[]
}

export function Carrucel({ banners }: CarrucelProps) {
  return (
    <Carousel 
    opts={{ loop: true }}
    plugins={[
    Autoplay({ delay: 3000 }) // cada 3 segundos
  ]}
    >
        <CarouselContent>
            {banners?.map((bnn) => (
                <CarouselItem key={bnn.bnn_id}>
                    <div className='block md:hidden'>
                        <Image
                            src={bnn.bnn_image_url_mobile}
                            alt={bnn.bnn_title}
                            width={1200} // o el ancho que definas
                            height={400}
                            className="w-full h-[430px] object-cover"
                        />
                    </div>
                    <div className='hidden md:block'>
                        <Image
                            src={bnn.bnn_image_url_desktop}
                            alt={bnn.bnn_title}
                            width={1200} // o el ancho que definas
                            height={400}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  );
}
