import React from 'react'
import Logo from '../assets/logo.webp';
import InfoIcon from '../assets/infoIcon.svg';
import BgImage from '../assets/starts-bg.png';
import { useNavigate } from 'react-router-dom';

function Start() {
    const navigate = useNavigate();

    function handleNavigateLogin() {
        navigate('./home');
    }

    return (
        <div className='relative flex flex-col items-center bg-[#151513] px-6 py-10 min-h-screen overflow-hidden font-display'>
            <header className='flex justify-between items-center pb-6 border-[#737371] border-b w-full max-w-md'>
                <div className='flex items-center gap-2 text-[#F5CE55] text-xl'>
                    <img src={Logo} className='rounded-full w-12 h-12' alt='FarBesh Logo' />
                    <h1>FarBesh</h1>
                </div>
                <img src={InfoIcon} className='w-5 h-5' alt='Information' />
            </header>

            <div className='relative flex flex-col flex-grow items-center gap-6 pb-40 w-full max-w-sm text-center'>
                <section>
                    <h2 className='mt-8 font-semibold text-white text-2xl'>Taxi of your dreams</h2>
                    <p className='opacity-70 mt-2 font-medium text-white text-base'>
                        Comfortable rides around the city
                    </p>
                </section>

                <div className='bottom-0 left-1/2 absolute flex justify-center items-center w-full max-w-xs -translate-x-1/2 transform'>
                    <img src={BgImage} alt='Background' className='-bottom-11 z-[-5] absolute w-[250px] h-auto' />
                </div>

                <div className='flex flex-col items-center w-full'>
                    <button
                        onClick={handleNavigateLogin}
                        type='button'
                        className='bottom-5 z-10 absolute bg-gradient-to-r from-[#E9BC32] to-[#FFDC71] py-3 rounded-lg w-4/5 font-semibold text-black active:scale-95 transition-[0.3s] cursor-pointer'
                    >
                        Kirish
                    </button>
                    <a href='#' className='-bottom-5 z-10 absolute opacity-70 font-medium text-white text-base underline'>
                        Registratsiya
                    </a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Start);