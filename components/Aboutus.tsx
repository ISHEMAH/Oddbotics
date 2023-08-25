import React from 'react'
import Header from './Header'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Aboutus = () => {
  return (
    <div className='W-full flex gap-5 flex-col' id='aboutus'> 
    <div className='w-full flex flex-col  items-center justify-center mt-24' id='Aboutus'>
      <Header heading='About Us'/>
      <div className='md:flex-row w-full flex justify-between flex-col '>
        <div className='md:flex flex-col md:w-6/12 lg:pl-24 gap-3 pl-3'>
          <div className='relative mb-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className='absolute -top-4'>
  <g filter="url(#filter0_b_16_9)">
    <circle cx="20" cy="20" r="20" fill="#5200FF" fill-opacity="0.36"/>
    <circle cx="20" cy="20" r="19.5" stroke="#5200FF"/>
  </g>
  <defs>
    <filter id="filter0_b_16_9" x="-7" y="-7" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_16_9"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_16_9" result="shape"/>
    </filter>
  </defs>
</svg>
            <h3 className="text-xl font-bold lg:text-2xl text-black">What we do!</h3>
          </div>
          <p className='text-gray-600 font-regular '>Our Discord bot is your all-in-one solution for managing your server. With features like custom commands, automated moderation, and customizable alerts, our bot makes it easy to keep your server running smoothly and efficiently.Looking for a fun and engaging way to connect with your community on Discord? Our bot has a variety of games and interactive features that will keep your users engaged and coming back for more.</p>
          <p className='text-gray-600 font-regular mt-5 hidden lg:flex'>Are you tired of manually managing your Discord server? Let our bot do the heavy lifting for you! Our advanced automation features make it easy to schedule messages, assign roles, and more.Say goodbye to spam and trolls on your Discord server. Our bot's powerful moderation tools allow you to easily manage users, delete messages, and enforce server rules with just a few clicks.</p>
          <CustomButton title='Get Bot' containerStyles='w-fit px-4 mt-6'/>
        </div>
        <div className='md:flex-row flex  flex-col relative md:w-6/12'>
          <Image
            src="laybg.svg"
            width={378}
            height={376}
            alt='lay'
            className='absolute right-0 lg:w-9/12'
          />
          <Image
            src="astro.svg"
            width={300}
            height={468}
            alt='astro'
            className='absolute self-center max-sm:right-0 lg:w-7/12'
          />
        </div>

      </div>
    </div>
    <div className='w-full flex flex-col max-md:pt-80 items-center justify-center mt-36' id='Aboutus'>
      
      <div className='md:flex-row w-full flex justify-between flex-col '>
        <div className='md:flex flex-col md:w-6/12 lg:pl-24 gap-3 pl-3'>
          <div className='relative mb-10'>
            <h3 className="text-xl font-bold text-black lg:text-2xl">Get Automated with Our</h3>
            <h3 className="text-xl font-bold text-indigo-600 lg:text-2xl">Powerful Bots</h3>
          </div>
          <p className='text-gray-600 font-regular '>Our bot service is designed to help you streamline your workflow and save time. Our powerful bots automate repetitive tasks and eliminate errors, so you can focus on more important work. Our bots are easy to set up and can be customized to your unique needs.</p>
          <CustomButton title='Purchase' containerStyles='w-fit px-4 mt-6'/>
        </div>
        <div className='flex flex-col justify-center items-center relative lg:w-6/12 w-full max-sm:mt-5'>
          <Image
            src="logos.svg"
            width={378}
            height={376}
            alt='lay'
            className=''
          />

        </div>

      </div>
    </div>
    </div>
  )
}

export default Aboutus
