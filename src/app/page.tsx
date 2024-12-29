import React from "react";
import Container from "@/components/containers/Container";
import Navbar from "@/app/_components/Navbar";
import HotSales from "@/app/_components/HotSales";
import NewProductContainer from "@/app/_components/Containers/NewProductContainer";
import AllProductContainer from "@/app/_components/Containers/AllProductContainer";
import GuaranteeItem from "@/app/_components/FeatureItem/GuaranteeItem";
import SecurityItem from "@/app/_components/FeatureItem/SecurityItem";
import Banner from "@/app/_components/Banner";

export default function Home() {

    return (
        <>
            <Banner/>
            <Navbar/>
            <Container className="flex flex-col gap-6 mt-6">
                <NewProductContainer/>
                <HotSales/>
                <AllProductContainer/>
                <div className="flex space-x-4">
                    <GuaranteeItem/>
                    <SecurityItem/>
                </div>
            </Container>
        </>
    );
}
