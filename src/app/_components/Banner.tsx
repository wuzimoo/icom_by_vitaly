import React from 'react';
import BannerImage from "../../../public/banner.png";
import LogoIcon from "@/icons/Logo";

const Banner = () => {
    return (
        <div
            className="relative flex items-center justify-center text-center h-[230px] bg-gray-800 text-white overflow-hidden"
            style={{
                backgroundColor: '#333',
                backgroundImage: `url(${BannerImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="relative z-10 flex flex-col items-center">
                <LogoIcon isLight className="scale-150"/>
                <p className="text-base mt-2">цифровые товары на любой вкус</p>
            </div>
        </div>
    );
};

export default Banner;
