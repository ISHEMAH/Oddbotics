import React from 'react'
import Header from './Header'
import TestimonialCard from './TestimonialCard'


const Testimonials = () => {
  return (
    <div className='w-full flex flex-col mt-10 items-center gap-8'>
      <Header heading='Testimonials'/>
      <h1 className='font-semibold text-2xl'>Over <span className='text-indigo-600 font-bold'>100+</span> people trust us.</h1>
      <div className='w-full items-center gap-8 justify-center flex-col lg:flex-row flex'>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </div>
    </div>
  )
}

export default Testimonials
