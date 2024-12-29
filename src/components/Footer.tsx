import React from 'react';
import Link from "next/link";
import LogoIcon from "@/icons/Logo";

interface SectionItem {
    name: string
    href: string
}

interface Sections {
    name: string
    items: SectionItem[]
}

const sections: Sections[] = [
    {
        name: "Разделы",
        items: [
            {
                name: "Аккаунты",
                href: "/accounts"
            },
            {
                name: "Подарочные карты",
                href: "/shops"
            },
            {
                name: "Свой магазин",
                href: "/shops"
            },
            {
                name: "Продавцы месяца",
                href: "/shops"
            }
        ]
    },
    {
        name: "Поддержка",
        items:[
            {
                name: "Контакты",
                href: "/support"
            },
            {
                name: "Собственный магазина",
                href: "/support"
            },
            {
                name: "Покупка товара",
                href: "/support"
            },
            {
                name: "Вопросы и ответы",
                href: "/faq"
            }
        ]
    }
]

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="relative">
                        <LogoIcon className="absolute scale-150 left-[5%] -top-[3%]"/>
                    </div>
                    {
                        sections.map((section, index) => (
                            <div key={section.name}>
                                <h4 className="font-semibold text-lg mb-2">{section.name}</h4>
                                <ul className="space-y-1">
                                    {section.items.map((item, index) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className=" text-gray-500 font-normal text-base">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div
                    className="flex justify-between items-center text-sm mt-8 text-gray-500  border-gray-700 pt-4">
                    <div>
                        <span>© I Comission 2024</span>
                        <span className="mx-2">•</span>
                        <Link href="/privacy-policy" className="hover:text-white">
                            Политика конфиденциальности
                        </Link>
                    </div>
                    <div>
                        <a href="https://t.me/your_telegram_bot" className="hover:text-white" target="_blank"
                           rel="noopener noreferrer">
                            Чат-бот поддержка в Telegram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
;
