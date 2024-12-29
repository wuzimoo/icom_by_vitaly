import React from 'react';
import Image from "next/image";
import Fire from "../../public/fire-icon.svg";

const FireIcon = () => {
    return (
        <Image src={Fire} alt="Fire Icon" className="w-5 h-5"/>
    );
};

export default FireIcon;
