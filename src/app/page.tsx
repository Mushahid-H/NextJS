import { minify } from 'next/dist/build/swc'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <div className='text-center text-2xl'>NextJs Project</div>
    </main>
  )
}
