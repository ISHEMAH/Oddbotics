"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlanCard } from '@/components';
import { PricingDetails } from '@/constants';




export default function Home() {

  return (
    <main className='flex max-md:flex-col justify-between lg:p-7 h-full p-3'>
      <div className='md:w-3/12  w-full gap-10 flex flex-col relative justify-between  rounded-2xl gradient'>
        <div className='p-8 w-full gap-20 flex flex-col'>

        
        <Link href="/">
        <div className='logo flex w-fit justify-between items-center'>
          <Image 
            src='whitelogo.svg'
            height={30}
            width={30}
            alt='Logo'
          />
          <h5 className='font-bold text-sm text-white uppercase ml-1'>Oddbotics</h5>
        </div>
        </Link>
        <div>
          <h1 className='text-3xl text-white lg:text-3xl md:text-xl  font-extrabold'>Get an affordable Bot</h1>
          <p className='mt-4 max-sm:mt-2 text-white/70 '>Explore the world’s best Discord Automation Bot</p>
          </div>
        </div>
        <Image src='hey.svg' width={300} height={400} className='absolute bottom-0 hidden md:flex right-0' alt='side'/>
      </div>
      <div className='md:w-8/12 h-full items-center max-md:mt-7 flex gap-12 flex-col justify-center w-full'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-md font-extrabold '>Step 2</h1>
          <p className='text-md font-medium'>Select Your Plan</p>
        </div>

        <div className='lg:flex-row flex flex-col gap-10'>
          {PricingDetails.map((plan) => (
            <PlanCard color={plan.color} number={plan.price} price={plan.price} cover={plan.cover} button={plan.button} title={plan.title} description={plan.description} bg={plan.bg} period={plan.period} otherColor={plan.otherColor} features={plan.features} buttonText='Get Started'/>
        ))}
        </div>
        
          
        

        
      </div>
    </main>
  );
}

