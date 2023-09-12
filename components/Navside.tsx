import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuCard from './MenuCard';
import { NavsideProps } from '@/types';
import { MainLinks } from '@/constants';
import { FeaturedLinks } from '@/constants';




const Navside = ({ editClick, botName,active}: NavsideProps) => {
  return (
    <nav className='bg-white lg:w-3/12 w-80 p-4 h-screen relative overflow-scroll items-center flex flex-col rounded-tr-3xl rounded-br-3xl'>
      <div className='w-full sticky bg-white/10'>

        <div className='w-full flex flex-row justify-between'>
          <Link href='/'>
            <div className='logo flex w-fit justify-between items-center'>
              <Image src='/Logo.svg' height={30} width={30} alt='Logo' />
              <h5 className='font-bold text-sm uppercase ml-1'>Oddbotics</h5>
            </div>
          </Link>
          <div className='bg-indigo-600 rounded-lg  px-3 font-bold text-sm flex justify-center items-center text-white'>
            <h1>Bot</h1>
          </div>
        </div>
        <div className='w-full h-12 bg-indigo-600/20 mt-10 rounded-full flex p-2 justify-between items-center'>
          <div className='flex items-center'>
            <Image src='/dashlogo.svg' width={30} height={30} alt='logo' />
            <h1 className='font-bold text-sm ml-2 text-indigo-600'>{botName ? botName :'My Bot'}</h1>
          </div>
          <button className='w-fit cursor-pointer mr-3 hover:scale-105 transition-all duration-150' onClick={editClick}>
            <Image src='/edit.svg' alt='edit' width={20} height={20} />
          </button>
        </div>
      </div>
      <div className='w-full flex flex-col items-center mt-7'>
        <h1 className='text-[#A57AFF] w-full mb-4 font-normal text-md'>Main</h1>
        {MainLinks.map((link)=>(
          <MenuCard icon={link.icon} title={link.title} link={link.link} active={active}/>
        ))}
         <h1 className='text-[#A57AFF] w-full mb-4 font-normal text-md'>Main</h1>
        {FeaturedLinks.map((link)=>(
          <MenuCard icon={link.icon} title={link.title} link={link.link} active={active}/>
        ))}
        
      </div>
      <Link href='/' className='w-full'>
        <div className='w-full bg-indigo-600 font-semibold py-3 mt-5 rounded-full hover:scale-95 transition-all duration-200 text-white flex items-center justify-center'>Create Another Bot</div>
      </Link>
      
    </nav>
  );
};

export default Navside;
