import React from 'react'
import Image from 'next/image'

const Song = () => {
  return (
    <div className='w-72 p-3 bg-white hover:bg-indigo-600/5 transition-all rounded-lg shadow-sm flex justify-between items-center'>
      <div className='flex items-center justify-center'>
        <Image src='/cover.png' width={1000} height={1000} alt='cover' className='w-10 h-10 rounded-md'/>
        <div className='flex flex-col ml-3'>
            <h1 className='font-semibold text-sm text-indigo-600'>
                Ginger Me
            </h1>
            <p className='text-sm'>Rema</p>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-end'>
        <button type="button">
            <Image src='/menuicon.svg' width={10} height={10} className='w-4' alt='menu'/>
        </button>
        <p className='text-gray-400 text-xs'>
          2:51
        </p>

      </div>
    </div>
  )
}

export default Song
