import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-dark-blue text-white text-16 md:text-18'>
            <div className='max-w-1280 mx-auto px-24 py-24'>
                <div className='flex gap-24'>
                    <Link href=''>Home</Link>
                </div>
            </div>
        </div>
    )
}