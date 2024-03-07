'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

function UpcomingWebinar() {
  const featured_webinars = [
    {
      title: 'Mastering Music Production Techniques',
      description:
        'Join our expert webinar to explore advanced music production techniques, including mixing, mastering, and the latest industry tools.',
      link: 'https://example.com/mastering-music-production',
    },
    {
      title: 'Unlocking the Secrets of Songwriting',
      description:
        'Discover the art of songwriting with our featured webinar. Learn about lyricism, melody construction, and how to evoke emotions through your music.',
      link: 'https://example.com/secrets-of-songwriting',
    },
    {
      title: 'Exploring Jazz Improvisation',
      description:
        'Dive into the world of jazz improvisation with our webinar. Renowned musician Sarah Mitchell will guide you through the essentials of jazz improvisation.',
      link: 'https://example.com/jazz-improvisation',
    },
    {
      title: 'Electronic Music Production Demystified',
      description:
        'Uncover the techniques behind electronic music production. Our webinar will cover sound design, beat-making, and creating electronic compositions.',
      link: 'https://example.com/electronic-music-production',
    },
    {
      title: 'The Business of Music: From Passion to Profession',
      description:
        'Learn about turning your musical passion into a profession. Our expert webinar will provide insights into the business side of the music industry.',
      link: 'https://example.com/business-of-music',
    },
  ]

  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='mt-2 text-sm text-gray-400'>Featured Webinars</h2>
          <p className=' text-3xl font-bold text-white'>
            Enhance you knowledge with our upcoming webinars
          </p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={featured_webinars} />
        </div>
        <div className='mt-10 text-center'>
          <Link
            href={'/courses'}
            className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-300 transition duration-200'
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinar
