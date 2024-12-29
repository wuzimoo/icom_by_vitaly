import BaseButton from "@/components/buttons/baseButton";

interface ReviewsHeaderProps {
    reviews: number;
}

const ReviewsHeader = (props: ReviewsHeaderProps) => {
    const {reviews} = props;

    return (
        <div className="flex items-center justify-between space-x-4">
            <span className="text-gray-500 text-sm font-normal">{reviews} отзыва за 2 месяца</span>

            <BaseButton title="Показать все" className="!text-black text-base"/>
        </div>
    );
};

export default ReviewsHeader;
