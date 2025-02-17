import React, { useState, useEffect } from "react";
import MapComponent from "../components/MapComponent";
import Location from "../assets/location.png";
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";

function Home() {
    const [userLocation, setUserLocation] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);

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

    return (
        <div className="relative flex flex-col mx-auto max-w-lg h-dvh">
            {/* Xarita komponenti */}
            <div>
                <MapComponent userLocation={userLocation} />
            </div>

            {/* Xabar ko‘rsatuvchi div */}
            {alertMessage && (
                <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center px-3 py-2 rounded-lg shadow-lg text-white text-[12px] ${alertMessage.type === "error" ? "bg-[#191414] border border-red-600" : "bg-[#191414] border border-green-600"}`}>
                    <AiOutlineExclamationCircle className="mr-2 text-red-500" size={16} />
                    <span className="flex-grow whitespace-nowrap">{alertMessage.text}</span>
                    <button onClick={() => setAlertMessage(null)}>
                        <AiOutlineClose className="text-gray-400 hover:text-white" size={14} />
                    </button>
                </div>
            )}

            {/* Tugma joylashgan qism bo‘sh joylarni egallashi uchun mt-auto qo‘shildi */}
            <div className="bottom-0 z-20 absolute bg-white shadow-xl py-4 rounded-tl-4xl rounded-tr-4xl w-full h-full max-h-[200px]">
                <div className="flex justify-center items-center">
                    <button
                        className="bottom-28 absolute flex items-center gap-2 bg-white px-20 py-3 border-2 border-black rounded-2xl font-semibold text-black cursor-pointer"
                        onClick={handleLocation}
                    >
                        <img src={Location} alt="" width={20} />
                        Lokatsiya
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="bottom-3 absolute bg-[#151513] px-24 py-4 rounded-2xl font-semibold text-white cursor-pointer">
                        Buyurtma berish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;