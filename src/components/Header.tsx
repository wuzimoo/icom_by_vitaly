import React from 'react';
import Container from "./containers/Container";
import Image from "next/image";
import TelegramIcon from "../../public/telegram-icon.svg";
import LogoIcon from "@/icons/Logo";


const Header = () => {
    return (
        <div className="w-screen bg-white py-6">
            <Container className="flex justify-between items-center">
                <LogoIcon/>
                <Image src={TelegramIcon} alt='Telegram icon'/>
            </Container>
        </div>
    );
};

export default Header;
