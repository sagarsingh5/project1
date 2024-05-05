'use client';
import React from 'react'

interface NavbarButtonText {
    button?: string;
    action?:string;
    connectButton?:string;
    onClick?: () => void;
  }

export default function NavbarButton({button,action,connectButton,onClick}:NavbarButtonText) {
  return (
    <div>
        {button && <div 
        className='text-white text-20 flex' 
        onClick={() => console.log("hello")}
        >
            <p className=''>{button}</p>
            {action && <div className=' h-4 px-1 align-middle rounded-lg bg-black'>
                <p className=' m-0.2  text-xs text-purple-700'>{action}</p>
            </div>}
        </div>}
        {connectButton && <div onClick={onClick} className='p-3  border-white border-2 rounded-md'>
            <p className='text-white'>Connect</p>
        </div>

        }
        
    </div>
  )
}

