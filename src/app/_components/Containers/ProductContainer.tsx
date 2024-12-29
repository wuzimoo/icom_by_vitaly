import React from 'react';
import ProductItem from "@/components/ProductItem/ProductItem";
import BaseProducts from "@/app/_components/FilterHeaders/BaseProducts";

interface ProductContainerProps {
    title: string
    children?: React.ReactNode
    className?: string
}

const ProductContainer = (props: ProductContainerProps) => {
    const {title,children,className} = props

    return (
        <div className={className}>
            <BaseProducts title={title} children={children}/>
            <div className="flex mt-8 gap-6 flex-wrap">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    );
};

export default ProductContainer;
