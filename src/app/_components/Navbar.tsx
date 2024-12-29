import React from 'react';
import Link from "next/link";

const navItems = [
    { name: 'Подарочные карты', href: '/gift-cards' },
    { name: 'Подписки', href: '/subscriptions' },
    { name: 'Аккаунты', href: '/accounts' },
    { name: 'Игры', href: '/games' },
    { name: 'Офисный софт', href: '/office-software' },
    { name: 'Скидки', href: '/discounts' },
];

const Navbar = () => {
    return (
        <div className="bg-white">
            <nav className="container mx-auto px-4 py-2 flex justify-center border-b border-gray-300">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex-1 text-center text-gray-700 hover:text-black py-2 border-b-2 border-transparent hover:border-black"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
