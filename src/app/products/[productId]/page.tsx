"use client";
import React, {useState} from 'react';
import Container from "@/components/containers/Container";
import HeaderWithBreadcrumbs from "@/app/products/[productId]/_components/HeaderWithBreadcrumbs";
import ProductCard from "@/app/products/[productId]/_components/ProductCard";
import PriceAndAction from "@/app/products/[productId]/_components/PriceAndAction/PriceAndAction";
import ConfigurationSection from "@/app/products/[productId]/_components/ConfigurationSection/ConfigurationSection";
import DescriptionSection from "@/app/products/[productId]/_components/DescriptionSection";
import ReviewsSection from "@/app/products/[productId]/_components/ReviewsSection/ReviewSection";
import AppleCard from "../../../../public/appleCard.png";
import SaleInfo from "@/app/products/[productId]/_components/SaleInfo";
import {
    ConfigurationButtonSectionItem
} from "@/app/products/[productId]/_components/ConfigurationSection/ConfigurationButtonSection";
import ProductContainer from "@/app/_components/Containers/ProductContainer";
import BaseButton from "@/components/buttons/baseButton";
import {useAppDispatch} from "@/store/store";
import {showModal} from "@/components/modals/store/modal.store";
import BuyInOneClickModal from "@/app/products/[productId]/_modals/BuyInOneClick.modal";

const Page = () => {
    const dispatch = useAppDispatch()
    const product = {
        title: 'Apple Gift Card 1000руб регион РУ',
        imageSrc: AppleCard,
        currentPrice: '1050 ₽',
        oldPrice: '1490 ₽',
        stock: 212,
        description: 'Описание товара...',
        currencies: ['₽', '$', '₮'],
        values: ['500 ₽', '1000 ₽', '1500 ₽'],
        reviews: [
            { date: 'Вчера', rating: 5, comment: 'Отличный товар!' },
            { date: '12.05.2024', rating: 4, comment: 'Хорошо, но могло быть лучше.' }
        ],
        averageRating: 4.8,
        saleInfo: {
            label: 'Распродажа!',
            daysLeft: '4 дня до конца',
            discount: '-30%',
        }
    };

    const [quantity, setQuantity] = useState(1);

    const handleBuyNow = async() => {
        dispatch(showModal(<BuyInOneClickModal/>))
    };

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const valueItems:ConfigurationButtonSectionItem[]=product.values.map((value)=>({name:value,value}));
    const currencyItems:ConfigurationButtonSectionItem[]=product.currencies.map((currency)=>({name:currency,value:currency}));
    return (
        <>
            <Container >
                <HeaderWithBreadcrumbs title={product.title} breadcrumbs={['Главная', 'Подaронные карты', 'Apple']} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <ProductCard imageSrc={product.imageSrc} price={product.currentPrice} />

                    <div className="space-y-4 row-span-2">
                        <SaleInfo
                            label={product.saleInfo.label}
                            daysLeft={product.saleInfo.daysLeft}
                            discount={product.saleInfo.discount}
                        />
                        <PriceAndAction
                            currentPrice={1050}
                            oldPrice={1490}
                            stock={212}
                            onBuyNow={handleBuyNow}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={quantity}
                        />
                        <ConfigurationSection
                            currencies={currencyItems}
                            values={valueItems}
                            selectedCurrency={product.currencies[0]}
                            selectedNominal={product.values[0]}
                            onCurrencySelect={(currency) => console.log(currency)}
                            onValueSelect={(value) => console.log(value)}
                        />
                    </div>
                    <DescriptionSection description={product.description} />
                </div>


                <ReviewsSection reviews={product.reviews} averageRating={product.averageRating} />
                <ProductContainer title="Похожие предложения" className="mt-20"/>
            </Container>
        </>
    );
};

export default Page;
