'use client'
import React from 'react';
import Container from "@/components/containers/Container";
import QuestionsAndAnswers from "@/app/faq/_components/questions-and-answers";

const tabs = ["Покупателю", "Продавцу"]

const Page = () => {
    const [tabIndex, setTabIndex] = React.useState(0)

    return (
        <Container className="py-8">
            <p className="text-[48px] font-medium color-[#191919]">Вопросы и ответы</p>
            <div className="rounded-2xl flex bg-[#F6F6F6] w-[604px] text-[20px] font-medium mt-5 mb-9">
                {
                    tabs.map((tab, index) =>
                        <div
                            className={`py-3 w-[50%] text-center cursor-pointer rounded-2xl  ${tabIndex == index ? 'bg-white' : ''}`}
                            onClick={() => setTabIndex(index)}
                        >
                            {tab}
                        </div>
                    )
                }
            </div>
            <QuestionsAndAnswers/>
        </Container>
    );
};

export default Page;