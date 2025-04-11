import React from "react";

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Скопировано: ${text}`);
    });
};

export const ContactInfo: React.FC<object> = () => (
    <>
        <a
            href={`mailto:khagan.auto@gmail.com?subject=%D0%97%D0%B0%D0%BF%D1%80%D0%BE%D1%81&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5`}
            onClick={() => copyToClipboard('khagan.auto@gmail.com')}
        >
            khagan.auto@gmail.com
        </a>
        <a href={`tel:+996507844072`} onClick={() => copyToClipboard('+996507844072')}>
            +996507844072
        </a>
    </>
);
