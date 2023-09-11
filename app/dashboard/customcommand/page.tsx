"use client"
/* use client */
import React, { useState } from 'react';
import Navside from '@/components/Navside';
import Editname from '@/components/Editname';




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
    <main className='bg-[#EDEDED] flex flex-row h-screen w-full'>
      <Navside editClick={toggleEdit} botName={botName} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
    </main>
  );
}

