'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
interface Person {
  id: number
  name: string
  designation: string
  image: string
}

const peopleArray: Person[] = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Music Instructor',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Alice Smith',
    designation: 'Guitarist',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'David Johnson',
    designation: 'Piano Teacher',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  // Add more objects as needed
]

function Instructors() {
  return (
    <div className='relative h-[40 rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>
          Meet our Instructors
        </h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={peopleArray} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
