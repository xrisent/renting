import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import './LanguageSwitcher.scss';

export const LanguageSwitcher: React.FC<{}> = () => {
    const router = useRouter();
    const { locale } = useParams();
    const [currentLocale, setCurrentLocale] = useState<string>("ru");

    useEffect(() => {
        if (typeof locale === 'string') {
            setCurrentLocale(locale); 
        } else if (Array.isArray(locale)) {
            setCurrentLocale(locale[0]); 
        }
    }, [locale]);

    const handleLocaleChange = (locale: string) => {
        router.push(`/${locale}`);
    };

    return (
        <div className="languageSwitcher">
            <select
                onChange={(e) => handleLocaleChange(e.target.value)}
                value={currentLocale}
            >
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        </div>
    );
};
