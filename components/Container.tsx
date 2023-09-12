import React, { ReactNode } from 'react'

const Container = ({children}:{ children: ReactNode }) => {
  return (
    <div className='lg:w-9/12 w-full p-5 bg-[#EDEDED]'>
      <div className='w-full p-6 bg-white h-full rounded-lg overflow-y-scroll'>
        {children}
      </div>
      
    </div>
  )
}

export default Container
