import React from 'react'
import Image from 'next/image'
import { MemberProps } from '@/types'

const Member = ({image,name,roles,date}:MemberProps) => {
  return (
    <div className='w-full border-b flex  border-gray-200 py-3 items-center'>
                <div className='w-4/12 pl-4 flex items-center'>
                    <Image src={image} width={40} height={40} alt='Profile' className='rounded-full'/>
                    <h1 className='ml-4 font-medium'>{name}</h1>
                </div>
                <div className='w-6/12 pl-4 flex gap-3 items-center'>
                {Object.values(roles).map((role,index) => (
                        <div className={`w-fit flex p-2 items-center justify-center rounded-lg   ${role == 'golden community' ? 'bg-green-600/10 text-green-700': "bg-indigo-600/10 text-indigo-600"} ${role == 'chef technology officer' ? 'bg-teal-300/10 text-cyan-400': "bg-indigo-600/10 text-indigo-600"}`} key={index}>
                
                    <p className='text-xs uppercase '>{role}</p>
            </div>
            ))}
                </div>
                <div className='w-2/12 pl-4 items-center'>
                    <h1 className='text-black uppercase font-medium text-sm'>{date}</h1>
                </div>
            </div>
  )
}

export default Member
