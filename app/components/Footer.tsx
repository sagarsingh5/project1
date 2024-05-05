import Image from 'next/image'; // Correct import statement

const Footer = () =>{
    return(
        <div className=" bg-black flex items-center justify-around p-2 ">
            <div className=' flex items-center'>

            
            <p className='text-white mr-40'>Creon 2023 all rights reserved</p>
            <div className="flex items-center justify-around ">
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
            <p className='text-white'>powered by <span className='font-bold'>Niftanbles</span></p>

        </div>
    )
}


export default Footer;