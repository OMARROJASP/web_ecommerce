import React from 'react'
import { FooterDesktop } from './FooterDesktop'
import { FooterMobile } from './FooterMobile'

export  function Footer() {
    return (
        <footer className=''>
            <FooterDesktop />
            <FooterMobile />
        </footer>
    )
}
