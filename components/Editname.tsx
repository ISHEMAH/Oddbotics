"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface EditnameProps {
  editClick: () => void;
  setBotName: (value: string) => void;
}

const Editname = ({ editClick, setBotName }: EditnameProps) => {
  const [newBotName, setNewBotName] = useState('');

  const handleSave = () => {
    setBotName(newBotName);
    editClick();
  };

  return (
    <div className={`backdrop-blur-md fadein bg-black/30 w-full p-4 z-50 items-center justify-center flex fixed h-screen `}>
      <div className='w-[30rem] max-sm:w-full h-56 rounded-2xl p-4 bg-white relative'>
        <div className='w-full flex justify-between'>
          <h1 className='font-semibold'>Edit your bot's name</h1>
          <button className=' rounded-full bg-white/40 hover:scale-110 hover:bg-white transition-all ease-out' onClick={editClick}>
            <Image src='/close.svg' width={20} height={20} alt='close' />
          </button>
        </div>

        <form action='' className='w-full mt-7 flex flex-col' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='botName' className='text-gray-500 text-sm'>Bot name</label>
          <input
            type='text'
            className='bg-gray-100 mt-5 h-10 rounded-lg focus:outline-0 indent-4'
            value={newBotName}
            onChange={(e) => setNewBotName(e.target.value)}
          />
          <button className='w-full mt-5 text-white font-semibold bg-indigo-600 py-2 rounded-lg hover:scale-x-95 transition-all duration-200' onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editname;
