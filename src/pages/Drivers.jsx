// import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userLogo from "../assets/userLogo.png";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../components/Header";
import { getData } from "../api/service";
import { useEffect, useState } from "react";

export default function Drivers() {
  const [driver, setDriver] = useState([]);
  useEffect(() => {
    async function getDrivers() {
      try {
        const driversRes = await getData("v2/drivers/");
        console.log(driversRes.data);
        
        setDriver(driversRes);
      } catch (err) {
        console.log(err);
      }
    }
    getDrivers();
  }, []);
  const navigate = useNavigate();

  return (
    <section className="!relative mx-auto max-w-lg h-dvh overflow-hidden">
      <div className="mt-6 px-6">
        <Header />
        <h1 className="py-5 font-bold text-2xl text-center">Haydovchilar</h1>
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
            onClick={() => {
              navigate(-1);
            }}
            className="flex justify-center items-center bg-[#FCE000] p-3 rounded-2xl w-full"
          >
            <IoIosArrowBack /> Ortga
          </button>
        </div>
      </div>
    </section>
  );
}
