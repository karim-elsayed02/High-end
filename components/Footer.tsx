import React from 'react'
import logo_blue from '@/logos/logo_bluebg.png'
import Image from '@/node_modules/next/image'
const Footer = () => {
  return (
    <div className='bg-my_blue2 w-full h-80 flex justify-between gap-10 '>
        <Image className='my-8 ml-10' src={logo_blue} alt= "High End logo with blue bg "  width={288} height={288}/>
        <div className='flex flex-col justify-start my-20'>
            <a className='mb-7 text-white text-xl font-bold'>Company</a>
            <a>Company</a>
            <a>Company</a>
            <a>Company</a>
        </div>
        <div className='flex flex-col justify-start my-20'>
            <a>Company</a>
            <a>Company</a>
            <a>Company</a>
            <a>Company</a>
        </div>
        <div className='flex flex-col justify-start my-20 mr-20'>
            <a className='mb-7 text-white'>Company</a>
            <a>Company</a>
            <a>Company</a>
            <a>Company</a>
        </div>
    </div>
  )
}

export default Footer