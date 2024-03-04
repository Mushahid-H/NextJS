import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
function Testimonials() {
  const music_school_testimonials = [
    {
      quote:
        "Joining the music school was the best decision I've ever made. The instructors are incredibly talented and supportive.",
      name: 'Alice Johnson',
      title: 'Piano Enthusiast',
    },
    {
      quote:
        'The music school has transformed my understanding of music theory. The curriculum is well-structured, and the lessons are enjoyable.',
      name: 'Robert Martinez',
      title: 'Aspiring Composer',
    },
    {
      quote:
        'I never thought learning to play the guitar could be this fun! The instructors make every lesson engaging and interactive.',
      name: 'Sophie Turner',
      title: 'Guitar Aficionado',
    },
    {
      quote:
        'Being part of the music school community has been an enriching experience. The collaborative atmosphere encourages growth and creativity.',
      name: 'David Chen',
      title: 'Music Enthusiast',
    },
    {
      quote:
        'The vocal training at the music school has significantly improved my singing abilities. The vocal coaches are skilled and passionate about teaching.',
      name: 'Elena Rodriguez',
      title: 'Vocalist in Training',
    },
  ]

  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10 '>
        Hear our Harmony: Voices of success
      </h2>

      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
          <InfiniteMovingCards
            items={music_school_testimonials}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
