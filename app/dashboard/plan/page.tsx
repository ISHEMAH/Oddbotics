"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlanCard } from '@/components';
import { PricingDetails } from '@/constants';
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
      <Navside editClick={toggleEdit} botName={botName} active='Plan' toggle={toggleMenu} />
      {editClick && <Editname editClick={toggleEdit} setBotName={handleBotName} />}
      <Container menuClick={toggleNav} active={toggleMenu}>
        <Heading icon='/whitecustomcommand.svg' title='Plan' description='Create custom slash commands'/>
        <div className='lg:flex-row w-full flex flex-col items-center justify-center relative mt-10 gap-10'>
          {PricingDetails.map((plan) => (
            <PlanCard color={plan.color} number={plan.price} pagelink={plan.pagelink} price={plan.price} cover={plan.cover} button={plan.button} title={plan.title} description={plan.description} bg={plan.bg} period={plan.period} otherColor={plan.otherColor} features={plan.features} buttonText='Get Started'/>
        ))}
        </div>
        </Container>
        
        
      
    </main>
  );
}

