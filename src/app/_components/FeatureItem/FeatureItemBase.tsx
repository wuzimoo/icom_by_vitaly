import React from 'react';
import Image from "next/image";

interface FeatureItemBaseProps {
    title: string
    description: string
    iconSrc: any
    gradientColors: string[]
}

const FeatureItemBase = (props: FeatureItemBaseProps) => {
    const {title, description, iconSrc, gradientColors} = props
    return (
        <div
            className={`flex items-center p-6 rounded-xl shadow-lg text-white w-full h-[360px]`}
            style={{
                background: `linear-gradient(90deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`,
            }}
        >
            <div className="flex-shrink-0 mr-6">
                <Image src={iconSrc} alt={`${title} Icon`} />
            </div>
            <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-base mt-3">{description}</p>
            </div>
        </div>
    );
};

export default FeatureItemBase;
