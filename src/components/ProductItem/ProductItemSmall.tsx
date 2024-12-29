import React from 'react';
import Image from "next/image";
import AppleCard from "../../../public/appleCard.png";
import ProductImageContainer from "@/components/ProductItem/ProductImageContainer";

const ProductItemSmall = () => {
    return (
        <div className="bg-white rounded-lg shadow w-[216px] flex-shrink-0">
           <ProductImageContainer/>

            <div className="px-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                        <span className="text-red-500 font-semibold text-2xl">1049 ₽</span>
                        <span className="line-through font-normal text-sm">1050 ₽</span>
                    </div>


                    <div className="flex items-center justify-center space-x-1 font-semibold text-xl">
                        <span className="text-orange-400">★</span>
                        <span>4.8</span>
                    </div>
                </div>
                <p className="text-base text-gray-500 mt-1">Продано 5000+</p>
            </div>

        </div>
    );
};

export default ProductItemSmall;
