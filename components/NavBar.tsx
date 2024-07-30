import React from 'react'
import english_logo from "@/logos/logo.png"
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'


const NavBar = () => {
  return (
    <nav className='bg-white flex justify-between items-center p-6 height_100'>
      <div className='flex items-center '>
          <Image src={english_logo} alt="Highend logo" height={86} width={65}/>
          <div className='flex flex-col '>
            <p className='text-2xl p-0 m-0 text-my_blue leading-none'>HIGH END</p>
            <p className='text-xs p-0 m-0 text-my_gray leading-none'>General Trading</p>
          </div>
      </div>
      <div className='flex justify-center items-center  text-my_blue gap-10 mr-24 h-full '>
        <Link href="\markets" className='text-my_blue hover:bg-my_blue hover:text-my_gray hover:scale-1.1  px-10 py-7'>Markets</Link>
        <Link href="\service" className='text_colour hover:bg-my_blue hover:text-my_gray hover:scale-1.1  px-10 py-7'>Service</Link>
        <Link href="\about" className='text_colour hover:bg-my_blue hover:text-my_gray hover:scale-1.1  px-10 py-7'>About</Link>
      </div>
      <div className='flex items-center  w-28 h-10 gap-0.5'>
        <button className='button-18 '>
          EN
        </button>
        <button className='button-18 button-switch'>
          AR
        </button>
      </div>
    </nav>
    )}
export default NavBar
