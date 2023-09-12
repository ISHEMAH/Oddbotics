import React from 'react'
import Image from 'next/image'
import { ContactInputProps } from '@/types'

const ContactInput = ({icon,placeholder,type,name,Width}:ContactInputProps) => {
  return (
    <div className='md:w-fit border border-gray-400 rounded-lg p-3 flex-row flex w-full gap-2'>

       <Image src={icon} width={16} height={21} alt='user'/> 
      <input type={type} placeholder={placeholder} className={`focus:outline-0  ${Width ? Width :'w-72'}`}name={name} id={name}/>
    </div>
  )
}

export default ContactInput
