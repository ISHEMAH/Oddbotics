import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'


const PricingCard = () => {
  return (
    <div className='flex flex-col w-72 h-96 border-2 rounded-2xl bg-white p-3'>
        <div></div>
        <div className='w-full h-2/6 rounded-lg relative '>
            <Image
                src='/basic.png'
                width={1000}
                height={1000}
                alt='basic'

                className='w-full h-full absolute'
            />
            <div className='w-full z-50 absolute px-3 py-5'>
                <h3 className='text-sm font-semibold text-white'>#1</h3>
                <h1 className='text-xl font-semibold text-white'>Basic Plan</h1>
            </div>
        </div>
        <div className='w-full h-fit flex items-center justify-center py-3'>
        <h1 className='text-lg text-center font-bold text-black'>3USD</h1>
        </div>
        <div className='w-full h-3/6 px-2'>
            <div className='w-full flex'>
                <Image
                    src="check.svg"
                    alt='check'
                    width={16}
                    height={12}
                
                />
                    <p>Text Based ChatBot</p>
            </div>

        </div>
        <CustomButton title='1 Month Subscription' containerStyles='rounded-b-xl'/>

      
    </div>
  )
}

export default PricingCard
