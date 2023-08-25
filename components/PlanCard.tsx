import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PricingDetails } from '@/constants'
import { PlanCardProps } from '@/types'


const PlanCard = ({title,description,cover,color,bg,features,number,button}:PlanCardProps) => {
  return (

    <div className='flex w-72 flex-col gap-10 border relative border-gray 500 p-6'>
        <Image src={cover} width="34" height="38" alt='bg' className='absolute w-full h-full'/>
        <div className={`z-50 w-full h-full ${bg}`}>

        
        <div className='flex flex-col gap-2'>
        <h1 className={`font-bold text-xl text-${color}`}>{title}</h1>
        <p className='text-gray'>{description}</p>
        </div>
        <div className='w-full flex items-center justify-center'>
            <h1 className='text-4xl font-extrabold'>$<span className='font-extrabolb text-9xl'>0</span></h1>
        </div>
        <Link href='/' className='w-full'>
            <div className='relative w-full hover:scale-95 transition-all duration-200 flex items-center justify-center'>
                <Image className='absolute ' src={button} alt='button' width={300} height={60}/>
                <span className='text-white font-bold z-10'></span>
            </div>
        </Link>
        <div>
            <p>Features</p>
            <div className='w-full h-3/6 px-2'>
            {Object.values(features).map((feature,index) => (
                        <div className='w-full flex' key={index}>
                <Image
                    src="/Check.svg"
                    alt='check'
                    width={16}
                    height={12}
                
                />
                    <p className='text-sm'>{feature}</p>
            </div>
            ))}


        </div>
        </div>
    </div>

    </div>
  )
}

export default PlanCard