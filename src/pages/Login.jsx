import React from 'react'
import Header from '../components/Header';

function Login() {
  return (
    <div className='relative flex flex-col items-center bg-[#fff] px-6 py-10 min-h-screen overflow-hidden font-display'>
      <Header />

      <div className="flex justify-center mr-[40px] ml-[40px] w-full">
        <form className="flex flex-col gap-[15px] w-full max-w-md select-none">
          <label className="relative flex flex-col gap-[10px]">Ismingizni kiriting:
            <input className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" type="text" />
          </label>

          <label className="relative flex flex-col gap-[10px]">Parolni kiriting:
            <input className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" type="password" />
          </label>

          <button className="bg-[#FCE000] mt-[10px] px-3 py-2 rounded-md w-full active:scale-95 transition-[0.3s] cursor-pointer">
            Jo'natish
          </button>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Login);