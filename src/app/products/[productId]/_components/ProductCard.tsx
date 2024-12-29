// components/ProductCard.tsx
import Image from 'next/image';
import ProductImageContainer from "@/components/ProductItem/ProductImageContainer";

interface ProductCardProps {
    imageSrc: any;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, price }) => {
    return (
       <ProductImageContainer className="bg-white py-16"/>
    );
};

export default ProductCard;
