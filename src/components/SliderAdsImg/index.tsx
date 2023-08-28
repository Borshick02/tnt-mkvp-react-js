// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './index.scss';
import 'swiper/css';

import img from '../../assets/images/slide-ads-img.png';

import { ChevronLeftIcon } from 'tnt-uikit-reactjs/src/icons';
import { ChevronRightIcon } from 'tnt-uikit-reactjs/src/icons';

import { Navigation } from 'swiper';

const SliderAdsImg = () => {
    return (
        <div className="slider-ads-img">
            <h5 className="slider-ads-img__title">
                Объявления
                <span className="slider-ads-img__arrow">
                    <ChevronRightIcon />
                </span>
            </h5>
            <Swiper
                className="slider-ads-img__slider"
                modules={[Navigation]}
                direction="horizontal"
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: '.slider-ads-img__next',
                    prevEl: '.slider-ads-img__prev',
                }}
            >
                <SwiperSlide>
                    <div className="slider-ads-img__slide">
                        <img src={img} alt="" className="slider-ads-img__img" />
                        <div className="slider-ads-img__desc">Какие волонтерские проекты вам наиболее интересны?</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-ads-img__slide">
                        <img src={img} alt="" className="slider-ads-img__img" />
                        <div className="slider-ads-img__desc">Какие волонтерские проекты вам наиболее интересны?</div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="slider-ads-img__counter">
                <div className="swiper-button-prev slider-ads-img__prev">
                    <ChevronLeftIcon />
                </div>
                <div className="slider-ads-img__current">1</div>
                <div>/</div>
                <div className="slider-ads-img__total">0</div>
                <div className="swiper-button-next slider-ads-img__next">
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

export default SliderAdsImg;
