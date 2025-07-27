import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <div className='flex gap-2 text-4xl mb-4'>
        <h1>Oops!</h1>
        <h1>404 - Not Found</h1>
      </div>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className='underline'>Go back to homepage</Link>
    </div>
  )
}
