import React from 'react';
import Image from "next/image";
import AppleCard from "../../../public/appleCard.png";
import classNames from "classnames";

interface ProductImageContainerProps {
    className?: string
}

const ProductImageContainer = (props: ProductImageContainerProps) => {
    const {className} = props

    return (
        <div className={classNames("flex bg-gray-200 py-9 px-6 justify-center mb-3 relative rounded-2xl", className)}>
            <Image src={AppleCard} alt="Apple Gift Card" className="rounded-md object-cover w-fit"/>
        </div>
    );
};

export default ProductImageContainer;
