import React from 'react'
import Image from 'next/image'
import { ExampleProps } from '@/types'


const Example = ({image,title,description}:ExampleProps) => {
  return (
    <div className='w-80 flex border-2 border-gray-100 items-center p-6 rounded-lg bg-white justify-between gap-3 flex-col'>
      <h1 className='w-full font-semibold text-md'>{title}</h1>
            <Image src={image} alt='image cover' width={1000} height={1000} className='w-full h-52 rounded-md'/>
            <p className='font-regular text-sm  text-gray-600 w-full'>{description}</p>
    </div>
  )
}

export default Example
