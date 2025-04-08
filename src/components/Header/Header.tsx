"use client";

import { Logo } from "@/shared/Logo/Logo";
import { LanguageSwitcher } from "@/shared/LanguageSwitcher/LanguageSwitcher";
import { ContactInfo } from "@/shared/ContactInfo/ContactInfo";
import "./Header.scss";
import './Header.adaptive.scss';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="header__box">
                    <Logo width={"70px"} />
                    <div className="header__box-right">
                        <ContactInfo />
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
            <div className="header-bg"></div>
        </header>
    );
};

export default Header;
