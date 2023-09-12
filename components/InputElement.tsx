import React from 'react'
import { InputProps } from '@/types'

const InputElement = ({type,placeholder,label,name}:InputProps) => {
  return (
    <div className='w-full flex flex-col p-5'>
        <label htmlFor="command" className='text-sm font-semibold'> 
                        {label}
        </label>
         <input type={type} placeholder={placeholder} className='w-full indent-4 bg-indigo-600/5 py-2 rounded-md mt-2' name={name}id={name}/>
    </div>
  )
}

export default InputElement
