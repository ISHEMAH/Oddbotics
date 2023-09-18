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
import {ToggleSwitch} from '@/components';
import ToggleInput from '@/components/ToggleInput';




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
    <main className=' flex flex-row h-screen w-full'>
      <Navside editClick={toggleEdit} botName={botName} active='Tickets' toggle={toggleMenu} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitecustomcommand.svg' title='Tickets' description='Run giveaways in your servers'/>
        <div className='w-full flex flex-col mt-6'>
          <h1 className='w-full font-bold text-lg '>Create commands</h1>
          <div className='p-6 w-full bg-[#F9F9F9] flex flex-col mt-5 rounded-xl '>
            <form action="" className='w-full gap-5 flex flex-col '>
               <ToggleInput label='Ping Roles' decription='Whether or not to ping roles upon ticket creation.'/>
              <div className='w-full bg-white flex flex-col rounded-lg'>
               
                <InputElement type='text' label='Ticket access roles' placeholder='Roles that should have access to view tickets.' name='accessrole'/>
                <InputElement type='text' label='Blacklisted Roles' placeholder='Ban roles from creating tickets' name='blacklistedroles'/>

              </div>
              <ToggleInput label='Ticket Transcripts' decription='Create a downloadable transcript when a ticket is closed.'/>
              <CustomButton title='Save' btnType='submit' containerStyles='w-full'/>
            </form>
          </div>

        </div>
        
      </Container>
    </main>
  );
}

