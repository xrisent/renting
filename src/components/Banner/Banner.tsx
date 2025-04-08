'use client';

import { useTranslations } from 'next-intl';
import Slider from '@/shared/Slider/Slider';
import './Banner.scss';
import './Banner.adaptive.scss';
import React from 'react';

interface Props {
    images: string[];
    page: string;
}

export const Banner: React.FC<Props> = ({ images, page }) => {
    const t = useTranslations(page);

    return (
        <section id="bannerComponent">
            <div className="container">
                <div className="bannerComponent__box">
                    <Slider images={images} />
                    <h1>{t('name') ?? 'Default Name'}</h1>
                </div>
            </div>
        </section>
    );
};
