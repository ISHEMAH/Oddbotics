import React from 'react'
import CustomButton from './CustomButton'
import {Three} from '@/components';
import Image from 'next/image';

const Hero = () => {
  return (
    <div id='home' className='w-full flex flex-col max-sm:pt-20 pt-36 items-center '>
    <div className='w-full flex flex-col items-center relative'>
        <h1 className='text-center sm:text-5xl text-4xl font-semibold'>Enjoy new release at</h1>
      <h1 className='text-center sm:text-5xl text-3xl font-bold mt-5 text-indigo-600'>ODDBOTICS</h1>
      <p className='text-gray-600 sm:text-sm text-center md:text-lg md:mt-16 mt-8 max-lg:w-3/4 w-8/12'>Welcome to DDBotics, your one-stop solution for all your bot needs. Our platform provides you with advanced and user-friendly bot services to help you automate your business processes, improve customer engagement, and streamline your operations.</p>
      <CustomButton title='Get Started' containerStyles='mt-10 px-5 hover:relative'/>
    </div>
    <div className='w-full mt-16 relative flex  justify-center'>
        <div className='absolute md:w-[640px] w-11/12 h-[440px] '>
            <Image
                src='pink.svg'
                alt="Pink"
                width={20}
                height={20}
                className='absolute top-0 rotate left-0'

            />
            <Image
                src='yellow.svg'
                alt="yellow"
                width={20}
                height={20}
                className='absolute top-64 rotate left-0'

            />
            <Image
                src='blue.svg'
                alt="blue"
                width={20}
                height={20}
                className='absolute -top-5 rotate right-0'

            />
            <Image
                src='red.svg'
                alt="red"
                width={20}
                height={20}
                className='absolute -bottom-6 rotate right-0'

            />




        </div>
        <Image
            className='absolute top-0 lg:w-52 left-0 md:flex hidden'
            src='right.svg'
            width={150} height={90}
            alt='right'
            />

        <Three/>
        <Image
            className='absolute bottom-0  lg:w-52 right-0 md:flex hidden'
            src='left.svg'
            width={150} height={90}
            alt='right'
            />
        
    </div>
      
    </div>
  )
}

export default Hero
