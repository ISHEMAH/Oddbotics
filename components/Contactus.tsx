import React from 'react'
import Image from 'next/image'
import Header from './Header'
import ContactInput from './ContactInput'
import CustomButton from './CustomButton'

const Contactus = () => {
  return (
    <div className='flex flex-col w-full  items-center mb-16 justify-center mt-36 lg:px-20 px-3' id='contactus'>
      <Header heading='Contact Us'/>
      <div className='flex w-full rounded-2xl mt-16 border'>
        <div className='lg:w-2/5 h-full'>
            <Image src='/spectrum.png' width={1999} height={3000} className='w-full h-full rounded-tl-2xl rounded-bl-2xl lg:flex hidden' alt='cover'/>
        </div>
        <div className='lg:w-3/5  w-full flex-col items-center justify-center p-6'>
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
            <h3 className="text-xl font-bold lg:text-2xl text-black">Let’s Get In Touch</h3>
            <p>24/7 We will answer your questions and Problems</p>
          </div>
          <form className='w-full flex justify-between flex-wrap gap-5'>
            <ContactInput icon='user.svg' placeholder='First name' type='text' name='firstname'/>
            <ContactInput icon='user.svg' placeholder='Last name' type='text' name='lastname'/>
            <ContactInput icon='email.svg' placeholder='Email' type='email' name='email'/>
            <ContactInput icon='phone.svg' placeholder='First name' type='text' name='phone'/>
            <textarea name="message" placeholder='Describe your issue' id="message" className='w-full border h-36 border-gray-400 rounded-lg p-3 focus:outline-0'></textarea>
            <CustomButton title='Submit' btnType='submit' containerStyles='w-full'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
