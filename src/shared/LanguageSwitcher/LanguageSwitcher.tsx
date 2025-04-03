import { useRouter } from "next/navigation";
import './LanguageSwitcher.scss'

export const LanguageSwitcher: React.FC<{}> = () => {
    const router = useRouter();

    const handleLocaleChange = (locale: string) => {
        router.push(`/${locale}`);
    };

    return (
        <div className="languageSwitcher">
            <select onChange={(e) => handleLocaleChange(e.target.value)} defaultValue="ru">
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        </div>
    );
};
