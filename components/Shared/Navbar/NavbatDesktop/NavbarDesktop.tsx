"use client"

import React, { useState } from 'react'
import { links } from '../Navbar.data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tally1, User } from 'lucide-react'
import { PopUp } from '../../PopUp'
import { LoginForm } from '../../Login'

export function NavbarDesktop() {

  const [isOpen, setIsOpen] = useState(false);
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
      <Tally1 />
      <div className='flex items-center gap-1'>
        <User className='h-[30px] w-[30px] bg-gray-100 p-1 rounded-full'/>
        <Button variant={'ghost'} className='hover:bg-transparent cursor-pointer'>
          <p className='text-white text-sm' onClick={() => setIsOpen(true)} >Iniciar sesion</p>
        </Button>   

      </div>
      
      <PopUp
        open={isOpen} 
        onOpenChange={setIsOpen}
        >
        <LoginForm />
      </PopUp>
      
    </div>
  )
}
