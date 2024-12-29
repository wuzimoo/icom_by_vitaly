import React from 'react';
import Image from "next/image";
import AppleCard from "../../../public/appleCard.png";
const ProductItem = () => {
    return (
        <div className="w-[23.8%] bg-white rounded-lg shadow-lg p-6 relative">
            <div className="relative">
                <Image src={AppleCard} alt="Apple Gift Card" className="w-full rounded-md"/>
                <div
                    className="absolute scale-125 -top-[11px] -left-[12px] bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -30%
                </div>
            </div>

            <div className="mt-4">
                <div className="flex items-center space-x-2 text-lg">
                    <span className="line-through">1050 ₽</span>
                    <span className="text-red-500 font-semibold ">1049 ₽</span>
                </div>

                <h3 className="text-sm font-semibold mt-2">Apple gift cards, любой регион</h3>

                <div className="flex items-center justify-between  mt-1 gap-3">
                    <p className=" text-gray-500 overflow-hidden text-base  text-ellipsis whitespace-nowrap">Скидка на
                        любую покупку, 10asasgsdgdsgsdgsdgsdgsd0</p>

                    <div className="flex items-center px-2 text-sm border-2 border-black rounded-full w-fit">
                        <span>★</span>
                        <span>4.8</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
