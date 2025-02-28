import React, { useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const riderict = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userdatas = await axios.post(
        "https://farbesh.up.railway.app/api/auth/login",
        {
          username: username,
          password: pwd,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (userdatas.data.key) {
        Cookies.remove("token");
        Cookies.set("token", userdatas.data.key);
        riderict("/home");
      } 

      
    } catch {
      setErrMsg("! Foydalanuvchi nomi yoki parol notog'ri");
    }
  }
  return (
    <div className="relative flex flex-col items-center bg-[#fff] px-6 py-10 min-h-screen overflow-hidden font-display">
      <Header />

      <div className="flex flex-col justify-center items-center mt-[20px] mr-[40px] ml-[40px] w-full">
        <h1 className="mb-[20px] font-bold text-xl text-center">
          Tizimga kirish
        </h1>
        <p className={`${errMsg ? "text-red-500" : "hidden"}`}>{errMsg}</p>
        <form
          onSubmit={handleSubmit}
          className="flex mt-5 flex-col gap-[12px] w-full max-w-md select-none"
        >
          <label className="relative flex flex-col gap-[7px] text-[14px]">
            Foydalanuvchi nomini kiriting:
            <input
              className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]"
              placeholder="Foydalanuvchi nomi"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
                setErrMsg(""); // Xabarni yashirish
              }}
            />
          </label>

          <label className="relative flex flex-col gap-[7px] text-[14px]">
            Parolni kiriting:
            <input
              className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]"
              placeholder="Parol"
              type="password"
              onChange={(e) => {
                setPwd(e.target.value);
                setErrMsg(""); // Xabarni yashirish
              }}
            />
          </label>

          <button
            disabled={username && pwd ? false : true}
            type="submit"
            className="bg-[#FCE000] mt-[10px] px-3 py-2 rounded-md w-full font-medium active:scale-95 transition-[0.3s] cursor-pointer"
          >
            Jo'natish
          </button>
          <p className="font-medium text-[12px] text-center">
            Hisobingiz yo'qmi?{" "}
            <Link to={"/register"} className="text-[#FCE000] underline">
              Roʻyxatdan oʻtish
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default React.memo(Login);
