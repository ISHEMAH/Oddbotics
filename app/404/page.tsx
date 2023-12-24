import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='items-center justify-center h-screen  flex min-w-full flex-col'>
      <div className='relative flex items-center justify-center'>
        <h1 className='text-indigo-600 font-extrabold text-[400px] max-md:text-[200px]'>4<span className='text-white stroke-indigo-600 '>0</span>4</h1>
        <Image alt='bot' src='/Astronaut.png' className='absolute self-center max-md:w-full w-4/6 p-40' width={1000} height={1000} />
      </div>
      <h3 className='text-gray-500 text-xl relative'>Page not found</h3>
    </div>
  )
}

export default page
