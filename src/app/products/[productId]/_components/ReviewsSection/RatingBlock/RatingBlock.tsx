import RatingStars from "@/app/products/[productId]/_components/ReviewsSection/RatingBlock/RatingStars";
import RatingStarBar from "@/app/products/[productId]/_components/ReviewsSection/RatingBlock/RatingStarBar";
import ReviewsHeader from "@/app/products/[productId]/_components/ReviewsSection/RatingBlock/RatingReviewsSection";

const RatingComponent = () => {
    const averageRating = 4.8;
    const ratings = [
        {stars: 5, count: 7, color: "red-500"},
        {stars: 4, count: 2, color: "red-400"},
        {stars: 3, count: 0, color: "red-300"},
        {stars: 2, count: 0, color: "gray-400"},
        {stars: 1, count: 0, color: "black"},
    ];
    const maxCount = Math.max(...ratings.map(r => r.count));
    const sumRatings = ratings.reduce((acc, rating) => acc + rating.count, 0);

    return (
        <div className="flex items-center justify-between border-b-2 border-gray-200 pb-5">
            <div className="flex items-center gap-8">
                <div
                    className="flex items-center justify-center size-32 rounded-full bg-red-500 text-white text-6xl font-bold">
                    {averageRating}
                </div>

                <div className="space-y-2">
                    {ratings.map((rating) => (
                        <div key={rating.stars} className="flex items-center space-x-2 ">
                            <RatingStars stars={rating.stars} color={rating.color}/>
                            <span className="font-semibold text-xs-">{rating.count}</span>

                            <RatingStarBar
                                stars={rating.count}
                                color={rating.color}
                                maxCount={maxCount}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ReviewsHeader reviews={sumRatings}/>
        </div>

    );
};

export default RatingComponent;
