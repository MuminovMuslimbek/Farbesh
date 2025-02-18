import React from 'react'
import Logo from '../assets/logo.webp';
import InfoIcon from '../assets/infoIcon.svg';

function Header() {
    return (
        <header className='flex justify-between items-center mb-[50px] pb-6 border-[#737371] border-b w-full max-w-md select-none'>
            <div className='flex items-center gap-2 text-[#F5CE55] text-xl'>
                <img src={Logo} className='rounded-full w-12 h-12' alt='FarBesh Logo' />
                <h1 className='font-bold'>FarBesh</h1>
            </div>
            <img src={InfoIcon} className='w-5 h-5' alt='Information' />
        </header>
    )
}

export default Header