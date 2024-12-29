interface StarBarProps {
    stars: number;
    color: string;
    maxCount: number;
}

const RatingStarBar = (props: StarBarProps) => {
    const {stars, color, maxCount} = props;

    const width = (stars / maxCount) * 100;
    return (
        <div
            className={`h-2 rounded  bg-${color}`}
            style={{width: `${width==0 ? 6 : width}px`}}
        ></div>
    );
};

export default RatingStarBar
