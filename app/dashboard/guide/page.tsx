"use client"
/* use client */
import React, { useState } from 'react';
import Navside from '@/components/Navside';
import Editname from '@/components/Editname';
import Container from '@/components/Container';
import { Heading } from '@/components';
import {CustomButton} from '@/components';
import {Example} from '@/components';
import { Examples } from '@/constants';



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
      <Navside editClick={toggleEdit} botName={botName} active='Guide' toggle={toggleMenu} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitecustomcommand.svg' title='Guide' description='Create custom slash commands'/>
        <div className='w-full flex flex-wrap'>
          {Examples.map((example)=>(
            <Example image={example.cover} title={example.title} description={example.description}/>
          ))}
        </div>
        
      </Container>
    </main>
  );
}

