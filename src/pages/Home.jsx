import React, { useState, useEffect } from "react";
import MapComponent from "../components/MapComponent";
import Location from "../assets/location.png";
import navBurger from "../assets/burger.svg";
import { AiOutlineClose } from "react-icons/ai"
import driver from "../assets/driver.png";
import LogOut from "../assets/logOut.svg"
import { Link } from "react-router-dom";

function Home() {
    const [userLocation, setUserLocation] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpenUl, setOpenUl] = useState(false)
    const [phone, setPhone] = useState("");
    const [route, setRoute] = useState("");
    const [passengerCount, setPassengerCount] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        if (alertMessage) {
            const timer = setTimeout(() => setAlertMessage(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [alertMessage]);

    const handleLocation = () => {
        if (!navigator.geolocation) {
            setAlertMessage({ text: "Geolokatsiya funksiyasi qo‘llab-quvvatlanmaydi.", type: "error" });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([latitude, longitude]);
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    setAlertMessage({ text: "Iltimos, lokatsiya funksiyasini yoqing.", type: "error" });
                } else {
                    setAlertMessage({ text: "Lokatsiya aniqlanmadi, qaytadan urinib ko‘ring.", type: "error" });
                }
            }
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpenUl && !event.target.closest(".menu-container")) {
                setOpenUl(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpenUl]);

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.startsWith("998")) {
            value = value.slice(3);
        }

        value = value.slice(0, 9);

        let formatted = "";
        if (value.length > 7) {
            formatted = `${value.slice(0, 2)} ${value.slice(2, 5)}-${value.slice(5, 7)}-${value.slice(7)}`;
        } else if (value.length > 5) {
            formatted = `${value.slice(0, 2)} ${value.slice(2, 5)}-${value.slice(5)}`;
        } else if (value.length > 2) {
            formatted = `${value.slice(0, 2)} ${value.slice(2)}`;
        } else {
            formatted = value;
        }

        setPhone(formatted);
    };

    return (
        <div className="relative flex flex-col bg-gray-100 mx-auto max-w-md h-dvh font-display">
            <div className={`transition ${isModalOpen ? "blur-sm pointer-events-none" : ""}`}>
                <button
                    onClick={(event) => {
                        event.stopPropagation();
                        setOpenUl(!isOpenUl);
                    }}
                    className="top-8 left-6 z-1 absolute bg-white shadow-md p-3 rounded-full active:scale-95 transition-all duration-300 cursor-pointer select-none"
                >
                    <img src={navBurger} alt="" className="w-6 h-6" />
                </button>
                <div>
                    <MapComponent userLocation={userLocation} />
                </div>
                <div className="bottom-0 z-20 absolute bg-white shadow-xl px-4 py-6 rounded-tl-3xl rounded-tr-3xl w-full h-full max-h-[220px] transition-transform duration-300 ease-in-out">
                    <div className="flex justify-center items-center">
                        <button
                            className="bottom-28 absolute flex items-center gap-2 bg-white px-20 py-3 border-2 border-black rounded-[12px] font-semibold text-black active:scale-95 transition-[0.3s] cursor-pointer"
                            onClick={handleLocation}
                        >
                            <img src={Location} alt="" width={20} />
                            Lokatsiya
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bottom-3 absolute bg-[#151513] px-24 py-4 rounded-[12px] font-semibold text-white active:scale-95 transition-[0.3s] cursor-pointer"
                            onClick={() => setIsModalOpen(true)}>
                            Buyurtma berish
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm">
                    <div className="relative bg-white shadow-2xl p-6 rounded-xl w-[340px] h-auto">
                        <h3 className="mb-4 font-semibold text-2xl text-center">Buyurtma berish</h3>
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <select className="bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDC71] w-full text-gray-800 text-sm">
                                <option value="" disabled>🚖 Qayerdan? - Qayerga?</option>
                                <option value="beshariq-fargona">📍 Beshariqdan - Farg‘onaga</option>
                                <option value="fargona-beshariq">📍 Farg‘onadan - Beshariqga</option>
                            </select>
                            <select className="bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDC71] w-full text-gray-800 text-sm">
                                <option value="" disabled>🔢 Yo‘lovchilar soni</option>
                                <option value="1">🧍 1 kishi</option>
                                <option value="2">🧑‍🤝‍🧑 2 kishi</option>
                                <option value="3">👨‍👩‍👦 3 kishi</option>
                                <option value="4">👨‍👩‍👧‍👦 4 kishi</option>
                                <option value="4">📦 Po'chta</option>
                            </select>
                            <select className="bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDC71] w-full text-gray-800 text-sm">
                                <option value="" disabled>🚻 Erkak yoki Ayol?</option>
                                <option value="male">👨 Erkak</option>
                                <option value="female">👩 Ayol</option>
                            </select>
                            <input
                                type="text"
                                value={phone ? `+998 ${phone}` : ""}
                                onChange={handlePhoneChange}
                                placeholder="+998 00 000-00-00"
                                className="bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDC71] w-full text-gray-800 text-sm"
                                maxLength={17}
                            />

                            <button className="bg-[#151513] shadow-md py-3 rounded-[12px] w-full font-semibold text-white active:scale-95 transition-all duration-300 cursor-pointer">
                                Buyurtma berish
                            </button>
                        </form>
                        <button className="top-4 right-4 absolute text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setIsModalOpen(false)}>
                            <AiOutlineClose className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
            {isOpenUl && (
                <div className="z-60 fixed flex justify-center items-center opacity-100 mt-[90px] ml-[70px] scale-100 transition-all duration-300">
                    <ul className="flex flex-col gap-[5px] bg-white px-[15px] py-[10px] rounded-md menu-container">
                        <Link to={'/drivers'} className="flex items-center gap-[7px]">
                            <img src={driver} className="w-[25px]" alt="" />
                            <p>Haydovchilar</p>
                        </Link>
                        <Link className="flex items-center gap-[8px]">
                            <img className="ml-[7px] w-[15px]" src={LogOut} alt="" />
                            <p>Chiqish</p>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default React.memo(Home);