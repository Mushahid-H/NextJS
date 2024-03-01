import HeroSection from '@/compnents/HeroSection'
import { minify } from 'next/dist/build/swc'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white'>
      <HeroSection />
    </main>
  )
}
