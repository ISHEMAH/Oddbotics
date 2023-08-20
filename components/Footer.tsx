import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialLinks } from '@/constants'

const Footer = () => {
  return (
    
    
    <div className='w-full relative  mt-24 '>
<Image
     src='globe.svg'
     width={200} 
     height={300}
     alt='globe'
      className='absolute -left-24 bottom-0 h-4/6'
     />
     <div className='w-full border px-36 flex flex-wrap py-8'>
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
     </div>

    </div>
  )
}

export default Footer