import React from 'react';
import ProductContainer from "@/app/_components/Containers/ProductContainer";
import BaseButton from "@/components/buttons/baseButton";

const NewProductContainer = () => {
    return (
        <ProductContainer title="Новинки">
            <BaseButton title="Посмотреть все"/>
        </ProductContainer>
    );
};

export default NewProductContainer;
