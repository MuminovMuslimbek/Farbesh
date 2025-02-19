import React from 'react'
import BgImage from '../assets/starts-bg.png';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Start() {
    const navigate = useNavigate();

    function handleNavigateLogin() {
        navigate('./home');
    }

    return (
        <div className='relative flex flex-col items-center bg-[#151513] px-6 py-10 min-h-screen overflow-hidden font-display'>
            <Header />

            <div className='relative mt-[50px] flex flex-col flex-grow items-center gap-6 pb-40 w-full max-w-sm text-center'>
                <div>
                    <h2 className='font-semibold text-white text-2xl'>Taxi of your dreams</h2>
                    <p className='opacity-70 mt-2 font-medium text-white text-base'>
                        Comfortable rides around the city
                    </p>
                </div>

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
                    <Link to='/register' className='-bottom-5 z-10 absolute opacity-70 font-medium text-white text-base underline'>
                        Ro'yxatdan o'tish
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Start);