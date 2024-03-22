'use client'

import React from 'react'
import { Meteors } from '@/compnents/ui/meteors'

function page() {
  return (
    <div className='shadow-xl bg-gray-900 border h-screen *:border-gray-800  px-4 py-8 overflow-hidden flex flex-col justify-center items-start'>
      <div className='flex  items-center justify-center mb-4 border-gray-500'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-2 w-2 text-gray-300'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25'
          />
        </svg>
      </div>
      <div className='flex flex-col w-full justify-center items-center'>
        <h1 className='text-lg md:text-4xl text-center font-sans font-bold mb-8 mt-8 text-white'>
          Contact Us
        </h1>
        <input
          type='text'
          placeholder='Email'
          className='border px-4 py-2 rounded-lg mb-4 w-96 h-15'
        />
        <textarea
          placeholder='Message'
          className='border px-4 py-2 rounded-lg mb-4 w-96 h-48'
        />
        <button
          className='border px-4 py-2 rounded-lg bg-blue-500 text-white 
       '
        >
          Send Message
        </button>
      </div>

      {/* Meaty part - Meteor effect */}
      <Meteors number={20} />
    </div>
  )
}

export default page
