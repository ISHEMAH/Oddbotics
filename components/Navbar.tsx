import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import Link from 'next/link'
import CustomButton from './CustomButton'

interface NavbarProps {
    menuClick: () => void;
  }

const Navbar = ({menuClick}:NavbarProps) => {

  return (
    <nav className='flex justify-between fixed w-full lg:px-24 backdrop-blur-md bg-white/30 px-3 items-center lg:h-24 h-16 border z-50'>
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
      <div className='lg:flex hidden w-fit gap-6' >
        {navLinks.map((link) => (
            <Link href={link.path} key={link.title} className='text-gray-600 font-medium text-sm hover:text-black smooth-scroll cursor-pointer'>{link.title}</Link>
        )
        )}
      </div>
      <Link href='/verifytoken'>
      <CustomButton title='Connect to Oddbotics' containerStyles='max-lg:hidden text-sm'/>
      </Link>
      <button className='hidden max-lg:flex' onClick={menuClick}>
        <Image 
            src='menu.svg'
            height={25}
            width={25}
            alt='menu'
        />
      </button>
      
    
    </nav>
  )
}

export default Navbar
