import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialLinks } from '@/constants'
import ContactInput from './ContactInput'
import CustomButton from './CustomButton'

const Footer = () => {
  return (
    
    
    <div className='w-full  relative mt-24 '>
<Image
     src='globe.svg'
     width={200} 
     height={300}
     alt='globe'
      className='absolute -left-24 bottom-0 h-4/6 max-lg:hidden'
     />
     <div className='w-full border justify-between items-center bottom-0 lg:px-36 px-10 flex flex-wrap md:py-8 max-sm:px-2 py-3'>
      <div className='gap-6 flex flex-col'>
      <Link href="/">
      <div className='logo flex w-fit justify-between items-center'>
        <Image 
          src='Logo.svg'
          height={30}
          width={30}
          alt='Logo'
        />
        <h5 className='font-bold text-sm uppercase ml-1'>Oddbotics</h5>
      </div>
      </Link>
      <p>© 2023 DDBotics. All rights reserved.</p>
      <p>You can contact us on :</p>
      <div className='flex gap-3'>
        {SocialLinks.map((social) =>(
          <Link href={social.link} key={social.name}>
            <div className='h-10 w-10 rounded-full p-3 bg-indigo-600 border border-indigo-600 flex items-center justify-center'>
              <Image src={social.icon} height={20} width={20} alt={social.name} className='w-full h-full'/>
            </div>
          </Link>
        ) )}
      </div>
      </div>
      <div className='flex flex-col pt-10 max-sm:w-full gap-6'>
        <p>You can Subscribe now to the to and purchase our bot:</p>
        <form action="">
          <label htmlFor="subscribe">Your Email:</label>
          <ContactInput icon='/email.svg' placeholder='example@gmail.com' name='subscribe' type='email'/>
          <CustomButton btnType='submit' title='Subscribe' containerStyles='md:w-fit w-full mt-10'/>
        </form>
      </div>
      <Image src='/Astronaut.png' width={500} height={800} alt='bot' className='w-64 relative bottom-0 hidden lg:flex'/>
     </div>

    </div>
  )
}

export default Footer