"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar }from '@/components'; 
import { Sidebar } from '@/components';
import {Hero} from '@/components';
import {Aboutus} from '@/components'
import {Features} from '@/components'
import {Pricing} from '@/components'
import { Contactus } from '@/components'
import {Testimonials} from '@/components'
import {Footer} from '@/components'


export default function Home() {
  const [menu, setMenu] = useState(false);

  // Define the menuClick function
  const toggleMenu = () => {
    setMenu(!menu);
    
  }

  return (
    <main className='flex max-md:flex-col justify-between lg:p-7 h-full p-3'>
      <div className='md:w-4/12  w-full gap-10 flex flex-col relative justify-between  rounded-2xl gradient'>
        <div className='p-8 w-full gap-20 flex flex-col'>

        
        <Link href="/">
        <div className='logo flex w-fit justify-between items-center'>
          <Image 
            src='whitelogo.svg'
            height={30}
            width={30}
            alt='Logo'
          />
          <h5 className='font-bold text-sm text-white uppercase ml-1'>Oddbotics</h5>
        </div>
        </Link>
        <div>
          <h1 className='text-3xl text-white lg:text-3xl md:text-xl  font-extrabold'>Let Us Automate Your Bot</h1>
          <p className='mt-4 text-white/70 '>Explore the world’s best Discord Automation Bot</p>
          </div>
        </div>
        <Image src='side.svg' width={300} height={400} className='relative hidden md:flex left-0' alt='side'/>
      </div>
      <div className='md:w-7/12 h-full items-center max-md:mt-7 flex gap-12 flex-col justify-center w-full'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-md font-extrabold '>Step 1</h1>
          <p className='text-md font-medium'>Link your Bot to DDBotics</p>
        </div>

        <div>
          <h1 className='text-sm text-gray-500'>
          How to get started?
          </h1>
          <Image src="/video.png" alt='video' width={900} height={300}/>
        </div>

        <form action="" className='w-full'>
          <label htmlFor="token" className='text-gray-500 font-md'>Bot Token</label>
            <input type="text" name='token' id='token' className='w-full rounded-md border-2 focus:outline-0 focus:bg-black/10 hover:bg-black/5  py-3 indent-2'/>
         
          <Link href='https://discord.com/developers/applications' className='underline text-blue-600 '>Don’t have a Bot Token?</Link>
          <button type='submit' className='w-full rounded-md bg-blue-600 text-white font-bold text-md mt-10 hover:scale-95 transition-all duration-200 py-3'>Create Bot</button>
        </form>
      </div>
    </main>
  );
}

