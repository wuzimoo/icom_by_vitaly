import React from 'react';
import shieldIcon from "../../../../public/shield.png";
import FeatureItemBase from "@/app/_components/FeatureItem/FeatureItemBase";

const GuaranteeItem = () => {
    return (
        <FeatureItemBase
            iconSrc={shieldIcon}
            title="Гарантия"
            description="IComission - Оформите подарочную карту Apple на 1000 рублей (либо же 10 $ или 5000 ₸) для пополнения App Store & iTunes. Не получил товар? - Иди наужи!"
            gradientColors={["#3C4737","#417035"]}
        />
    );
};

export default GuaranteeItem;
