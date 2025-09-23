import { Logo } from '@/components/Shared'
import React from 'react'
import { NavbarDesktop } from './NavbatDesktop'
import { NavbarMobile } from './NavbarMobile'

export function Navbar() {
    return (
        <nav className='sticky bg-red-500 text-white h-16 flex items-center justify-between px-5'>
            <Logo />
            <NavbarDesktop />
            <NavbarMobile />
        </nav>
    )
}
