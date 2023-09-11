import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuCardProps } from '@/types';

const MenuCard = ({ icon, title, link, active }: MenuCardProps) => {
    const imageSrc = active === title ? `/active${icon}` : `/${icon}`;


  return (
    <Link href={link} className='w-full mb-2'>
      <div className={`flex-start items-center w-full flex py-2 rounded-md flex-row group  transition-all duration-200 ${active === title ? 'bg-indigo-600/30' : 'hover:bg-black/10'}`}>
        <Image className='ml-5 w-4 h-4' width={20} height={20} src={imageSrc} alt='menu card' />
        <h1 className={`ml-5 ${active === title ? 'text-indigo-600 font-semibold' : 'text-black/80 font-medium'}`}>{title}</h1>
      </div>
    </Link>
  );
};

export default MenuCard;
