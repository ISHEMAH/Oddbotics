import React from 'react'
import Image from 'next/image'

const Command = () => {
  return (
    <div className='w-full pl-10 pr-4 py-2 bg-indigo-600/10 justify-between rounded-lg items-center flex'>
      <div className='flex flex-col justify-center gap-1'>
        <h1 className='font-bold text-md text-indigo-600 '>/hug</h1>
        <p className='font-regular text-sm text-black '>Send a hug</p>
      </div>
      <div className='flex gap-4'>
        <button className='w-8 h-8 flex items-center bg-white justify-center rounded-md'>
            <Image src='/update.svg' alt='update' className='w-4' width={15} height={15}/>
        </button>
        <button className='w-8 h-8 flex items-center bg-white justify-center rounded-md'>
            <Image src='/delete.svg' alt='update' className='w-4' width={15} height={15}/>
        </button>
      </div>
    </div>
  )
}

export default Command
