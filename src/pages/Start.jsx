import React from 'react'
import Logo from '../assets/logo.webp'
import InfoIcon from '../assets/infoIcon.svg'

function Start() {
    return (
        <div className='bg-[#151513] px-[24px] py-[56px] h-screen'>
            <div className='flex justify-between items-center pb-[24px] border-[#737371] border-b'>
                <div className='flex items-center gap-[5px] text-[#F5CE55] text-[20px]'>
                    <img src={Logo} className='rounded-full w-[56px] h-[56px]' />
                    <h1>FarBesh</h1>
                </div>
                <img src={InfoIcon} />
            </div>
        </div>
    )
}

export default Start