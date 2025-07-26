import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <h1>Oops!</h1>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to homepage</Link>
    </div>
  )
}
