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
import {Command} from '@/components';
import {Song} from '@/components';




export default function Home() {
  const [editClick, setEditClick] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleEdit = () => {
    setEditClick(!editClick);
  };
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    console.log("adi")
  };
  const [botName, setBotName] = useState('');

  const handleBotName = (value: React.SetStateAction<string>) => {
    setBotName(value);

  };


  return (
    <main className=' flex flex-row h-screen   w-full'>
      <Navside editClick={toggleEdit} botName={botName} active='Custom Command' toggle={toggleMenu} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitecustomcommand.svg' title='Music' description='Add Soundtracks to your server'/>
        <div className='w-full flex flex-col mt-6'>
          <h1 className='w-full font-bold text-lg '>Add music</h1>
          <div className='p-6 w-full bg-[#F9F9F9] flex flex-col mt-5 rounded-xl '>
            <form action="" className='w-full gap-5 flex flex-col '>
              <div className='w-full bg-white flex flex-col rounded-lg'>
                <InputElement type='text' label='Music URL' placeholder='spotify URL' name='musicurl'/>
                <InputElement type='text' label='Music Description' placeholder='Describe the music added' name='functionality'/>
              </div>
              <CustomButton title='Add Music' btnType='submit' containerStyles='w-full'/>
            </form>
          </div>

        </div>
        <div className='w-full flex flex-col mt-6'>
          <div className='flex justify-between w-full items-center'>
            <h1 className='font-bold text-lg '>Your music</h1>
            <form action="" className='w-60'>
              <ContactInput icon='/search.svg' type='text' name='commandsearch' placeholder='Search' Width='72'/>
            </form>
          </div>
          <div className='w-full flex flex-row flex-wrap gap-3 mt-10'>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
          </div>
        
          
        </div>
      </Container>
    </main>
  );
}

