import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='w-96 h-72 border-2 flex p-8 flex-col justify-between bg-violet-400/10 border-violet-400 rounded-2xl' id='testimonials'>
      <div className='relative flex items-center w-full h-4/6 justify-center '>
        <h1 className='absolute -top-4 -left-3 text-6xl text-indigo-600'>"</h1>
        <h1 className='absolute -bottom-8 -right-1 text-6xl text-indigo-600'>"</h1>
        <p className='text-sm'>Hello and welcome to our website! As the manager of our Discord bot, I am thrilled to have you here. Our team is dedicated to providing the best possible experience for our users, and we are constantly working to improve and enhance our bot.</p>
      </div>
      <div>
        <div className='flex items-center gap-3'>
            <div className='w-16 h-16 rounded-full bg-gray-400'>

            </div>
            <div className='flex flex-col'>
                <h1 className='font-regular text-2xl'>John Doe</h1>
                <p className='font-semibold text-sm text-indigo-600'>Ceo of Google</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
