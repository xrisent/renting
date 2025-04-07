'use client';

import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Banner.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';


interface Props {
    images: string[];
    page: string;
}

export const Banner: React.FC<Props> = (props) => {
    const t = useTranslations(props.page);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }

    return (
        <section id="bannerComponent">
            <div className="container">
                <div className="bannerComponent__box">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {props.images.map((image, index) => (
                            <SwiperSlide key={index} className="bannerComponent__image">
                                <Image src={image} width={1000} height={1000} alt='car photo'/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <h1>{t("name")}</h1>
                </div>
            </div>
        </section>
    );
};
