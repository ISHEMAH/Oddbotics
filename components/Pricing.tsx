import React from 'react'
import Header from './Header'
import Image from 'next/image'
import PricingCard from './PricingCard'
import { PricingDetails } from '@/constants'

const Pricing = () => {
  return (
    <div id='features'className='flex flex-col  w-full relative items-center mt-24'>
      <Header heading='Pricing'/>
      <Image
        src='Ellipse.svg'
        alt="ellipse"
        width={200}
        height={200}
        className='absolute -bottom-3 left-0'
      />
      <Image
        src='Ellipse2.svg'
        alt="ellipse"
        width={200}
        height={200}
        className='absolute -top-3 right-0'
      />
        <div className='w-full items-center max-md:flex-col justify-center z-30 flex mt-6 gap-5 lg:px-9 p-3'>
          {PricingDetails.map((price) => (
            <PricingCard price={price.price} cover={price.cover} buttonText={price.buttonText} title={price.title} number={price.number} features={price.features} key={price.title}/>
          ))}
          
          
            
        </div>

    </div>
  )
}

export default Pricing
