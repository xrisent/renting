import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import React, { useMemo } from 'react';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = React.memo(({ images }) => {
    const slides = useMemo(() => 
        images.map((image, index) => (
            <SwiperSlide
                key={index}
                className="bannerComponent__image"
                style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover"}}
            />
        )), [images]);

    return (
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
            {slides}
        </Swiper>
    );
});

Slider.displayName = 'Slider';

export default Slider;
