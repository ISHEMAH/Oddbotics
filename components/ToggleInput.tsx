import React from 'react'
import { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'
import { ToggleInputProps } from '@/types'


const ToggleInput = ({label, decription}:ToggleInputProps) => {
    const [toggler, setToggler] = useState(false)
  return (
    <div className='w-full rounded-lg mb-3 flex items-center justify-between p-4 bg-white'>
      <div className='flex flex-col'>
        <h1 className='font-semibold'>{label}</h1>
        <p className='text-gray-600 text-sm'>{decription}</p>
      </div>

      <div>
        <ToggleSwitch onChange={() => setToggler(!toggler)} checked={toggler}/>
      </div>
    </div>
  )
}

export default ToggleInput
