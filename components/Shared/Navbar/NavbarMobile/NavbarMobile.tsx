"use client"
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { links } from '../Navbar.data';
import Link from 'next/link';

export function NavbarMobile() {

    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className='flex md:hidden'>
        <Button className='text-black' variant={'outline'}
        onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </Button>

        {isOpen && (
            <div className='absolute top-full right-4 mt-4 bg-white text-black rounded-lg shadow-lg p-4 w-48 
            flex flex-col gap-3'>
                {links.map((link) => (
                    <Link href={link.href} key={link.name} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
                ) )}
            </div>
        )}
    </div>
    )
}
