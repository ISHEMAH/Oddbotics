import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

 interface EditnameProps {
    menuClick: () => void;
  }

const Editname = ({editClick}:SidebarProps) => {
  const [botname, setBotname] = useState('')
 
  return (
    <div className='backdrop-blur-md fadein bg-black/30 w-full z-50 items-center justify-center flex fixed h-screen '>
      <div className='w-[30rem] h-56 rounded-2xl p-4 bg-white relative'>
        <div className='w-full flex justify-between'>
            <h1 className='font-semibold'>Edit your bot's name</h1>
            <button className=' rounded-full bg-white/40 hover:scale-110 hover:bg-white transition-all ease-out'>
                <Image 
                    src='/close.svg'
                    width={20}
                    height={20}
                    alt='close'
                />
            </button>
        </div>

        <form action="" className='w-full mt-7 flex flex-col'>
            <label htmlFor="botname" className='text-gray-500 text-sm'>Bot name</label>
            <input type="text" className='bg-gray-100 mt-5 h-10 rounded-lg focus:outline-0 indent-4' />
            <button className='w-full mt-5 text-white font-semibold bg-indigo-600 py-2 rounded-lg hover:scale-x-95 transition-all duration-200'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Editname
