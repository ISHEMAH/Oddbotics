import React, { ReactNode } from 'react'
import Image from 'next/image'

interface SidebarProps {
  menuClick: () => void;
  children: ReactNode;
  active:boolean
}

const Container = ({children,menuClick,active}:SidebarProps) => {
  const ButtonSrc = active ? '/close.svg' : '/menu.svg'
  return (
    <div className='lg:w-9/12 w-full flex flex-col p-5 bg-[#EDEDED] max-lg:w-full'>
      <div className='max-lg:flex justify-end pr-10 left-0 hidden z-40 h-16 min-w-full top-0 fixed bg-white/70 border'>
        <button onClick={menuClick}>
          <Image className="flex" src={ButtonSrc} width={20} height={20} alt='menu' />

        </button>
        
      </div>
      <div className='w-full p-6 bg-white h-full rounded-lg max-lg:pt-20 overflow-y-scroll relative'>
      
        {children}
      </div>
      
    </div>
  )
}

export default Container
