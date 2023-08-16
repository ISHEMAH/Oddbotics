import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants';
import CustomButton from './CustomButton';

interface SidebarProps {
    menuClick: () => void;
  }

const Sidebar = ({menuClick}:SidebarProps) => {
  return (
    <div className='backdrop-blur-md fadein bg-black/30 w-full h-full z-50 fixed'>
      <nav className=' bg-white w-96 p-4 slidein h-full relative rounded-tr-3xl rounded-br-3xl'>
      <Link href="/">
      <div className='logo flex w-fit justify-between items-center'>
        <Image 
          src='Logo.svg'
          height={30}
          width={30}
          alt='Logo'
        />
        <h5 className='font-bold text-sm uppercase ml-1'>Oddbotics</h5>
      </div>
      </Link>
      <div className='flex-col flex pt-16 w-fit pl-10 gap-10' >
        {navLinks.map((link) => (
            <Link href={link.path} key={link.title} className='text-gray-600 hover:text-black font-medium text-md  cursor-pointer'>{link.title}</Link>
        )
        )}
      </div>
      <CustomButton title='Connect to Oddbotics' containerStyles='absolute bottom-4 w-80 self-center'/>


      </nav>
      <button className='absolute top-4 p-2 right-10 rounded-full bg-white/40 hover:scale-110 hover:bg-white transition-all ease-out' onClick={menuClick}>
        <Image 
            src='close.svg'
            width={20}
            height={20}
            alt='close'
        />
      </button>
    </div>
  )
}

export default Sidebar
