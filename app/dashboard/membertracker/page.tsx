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



export default function Home() {
  const [editClick, setEditClick] = useState(false);
  const toggleEdit = () => {
    setEditClick(!editClick);
  };
  const [botName, setBotName] = useState('');

  const handleBotName = (value: React.SetStateAction<string>) => {
    setBotName(value);

  };

  return (
    <main className=' flex flex-row h-screen   w-full'>
      <Navside editClick={toggleEdit} botName={botName} active='Member Tracker'/>
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container>
        <Heading icon='/whitemembertracker.svg' title='Members' description='View your server members'/>
        <div className='w-full flex flex-col mt-6'>
        <div className='flex justify-between w-full items-center'>
            <h1 className='font-bold text-lg '>Members</h1>
            <form action="" className='w-60'>
              <ContactInput icon='/search.svg' type='text' name='commandsearch' placeholder='Search' Width='72'/>
            </form>
          </div>
          <form action="">
            <CustomButton title='Export as CVV' btnType='submit' containerStyles='mt-5' />
          </form>
            <div className='w-full border-b flex  border-gray-200 py-3'>
                <div className='w-4/12 pl-4'>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>NAME</h1>
                </div>
                <div className='w-5/12 pl-4'>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>ROLES</h1>
                </div>
                <div className='w-3/12 pl-4'>
                    <h1 className='text-indigo-600 uppercase font-medium text-sm'>Joined at</h1>
                </div>
            </div>


          <div className='w-full flex flex-col mt-10'>
            {Members.map((member) => (
                <Member image={member.profile} roles={member.roles} date={member.date} name={member.name}/>
            ))}
            
          </div>
          
        </div>
      </Container>
    </main>
  );
}

