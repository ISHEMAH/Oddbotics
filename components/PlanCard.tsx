import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PricingDetails } from '@/constants'
import { PlanCardProps } from '@/types'


const PlanCard = ({title,description,color,bg,features,number,button,otherColor,pagelink}:PlanCardProps) => {
  return (

    <div className={`flex w-72 flex-col gap-10 border relative rounded-xl border-gray 500 p-6 ${otherColor ? "bg-white" :"bg-indigo-600"}`}>
       
        <div className='z-30 w-full h-full gap-8 flex flex-col bg-transparent'>

        
        <div className='flex flex-col gap-2'>
        <h1 className={`font-bold text-xl text-${color}`}>{title}</h1>
        <p className={`text-gray ${otherColor ? "text-gray-600": "text-white"}`}>{description}</p>
        </div>
        <div className='w-full flex items-center justify-center'>
            <h1 className={`text-4xl font-extrabold text-${color}`}>$<span className={`font-extrabold text-9xl text-${color}`}>{number}</span></h1>
        </div>
        <Link href={pagelink} className='w-full'>
            <div className='relative w-full hover:scale-95 transition-all duration-200 flex items-center justify-center'>
                <Image className='absolute w-full' src={button} alt='button' width={30} height={60}/>
                <span className={` font-bold z-10 ${otherColor ? "text-white": "text-indigo-600"}`}>Purchase</span>
            </div>
        </Link>
        <div>
            <p className={`font-bold text-md text-${color}`}>Features</p>
            <div className='w-full h-3/6 px-2'>
            {Object.values(features).map((feature,index) => (
                        <div className='w-full flex' key={index}>
                <Image
                    src="/Check.svg"
                    alt='check'
                    width={16}
                    height={12}     

                
                />
                    <p className={`text-sm ${otherColor ? "text-gray-600": "text-white"}`}>{feature}</p>
            </div>
            ))}


        </div>
        </div>
    </div>

    </div>
  )
}

export default PlanCard