import React, { useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"
import { IoEye, IoEyeOff } from "react-icons/io5";
import EyesOpen from '../assets/eyesOpen.svg'
import EyesClosed from '../assets/eyesClosed.svg'

function Register() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading holatini qo'shamiz

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parollarni taqqoslash
    if (password !== repassword) {
      setError("Parollar mos kelmayapti!");
      return;
    }

    setLoading(true); // Yuborish jarayoni boshlandi

    // API ga so'rov yuborish
    axios
      .post("https://farbesh.up.railway.app/api/auth/registration/", {
        username:username,
        email:email,
        password1:password,
        password2:repassword,
      })
      .then((response) => {
        Cookies.remove("token");
        Cookies.set("token", response.key);
        navigate("/home");
        // Ro'yxatdan o'tish muvaffaqiyatli bo'lsa, sahnani tozalash
        setUsername("");
        setEmail("");
        setPassword("");
        setRepassword("");
        setError("");
        setLoading(false); // Yuborish jarayoni tugadi
        // Qo'shimcha harakatlar (masalan, foydalanuvchini boshqa sahifaga yo'naltirish)
      })
      .catch((error) => {
        setError(
          "Xato: " +
            (error.response?.data?.message ||
              "Serverda xatolik! Iltimos, birozdan song urunib koring!")
        );
        setLoading(false); // Yuborish jarayoni tugadi
      });
  };
  return (
    <div className='relative flex flex-col items-center bg-[#fff] px-6 py-10 min-h-screen overflow-hidden font-display'>
      <Header />

      <div className="flex flex-col justify-center items-center mt-[20px] mr-[40px] ml-[40px] w-full">
        <h1 className="mb-[20px] font-bold text-xl text-center">
          Roʻyxatdan oʻtish
        </h1>
        <form
          className="flex flex-col gap-[10px] w-full max-w-md select-none"
          onSubmit={handleSubmit}
        >
          <label className="relative flex flex-col gap-[7px] text-[14px]">
            {" "}
            Ismingizni kiriting:
            <input
              type="text"
              placeholder="Ism"
              className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="relative flex flex-col gap-[7px] text-[14px]">
            {" "}
            Email pochtangizni kiriting:
            <input
              type="email"
              placeholder="Email"
              className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="relative flex flex-col gap-[7px] text-[14px]">
            {" "}
            Parolni kiriting:
            <input
              type={show1 ? "password" : "text"}
              placeholder="Parol"
              className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              onClick={() => setShow1(!show1)}
              className="right-[14px] bottom-2 z-10 absolute cursor-pointer"
            >
              {show1 ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </div>
          <label className="relative flex flex-col gap-[7px] text-[14px]"> Paro'lnni kiriting:
            <input type={show1 ? 'password' : 'text'} placeholder="Parol" className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full min-w-20 max-w-2xl font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" />
            <img onClick={() => { setShow1(!show1) }} className='right-[14px] bottom-2 z-10 absolute w-[20px] cursor-pointer' src={show1 ? EyesOpen : EyesClosed} />
          </label>

          <label className="relative flex flex-col gap-[7px] text-[14px]"> Parolni qayta kiriting:
            <input type={show2 ? 'password' : 'text'} placeholder="Parolni tastiqlash" className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full min-w-20 max-w-2xl font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" />
            <img onClick={() => { setShow2(!show2) }} className='right-[14px] bottom-2 z-10 absolute w-[20px] cursor-pointer' src={show2 ? EyesOpen : EyesClosed} />
          </label>

          <label className="relative flex flex-col gap-[7px] text-[14px]">
            {" "}
            Parolni qayta kiriting:
            <input
              type={show2 ? "password" : "text"}
              placeholder="Parolni tastiqlash"
              className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              required
            />
            <div
              onClick={() => setShow2(!show2)}
              className="right-[14px] bottom-2 z-10 absolute  cursor-pointer"
            >
              {show2 ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </div>
          </label>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className={`bg-[#FCE000] mt-[10px] px-3 py-2 rounded-md w-full max-w-2xl font-medium active:scale-95 transition-[0.3s] cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Yuborilmoqda..." : "Jo'natish"}
          </button>
          <p className="font-medium text-[12px] text-center">
            Allaqachon hisobingiz bormi?{" "}
            <Link to={"/login"} className="text-[#FCE000] underline">
              Tizimga kirish
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default React.memo(Register);
