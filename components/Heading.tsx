import React from 'react'
import { HeadingProps } from '@/types'
import Image from 'next/image'

const Heading = ({icon,title,description}:HeadingProps) => {
  return (
    <div className='w-full bg-black/5 items-center p-4 flex rounded-xl'>
      <div className='w-10 h-10 bg-black/60 rounded-md flex items-center justify-center'>
      <Image src={icon} width={15} height={15} alt='icon'/>
      </div>
      <div className='flex flex-col justify-between  ml-6'>
        <h1 className='font-semibold text-md'>{title}</h1>
        <p className='font-regular text-[#636363] text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Heading
