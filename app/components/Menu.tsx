'use client'
import Image from 'next/image';
import NavbarButton from "./NavbarButton"

interface MenuProps{
 showMenu: boolean,
 onClose?: () => void;
}
const Menu = ({ showMenu, onClose }:MenuProps) => {
    return (
        <div className={`fixed top-0 right-0 h-full w-64 p-5 bg-black opacity-90 text-white transition-transform transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} z-50`}>
            <div className="flex justify-between items-center p-4">
            <NavbarButton connectButton="Connect"  />
                {/* <button className="text-white" >Close</button> */}
                <svg onClick={onClose} className="w-10 h-10 rounded-lg  bg-blue-700 p-2 text-white font-bold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
            </div>
            <ul className="p-1  h-1/4 flex  flex-col justify-between">
            <NavbarButton button="Creon Pass"  />
            <NavbarButton button="Token" action="SOON"  />
        <NavbarButton button="AI Revenue" action='SOON'/>
        <NavbarButton button="AI Launchpad" action='SOON'/>

        
            </ul>

            <div className="flex items-center justify-around absolute bottom-10 ">
            <Image 
            className='m-2' 
            alt="logo" 
            src="/telegram.png" 
            width={40}
            height={40} 
        />
        <Image 
            className='m-2' 
            alt="logo" 
            src="/discord.png" 
            width={40}
            height={40} 
        />
        <Image 
            className='m-2' 
            alt="logo" 
            src="/twitter.png" 
            width={40}
            height={40} 
        />
            </div>
        </div>
    )
}

export default Menu