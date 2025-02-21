import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='relative flex flex-col items-center bg-[#fff] px-6 py-10 min-h-screen overflow-hidden font-display'>
      <Header />

      <div className="flex flex-col justify-center mt-[20px] mr-[40px] ml-[40px] w-full">
        <h1 className='mb-[20px] font-bold text-xl text-center'>Tizimga kirish</h1>
        <form className="flex flex-col gap-[12px] w-full max-w-md select-none">
          <label className="relative flex flex-col gap-[7px] text-[14px]">Ismingizni kiriting:
            <input className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" placeholder='Ism' type="text" />
          </label>

          <label className="relative flex flex-col gap-[7px] text-[14px]">Parolni kiriting:
            <input className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" placeholder='Parol' type="password" />
          </label>

          <button className="bg-[#FCE000] mt-[10px] px-3 py-2 rounded-md w-full font-medium active:scale-95 transition-[0.3s] cursor-pointer">
            Jo'natish
          </button>
          <p className='font-medium text-[12px] text-center'>Hisobingiz yo'qmi? <Link to={'/register'} className='text-[#FCE000] underline'>Roʻyxatdan oʻtish</Link></p>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Login);