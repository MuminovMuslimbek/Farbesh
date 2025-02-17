import React from 'react';
import Logo from '../assets/logo.webp';
import InfoIcon from '../assets/infoIcon.svg';
import BgImage from '../assets/starts-bg.png';
import { useNavigate } from 'react-router-dom';

function Start() {

    const navigate = useNavigate()


    function handleNavigateLogin() {
        navigate('./home')
    }


    return (
        <div className='bg-[#151513] font-display  px-6 py-10 min-h-screen flex flex-col items-center overflow-hidden relative'>
            {/* Header */}
            <header className='w-full max-w-md flex justify-between items-center pb-6 border-b border-[#737371]'>
                <div className='flex items-center gap-2 text-[#F5CE55] text-xl'>
                    <img src={Logo} className='rounded-full w-12 h-12' alt='FarBesh Logo' />
                    <h1>FarBesh</h1>
                </div>
                <img src={InfoIcon} className='w-5 h-5' alt='Information' />
            </header>

            {/* Main Content */}
            <main className='flex flex-col flex-grow items-center text-center gap-6 w-full max-w-sm relative pb-40'>
                <section>
                    <h2 className='text-2xl mt-8 font-semibold text-white'>Taxi of your dreams</h2>
                    <p className='text-base font-medium text-white opacity-70 mt-2'>
                        Comfortable rides around the city
                    </p>
                </section>

                {/* Background Image */}
                <div className='absolute flex items-center justify-center bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs'>
                    <img src={BgImage} alt='Background' className='w-[250px] h-auto absolute -bottom-11 z-[-5]' />
                </div>

                {/* Buttons */}
                <div className='flex flex-col items-center w-full'>
                    <button
                    onClick={handleNavigateLogin}
                        type='button'
                        className='py-3 rounded-lg bg-gradient-to-r cursor-pointer from-[#E9BC32] to-[#FFDC71] w-4/5 text-black font-semibold z-10 absolute bottom-5'
                    >
                        Kirish
                    </button>
                    <a href='#' className='text-base font-medium text-white opacity-70 absolute -bottom-5 z-10'>
                        Registratsiya
                    </a>
                </div>
            </main>
        </div>
    );
}

export default Start;
