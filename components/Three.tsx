import React from 'react'
import Image from 'next/image'

const Three = () => {
  return (
    <div className='md:w-[640px]  w-11/12 h-[440px] flex justify-center items-center'>
        <Image
          src='/Astronaut.png'
          alt='Three'
          width={1000}
          height={1000}
          className='w-6/12'
        />

    </div>
  )
}

export default Three
