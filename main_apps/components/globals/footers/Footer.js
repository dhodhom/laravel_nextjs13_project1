import React from 'react'
import Instagram from "@/main_apps/components/globals/footers/icon/Instagram"
import Linkedin from "@/main_apps/components/globals/footers/icon/Linkedin"

export default function Footer() {
    return (
        <div className='bg-dark-blue text-white'>
            <div className='max-w-1280 mx-auto px-24 py-48'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-8'>
                        <Instagram />
                        <Linkedin />
                    </div>
                    <span className='font-semibold'>2023 DIRAIT - All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}