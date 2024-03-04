'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const content = [
  {
    title: 'Harmony Music Academy',
    description:
      'Harmony Music Academy is dedicated to providing comprehensive music education for all ages. Our expert instructors offer lessons in various instruments, music theory, and ensemble playing to foster a well-rounded musical education.',
  },
  {
    title: 'Rhythmic Arts Conservatory',
    description:
      'At Rhythmic Arts Conservatory, we believe in nurturing the artistic and technical skills of aspiring musicians. Our state-of-the-art facilities and passionate faculty create an inspiring environment for students to explore their musical potential.',
  },
  {
    title: 'Melody Makers School of Music',
    description:
      'Melody Makers School of Music is committed to shaping the next generation of musicians. From beginner to advanced levels, our personalized approach to teaching ensures that each student develops a strong foundation and a lifelong love for music.',
  },
  {
    title: 'Crescendo Music Institute',
    description:
      'Crescendo Music Institute offers a dynamic and innovative curriculum that covers a wide range of musical genres. Our dedicated instructors focus on both classical traditions and contemporary styles to prepare students for a diverse musical landscape.',
  },
  {
    title: 'Symphony Arts Academy',
    description:
      'Symphony Arts Academy is where passion meets precision. Our experienced faculty, world-class facilities, and commitment to excellence make us a premier choice for those seeking a top-tier music education. Join us on a journey of musical discovery and mastery.',
  },
]

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
