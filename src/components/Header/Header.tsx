import { Logo } from "@/shared/Logo/Logo";
import './Header.scss'

export const Header: React.FC = () => {
    return <header>
        <div className="container">
            <div className="header__box">
                <Logo width={'120'}/>
                
                <ul>
                    <li>main</li>
                    <li>news</li>
                    <li>car</li>
                </ul>
            </div>
        </div>
    </header>;
};