"use client"

import { Logo } from "@/shared/Logo/Logo";
import './Footer.scss';
import './Footer.adaptive.scss';
import { ContactInfo } from "@/shared/ContactInfo/ContactInfo";

export const Footer: React.FC = () => {

    return <footer>
        <div className="container">
            <div className="footer__box">
                <Logo width='70px'/>
                <ContactInfo />
            </div>
        </div>
    </footer>
};