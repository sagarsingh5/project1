'use client'
import React from 'react'
import NavbarButton from './NavbarButton'
import styles from "./Navbar.module.css"
import Image from 'next/image'

interface NavbarProps{
    onClick?: () => void;
    showMenu:boolean;
}

const Navbar = ({onClick,showMenu}:NavbarProps) => {
  return (
    <div className='p-5 w-full fixed z-40 flex justify-between items-center' >
        <div className=' bg-red'>
        <Image 
            className='mt-4' 
            alt="logo" 
            src="/Logo.png" 
            width={140} 
            height={39} 
        />
        
        </div>
        {!showMenu && 
        
        <div className='flex space-x-5 bg-red items-center justify-center'>
        <NavbarButton button="Creon Pass" action='SOON' />
        <NavbarButton button="AI Revenue" action='SOON'/>
        <NavbarButton button="AI Launchpad" action='SOON'/>
        <NavbarButton connectButton="Connect" onClick={onClick} />
        
        </div>
        }
    </div>
  )
}

export default Navbar