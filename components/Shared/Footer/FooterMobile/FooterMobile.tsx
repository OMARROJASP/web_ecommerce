"use client"

import React, { useState } from 'react'
import { dataFooter } from '../Footer.data';
import { Logo } from '../../Logo';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

export function FooterMobile() {
    const [isOpen, setIsOpen] = useState(-1);

    const showSection = (option:number) => {
        if (option == isOpen) {
            setIsOpen(-1)
            return
            }
        setIsOpen(option);
    }
    return (
        <div className='flex flex-col  items-center md:hidden bg-gray-900 text-gray-200 p-5'>
            <div className='p-5'>
                <Logo />
            </div>
            {
            dataFooter.map((data, index) => (
                <div key={data.section} className='flex flex-col w-full items-center justify-between p-5 border-b-2'>
                    <div className='flex w-full items-center justify-between'>
                        <div>{data.section}</div>
                        <div><Plus size={'16'} onClick={() => showSection(index)}/></div>
                    </div>  
                    
                       <ul 
                    className={clsx(
  "flex flex-col gap-2 items-start text-sm transition-all duration-500 overflow-hidden",
  isOpen === index
    ? "pointer-events-auto opacity-100 max-h-40 py-5"
    : "pointer-events-none opacity-0 max-h-0 py-0"
)}
 
                    >
              { data.items.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    {/* Renderiza icono si existe */}
                    {item.icon && <item.icon size={14} />}
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
                    </ul> 
                                     
                   
                    
                </div>
            ))
            }
        </div>
    )
}
