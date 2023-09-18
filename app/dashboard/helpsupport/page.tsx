"use client"
/* use client */
import React, { useState } from 'react';
import Navside from '@/components/Navside';
import Editname from '@/components/Editname';
import Container from '@/components/Container';
import { Heading } from '@/components';
import {SupportCard} from '@/components';




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
        <Heading icon='/whitecustomcommand.svg' title='Custom Commands' description='Create custom slash commands'/>
        <div className='w-full flex flex-col mt-6'>
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-lg w-full'>Pick a category</h1>
            <div className='w-full flex max-md:justify-center mt-7  gap-4 flex-wrap'>
                <SupportCard/>
                <SupportCard/>
                <SupportCard/>
                <SupportCard/>
                <SupportCard/>
            </div>
          </div>
          
        
          
        </div>
      </Container>
    </main>
  );
}

