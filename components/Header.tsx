import React from 'react'
import { HeaderProps } from '@/types'
import Image from 'next/image'

const Header = ({heading}:HeaderProps) => {
  return (
    <div className='relative w-64 h-24 items-center flex mb-5 justify-center'>
        <div className='w-14 h-14 border border-black absolute  backdrop-blur-md  bg-black/30 over rounded-full '></div>
        <div className='w-3/4 items-center flex relative justify-center '>
                <Image
                    src="one.svg"
                    height={20}
                    width={10}
                    alt='one'
                    className='absolute rotate bottom-0 left-0'
                />
                <Image
                    src="two.svg"
                    height={20}
                    width={10}
                    alt='two'
                    className='absolute rotate top-3 right-4'
                />
                <Image
                    src="three.svg"
                    height={20}
                    width={10}
                    alt='three'
                    className='absolute rotate top-2 -left-4'
                />
                <h1 className='font-semibold p-4 text-indigo-600 text-xl colorchange'>{heading}</h1>
        </div>
    </div>
  )
}

export default Header


