interface DescriptionSectionProps {
    description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ description }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md h-full">
            <h2 className="text-lg font-semibold">Описание</h2>
            <p className="text-gray-700 text-sm mt-2">{description}</p>
        </div>
    );
};

export default DescriptionSection;
