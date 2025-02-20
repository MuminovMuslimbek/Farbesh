// import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <section className="max-w-lg h-dvh !relative mx-auto  overflow-hidden">
      <div className="mt-6 px-6">
        <Header />
        <h1 className="text-center text-2xl font-bold  py-5">
          Haydovchilar
        </h1>
      </div>
      <div className="overflow-y-auto overAuto h-[59%]  px-6  flex flex-col gap-[10px] items-center ">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex border p-2 rounded-2xl border-[#FCE000] w-full items-center justify-between"
          >
            <img className="w-[40px]" src={user.logo} alt="" />
            <h2 className="text-sm font-semibold">{user.name}</h2>
            <h2 className="text-sm font-semibold">{user.birthYear}</h2>
            <h2 className="text-sm font-semibold">{user.car}</h2>
          </div>
        ))}
      </div>
      <div className="absolute w-full bottom-0">
        <div className="w-full justify-center flex items-center z-30  rounded-t-4xl p-6  bottom-0 shadow-[0px_0px_60px_rgba(0,0,0,0.3)]">
          <Link
            className="flex items-center justify-center p-3 w-full bg-[#FCE000] rounded-2xl"
            to={"/home"}
          >
            <IoIosArrowBack /> Ortga
          </Link>
        </div>
      </div>
    </section>
  );
}
