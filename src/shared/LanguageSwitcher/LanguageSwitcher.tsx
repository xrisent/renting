import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import './LanguageSwitcher.scss';

export const LanguageSwitcher: React.FC<object> = () => {
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

    const handleLocaleChange = (newLocale: string) => {
        const currentPath = window.location.pathname.replace(`/${currentLocale}`, '');
        router.push(`/${newLocale}${currentPath}`);
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
