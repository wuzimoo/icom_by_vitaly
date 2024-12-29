import { FC } from 'react';
import FireIcon from "@/icons/FireIcon";

interface SaleInfoProps {
    label: string;
    daysLeft: string;
    discount: string;
}

const SaleInfo: FC<SaleInfoProps> = ({ label, daysLeft, discount }) => {
    return (
        <div className="flex items-center justify-between bg-white p-2 rounded-lg space-x-4">
            <div className="flex items-center font-semibold space-x-1">
                <FireIcon/>
                <span>{label}</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-200 rounded-md text-xl">
                <span className="px-2 py-1">{daysLeft}</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-md">{discount}</span>
            </div>
        </div>
    );
};

export default SaleInfo;
