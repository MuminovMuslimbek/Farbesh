// import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userLogo from "../assets/userLogo.png";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../components/Header";

export default function Drivers() {
  const users = [
    {
      id: 1,
      logo: userLogo, // Rasm uchun
      name: "Falonchi Pismad..",
      birthYear: "1995 yil",
      car: "Malibu",
    },
    {
      id: 2,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 3,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 4,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 5,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 6,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 7,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 8,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 9,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 10,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 11,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 12,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
    {
      id: 13,
      logo: userLogo, // Ikkinchi user uchun rasm
      name: "Kimdir Boshqa",
      birthYear: "2001 yil",
      car: "Captiva",
    },
  ];
  const navigate = useNavigate()

  return (
    <section className="!relative mx-auto max-w-lg h-dvh overflow-hidden">
      <div className="mt-6 px-6">
        <Header />
        <h1 className="py-5 font-bold text-2xl text-center">
          Haydovchilar
        </h1>
      </div>
      <div className="flex flex-col items-center gap-[10px] px-6 h-[59%] overflow-y-auto overAuto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center px-[20px] py-2 border border-[#FCE000] rounded-[16px] w-full"
          >
            <img className="w-[40px]" src={user.logo} alt="" />
            <h2 className="font-semibold text-sm">{user.name}</h2>
            <h2 className="font-semibold text-sm">{user.birthYear}</h2>
            <h2 className="font-semibold text-sm">{user.car}</h2>
          </div>
        ))}
      </div>
      <div className="bottom-0 absolute w-full">
        <div className="bottom-0 z-30 flex justify-center items-center shadow-[0px_0px_60px_rgba(0,0,0,0.3)] p-6 rounded-t-4xl w-full font-medium text-white">
          <button
            onClick={() => { navigate(-1) }}
            className="flex justify-center items-center bg-[#FCE000] p-3 rounded-2xl w-full"
          >
            <IoIosArrowBack /> Ortga
          </button>
        </div>
      </div>
    </section>
  );
}
