import React from 'react';

interface ProductReviewItemProps {
    review: {
        date: string;
        rating: number;
        comment: string;
    };
}

const ReviewItem: React.FC<ProductReviewItemProps> = ({ review }) => {
    return (
        <div className=" py-4">
            <div className="flex justify-between">
                <span className="text-sm text-gray-500 font-normal">
                    Покупка: Apple Gift Card 1000руб регион РУ, Карты в ₽, 500 ₽
                </span>

                <div className="flex items-center justify-between text-right space-x-1">
                    <p className="text-sm text-gray-500">Вчера</p>

                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-black">★</span>
                        ))}
                    </div>
                </div>

            </div>

            <p className="text-gray-800 mt-2 font-normal text-base">
                Благодарю продавца, все условия сделки были соблюдены, аккаунты предоставил в секунду.
            </p>

        </div>
    );
};

export default ReviewItem;
