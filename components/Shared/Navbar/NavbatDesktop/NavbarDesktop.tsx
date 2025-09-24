import React from 'react'
import { links } from '../Navbar.data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function NavbarDesktop() {
  return (
    <div className='hidden md:flex items-center gap-4 text-lg'>
      {
        links.map((link) => (
          <Button className='hover:bg-red-500 hover:text-xl hover:text-white' key={link.name} asChild variant="ghost">
            <Link href={link.href} key={link.name}>
            {link.name}
            </Link> 
          </Button>
          
        ))
      }
    </div>
  )
}
