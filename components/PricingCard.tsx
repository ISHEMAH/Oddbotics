import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { PricingCardProps } from '@/types'
import Link from 'next/link'


const PricingCard = ({cover,price,features,buttonText,number,title}:PricingCardProps) => {
  return (
    <div className='flex flex-col w-72 h-96 border-2 rounded-2xl bg-white/70 p-3'>
        
        <div className='w-full h-2/6 rounded-lg relative '>
            <Image
                src={cover}
                width={1000}
                height={1000}
                alt='basic'
                className='w-full h-full absolute'
            />
            <div className='w-full z-50 absolute px-3 py-5'>
                <h3 className='text-sm font-semibold text-white'>#{number}</h3>
                <h1 className='text-xl font-semibold text-white'>{title}</h1>
            </div>
        </div>
        <div className='w-full h-fit flex items-center justify-center py-3'>
        <h1 className='text-lg text-center font-bold text-black'>{price}USD</h1>
        </div>
        <div className='w-full h-3/6 px-2'>
            <div className='w-full flex'>
                <Image
                    src="/Check.svg"
                    alt='check'
                    width={16}
                    height={12}
                
                />
                    <p className='text-sm'>{features}</p>
            </div>

        </div>
    <Link href='/verifytoken' className='w-full'> 
        <CustomButton title={buttonText} containerStyles='rounded-b-xl w-full'/>
    </Link>
      
    </div>
  )
}

export default PricingCard
