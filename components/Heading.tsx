import React from 'react'


const Heading = () => {
  return (
    <div className='w-full bg-black/5 items-center p-4 flex rounded-xl'>
      <div className='w-10 h-10 bg-black/60 rounded-md'>

      </div>
      <div className='flex flex-col justify-between  ml-6'>
        <h1 className='font-semibold text-md'>Custom Commands</h1>
        <p className='font-regular text-[#636363] text-sm'>Create custom slash commands</p>
      </div>
    </div>
  )
}

export default Heading
