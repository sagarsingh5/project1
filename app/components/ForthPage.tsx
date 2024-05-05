'use client'
import Image from 'next/image'
import { useState } from 'react';


interface AccordionItemProps{
  title:string,
  content:string,
  src:string
}

function AccordionItem({ title, content,src }:AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <button
        className="text-white  font-semibold focus:outline-none w-full flex justify-between items-center py-2 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center'>
        <Image 
            className='mt-4' 
            alt="logo" 
            src={src} 
            width={50}
            height={50} 
        />
        <div className='ml-5 mr-5 text-left'>
        <span className="text-xl  ">{title}</span>
        </div>
        </div>
        
        
        <span >{isOpen ? '^' : '>'}</span>
      </button>
      {isOpen && <div className="p-2 text-xs text-white ml-14">{content}</div>}
    </div>
  );
}


const FourthPage = () => {


 
  return (
    <main className="h-screen flex bg-black">
      <div className="p-3 flex-1">
      <p className="text-white text-3xl font-bold mt-20 ml-20 text-left">
        OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS{' '}
        <span className= "text-3xl  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-right font-bold uppercase py-4">
          WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS
        </span>
      </p>

        <Image 
            className='mt-4 ml-20' 
            alt="logo" 
            src="/CREON1.png" 
            width={800}
            height={1200} 
        />
      </div>
      <div className="flex-1 h-full">
        

        <div className=" p-20 overflow-auto ">
          <div className="p-10 ">
            <h1 className=" text-md uppercase font-bold  text-white mb-4">
              The dynamic community driven business model of the future
            </h1>
          <div className=''>

            <AccordionItem
              title="Profitability and Growth"
              content="At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and Investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a diamlo ecosystem of Innovation and shared success."
              src="/icon1.png"
            />

            <AccordionItem
              title="Transparent & Fair Decentralized Earnings"
              content="At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and Investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a diamlo ecosystem of Innovation and shared success."
              src="/icon2.png"
            />

            <AccordionItem
              title="launching the future"
              content="At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and Investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a diamlo ecosystem of Innovation and shared success."
              src="/icon3.png"
            />

            <AccordionItem
              title="Limitless Possibilities of AI & Crypto"
              content="At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and Investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a diamlo ecosystem of Innovation and shared success."
              src="/icon4.png"
            />
          </div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default FourthPage;
