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
import {Command} from '@/components'
import { log } from 'console';



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
      <Navside editClick={toggleEdit} botName={botName} active='FAQ' toggle={toggleMenu} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitecustomcommand.svg' title='FAQ' description='Create custom slash commands'/>
        <div className='w-full flex flex-col mt-6'>
          <h1 className='w-full font-bold text-lg '>FAQ Bot Setup</h1>
          <p className=''>Select the channels you wants the FSAQ bot to be active in:</p>
         <form action="">
            <select name="channel" id="channel" placeholder='Channels' className='w-full border-2 rounded-lg mt-10 border-indigo-600 py-3 indent-3 '>
                <option value="members" className='py-4 hover:bg-indigo-600'>Members</option>
            </select>
            <CustomButton title='Continue' btnType='submit' containerStyles='w-full'/>
         </form>

        </div>
      </Container>
    </main>
  );
}

