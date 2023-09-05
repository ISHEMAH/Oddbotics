import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navside = () => {
  return (
    <nav className='bg-white w-80 p-4 h-screen relative items-center flex flex-col rounded-tr-3xl rounded-br-3xl'>
        <div className='w-full flex flex-row justify-between'> 
        <Link href="/">
        <div className='logo flex w-fit justify-between items-center'>
            <Image 
            src='/Logo.svg'
            height={30}
            width={30}
            alt='Logo'
            />
            <h5 className='font-bold text-sm uppercase ml-1'>Oddbotics</h5>
        </div>
        </Link>
        <div className='bg-indigo-600 rounded-lg  px-3 font-bold text-sm flex justify-center items-center text-white'>
            <h1>Bot</h1>
        </div>
      </div>
      <div className='w-full h-12 bg-indigo-600/20 mt-10 rounded-full flex p-2 justify-between items-center'>
        <div className='flex items-center'>
          <Image src='/dashlogo.svg' width={30} height={30} alt='logo'/>
          <h1 className='font-bold text-sm ml-2 text-indigo-600'>My bot</h1>
        </div>
        <div className='w-fit cursor-pointer mr-3 hover:scale-105 transition-all duration-150'>
          <Image src='/edit.svg' alt='edit' width={20} height={20}/>
        </div>
      </div>



    </nav>
  )
}

export default Navside
