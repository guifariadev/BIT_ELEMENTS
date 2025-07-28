import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className="text-4xl font-bold mb-2 text-center">Feedback</h1>
        <p className="text-gray-400 mb-6 rounded-md">
          Still in development. Please check back later for updates.
        </p>
        <Link href='/'> <p className='underline'>Go back to homepage</p> </Link>
      </div>
    </section>
  )
}
