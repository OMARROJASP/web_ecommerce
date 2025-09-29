"use client"
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { links } from '../Navbar.data';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface NavbarMobileProps {
  open: boolean,
}

export function NavbarMobile({ open }: NavbarMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex md:hidden'>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className='text-black' variant={'outline'}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </DialogTrigger>
        
        <DialogContent 
          className="p-0 w-48 max-w-48 top-16 right-4 left-auto translate-x-0 translate-y-0 border-0 bg-transparent shadow-none [&>button]:hidden"
        >
          <div className="bg-white text-black rounded-lg shadow-lg border p-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link 
                href={link.href} 
                key={link.name} 
                onClick={() => setIsOpen(false)}
                className="px-2 py-1 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}