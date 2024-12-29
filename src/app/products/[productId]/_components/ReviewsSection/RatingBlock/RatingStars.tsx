interface StarsProps {
    stars: number;
    color: string;
}

const RatingStars = (props: StarsProps) => {
    const {stars, color} = props;

    return (
        <div className="flex items-center space-x-1 flex-row-reverse">
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`${
                        i < stars ? "text-" + color : "opacity-0"
                    }`}
                >
                  ★
                </span>
            ))}
        </div>
    );
};

export default RatingStars
