import React from 'react'
import Header from './Header'
import Image from 'next/image'
import FeatureCard from './FeatureCard'
import { AllFeatures } from '@/constants'

const Features = () => {
  return (
    <div id='features'className='flex flex-col w-full relative items-center mt-24'>
        <Header heading='Our Features'/>
        <Image
            src="zig.svg"
            width={300}
            height={600}
            alt='zig'
            className='absolute -left-9 -top-10'
        />
        <div className='w-full z-10 scroll flex overflow-x-scroll mt-6 gap-5 lg:px-9 p-3'>
          {AllFeatures.map((feature) => (
            <FeatureCard 
             featureCover={feature.coverpath}
             featureDescription={feature.Description}
             featureTitle={feature.Feature}
            />
          ))}
            
        </div>
    </div>
  )
}

export default Features
