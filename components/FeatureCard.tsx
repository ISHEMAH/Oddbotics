import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { FeatureCardProps } from '@/types'
import Link from 'next/link'

const FeatureCard = ({featureCover,featureDescription,featureTitle}:FeatureCardProps) => {
  return (
    <div className='flex flex-col rounded-3xl bg-white/60 border-2 border-gray w-80 h-96'>
      <div className='w-80 h-3/6 rounded-t-3xl'>
        <Image
            src={featureCover}
            width={3000}
            height={150}
            alt='cover'
            className='w-full rounded-t-3xl'
            />
      </div>
        
        <div className='w-80 h-3/6 p-3 rounded-b-3xl flex backdrop-blur-md justify-between flex-col'>
            <h1 className='font-semibold'>{featureTitle}</h1>
            <p className='text-sm'>{featureDescription}</p>
            <Link href='/verifytoken' className='w-full'>
            <CustomButton title='Purchase' containerStyles='w-full'/>
            </Link>
            
        </div>
      
    </div>
  )
}

export default FeatureCard
