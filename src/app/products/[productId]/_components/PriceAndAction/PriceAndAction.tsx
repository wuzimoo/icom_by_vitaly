import QuantitySelector from "@/app/products/[productId]/_components/PriceAndAction/QuantitySelector";

interface BuyNowSectionProps {
    currentPrice: number;
    oldPrice: number;
    stock: number;
    onBuyNow: () => void;
    onIncrease: () => void;
    onDecrease: () => void;
    quantity: number;
}

const PriceAndAction: React.FC<BuyNowSectionProps> = ({
                                                          currentPrice,
                                                          oldPrice,
                                                          stock,
                                                          onBuyNow,
                                                          onIncrease,
                                                          onDecrease,
                                                          quantity
                                                      }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-xl space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-baseline space-x-4">
                    <div className="text-6xl font-semibold">
                        {currentPrice} ₽
                    </div>
                    <div className="text-3xl text-gray-400 line-through">
                        {oldPrice} ₽
                    </div>
                </div>

                <span className="text-gray-600 text-xl">
                    Осталось только:
                    <br/>
                    <span className="text-green-500">{stock} шт.</span>
                </span>

                <QuantitySelector
                    quantity={quantity}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                />
            </div>

            <button
                onClick={onBuyNow}
                className="w-full py-3 bg-red-500 text-white text-xl  font-semibold rounded-lg text-center"
            >
                Купить в один клик
            </button>

            <p className="text-gray-500 text-center text-sm">
                Продавец обычно отвечает в течении 1ч
            </p>
        </div>
    );
};

export default PriceAndAction;
