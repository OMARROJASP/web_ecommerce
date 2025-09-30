"use client"
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { links } from '../Navbar.data';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { motion } from "framer-motion";
import { Logo } from '../../Logo';
import { dataFooter } from '../../Footer/Footer.data';

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="text-black"
            variant="outline"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </DialogTrigger>
        <DialogHeader>
        </DialogHeader>
        <DialogContent
          className="p-0 m-0 w-full h-full !max-w-none border-0 bg-transparent shadow-none [&>button]:hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white flex flex-col gap-6 p-6 z-50"
          >
            <div className="flex justify-between items-center p-2">
              <DialogTitle className="m-0">
                <Logo />
              </DialogTitle>
              <Button
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
                className='bg-black text-white rounded-full'
              >
                <X size={36} strokeWidth={3}/>
              </Button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <div key={link.name}>
                  <Link
                  href={link.href}
                  key={link.name}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
                <hr className='pt-2' />
                </div>
              ))}
            </nav>
          <section>
            <div className='flex justify-center mt-4 gap-3'>
              <Button className='w-[30%]' variant="outline">
                INGRESA
              </Button>
              <Button className='w-[30%]' variant={'outline'}>
                REGÍSTRATE
              </Button>
            </div>
          </section>
          <section>
            <div className='text-center font-medium text-gray-600 mt-6'>
            siguenos en redes sociales
            </div>
            <div className='flex justify-center gap-4 mt-2'>
              {
                dataFooter[2].items.map((items) => (
                  <div key={items.text} className="mt-6 flex w-[30px] h-[30px] flex-wrap gap-4 rounded-full border-gray-600">
                    <Link
                      href={items.link}
                      target="_blank"
                      className="flex items-center gap-2 w-[30px] h-[30px] text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <items.icon />
                    </Link>
                  </div>
                ))
              }
            </div>
          </section>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
