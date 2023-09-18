"use client"
/* use client */
import React, { useState } from 'react';
import Navside from '@/components/Navside';
import Editname from '@/components/Editname';
import Container from '@/components/Container';
import { Heading } from '@/components';
import {CustomButton} from '@/components';
import {InputElement} from '@/components'
import {ContactInput} from '@/components';
import {Member} from '@/components'
import { Members } from '@/constants';
import Image from 'next/image';



export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [editClick, setEditClick] = useState(false);
  const toggleEdit = () => {
    setEditClick(!editClick);
  };
  const [botName, setBotName] = useState('');

  const handleBotName = (value: React.SetStateAction<string>) => {
    setBotName(value);

  };
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    console.log("adi")
  };

  return (
    <main className=' flex flex-row h-screen w-full'>
      <Navside editClick={toggleEdit} botName={botName} active='Error Logs' toggle={toggleMenu}/>
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitememberfield.svg' title='Error Logs' description='View your server members'/>
        <div className='w-full flex flex-col mt-6'>
        <div className='flex justify-between w-full max-sm:flex-col items-center'>
            <h1 className='font-bold text-lg '>Error Logs</h1>
            <div className='flex gap-5 max-md:flex-col-reverse'>
                <form action="" className='w-60'>
                    <ContactInput icon='/search.svg' type='text' name='commandsearch' placeholder='Search' Width='72'/>
                </form>
                
                
            </div>
            
          </div>
          <form action="">
            <CustomButton title='Export as CVV' btnType='submit' containerStyles='mt-5 max-sm:w-full' />
          </form>
          <div className='flex w-full flex-col max-lg:overflow-x-scroll '>
          <div className='flex w-full flex-col min-w-[700px]'>
            <div className='w-full border-b flex mt-10 border-gray-200 py-3 '>
                <div className='w-4/12 pl-4'>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>NAME</h1>
                </div>
                <div className='w-6/12 pl-4'>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>TYPE</h1>
                </div>
                <div className='w-2/12 pl-4 '>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>DESCRIPTION</h1>
                </div>
            </div>

          </div>
            
          </div>
         </div> 
        
      </Container>
    </main>
  );
}

