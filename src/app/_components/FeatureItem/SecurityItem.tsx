import React from 'react';
import lockIcon from "../../../../public/lock.png";
import FeatureItemBase from "@/app/_components/FeatureItem/FeatureItemBase";

const SecurityItem = () => {
    return (
        <FeatureItemBase
            iconSrc={lockIcon}
            title="Безопасность"
            description="IComission - Оформите подарочную карту Apple на 1000 рублей (либо же 10 $ или 5000 ₸) для пополнения App Store & iTunes. Активация в любом регионе."
            gradientColors={["#37374E","#46549A"]}
        />
    );
};

export default SecurityItem;
