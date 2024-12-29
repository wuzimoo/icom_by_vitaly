import React from 'react';
import Image from "next/image";
import ProductItemSmall from "@/components/ProductItem/ProductItemSmall";
import FireIcon from "@/icons/FireIcon";

const HotSales = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-4">
                <FireIcon/>
                <h2 className="text-2xl font-normal">Горячие Скидки</h2>
            </div>

            <div className="flex space-x-4 overflow-x-auto">
                <ProductItemSmall/>
                <ProductItemSmall/>
                <ProductItemSmall/>
                <ProductItemSmall/>
            </div>
        </div>
    )
};

export default HotSales;
