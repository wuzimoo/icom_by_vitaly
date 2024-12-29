import {FC} from "react";

interface QuantitySelectorProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const QuantitySelector: FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="flex items-center justify-between w-[153px] h-[60px] rounded-full border border-gray-300 px-3 text-2xl">
            <button
                onClick={onDecrease}
                className="text-gray-500 hover:text-gray-700"
            >
                –
            </button>
            <span className="text-gray-700">{quantity}</span>
            <button
                onClick={onIncrease}
                className="text-gray-500 hover:text-gray-700"
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
