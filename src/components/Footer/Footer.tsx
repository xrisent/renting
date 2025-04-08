"use client"

import { Logo } from "@/shared/Logo/Logo";
import './Footer.scss';
import './Footer.adaptive.scss';

export const Footer: React.FC = () => {

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Скопировано: " + text);
        });
    };

    return <footer>
        <div className="container">
            <div className="footer__box">
                <Logo width='110'/>
                <a href="mailto:khagan.auto@gmail.com?subject=%D0%97%D0%B0%D0%BF%D1%80%D0%BE%D1%81&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5" onClick={() => copyToClipboard("khagan.auto@gmail.com")}>
                    Khagan.auto@gmail.com
                </a>
                <a href="tel:+996507844072" onClick={() => copyToClipboard("+996507844072")}>
                    +996 507 844 072
                </a>
            </div>
        </div>
    </footer>
};