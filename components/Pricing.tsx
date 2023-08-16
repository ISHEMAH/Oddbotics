import React from 'react'
import Header from './Header'
import Image from 'next/image'
import PricingCard from './PricingCard'

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
        <div className='w-full items-center justify-center z-30 flex mt-6 gap-5 lg:px-9 p-3'>
         <PricingCard/> 
          
            
        </div>

    </div>
  )
}

export default Pricing
