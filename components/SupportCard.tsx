import React from 'react'
import Image from 'next/image'

const SupportCard = () => {
  return (
    <div className='w-64 flex flex-col cardgradient rounded-lg items-center justify-center  gap-4 h-72'>
      <div className='relative w-20 h-20 flex items-center justify-center'>
        <Image src='/account.svg' alt="icon" width={50} height={50} className='w-full absolute h-full'/>
      </div>
      <h1 className='font-semibold text-black'>
        Account
      </h1>
      <p className='font-regular text-sm text-[#1A1A1A] text-center'>
      Issues with your BotGhost or Discord account
      </p>
    </div>
  )
}

export default SupportCard
