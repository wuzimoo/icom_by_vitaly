// components/ReviewsSection.tsx
import ReviewItem from '../ReviewItem';
import RatingComponent from "@/app/products/[productId]/_components/ReviewsSection/RatingBlock/RatingBlock";
import CustomSelect from "@/components/selects/customSelect";
import React from "react";
import SortButton from "@/components/buttons/SortButton";

interface Review {
    date: string;
    rating: number;
    comment: string;
}

interface ReviewsSectionProps {
    reviews: Review[];
    averageRating: number;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({reviews, averageRating}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-6 ">
            <h2 className="text-2xl mb-8">Отзывы о товаре</h2>
            <RatingComponent/>
            <div className="mt-4">
                <div className="flex items-center justify-between mb-5 ">
                    <CustomSelect/>
                    <SortButton/>
                </div>
                {reviews.map((review, index) => (
                    <ReviewItem key={index} review={review}/>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;
