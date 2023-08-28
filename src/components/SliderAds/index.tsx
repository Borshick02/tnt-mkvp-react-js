// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './index.scss';
import 'swiper/css';

import { ChevronLeftIcon } from 'tnt-uikit-reactjs/src/icons';
import { ChevronRightIcon } from 'tnt-uikit-reactjs/src/icons';

import { Navigation } from 'swiper';

const SliderAds = () => {
    return (
        <div className="slider-ads">
            <h5 className="slider-ads__title">
                Объявления
                <span className="slider-ads__arrow">
                    <ChevronRightIcon />
                </span>
            </h5>
            <Swiper
                className="slider-ads__slider"
                modules={[Navigation]}
                direction="horizontal"
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: '.slider-ads__next',
                    prevEl: '.slider-ads__prev',
                }}
            >
                <SwiperSlide>
                    <div className="slider-ads__slide">
                        <ul className="slider-ads__list">
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-ads__slide">
                        <ul className="slider-ads__list">
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                            <li className="slider-ads__item">
                                <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                                <div className="slider-ads__date">27.04</div>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="slider-ads__counter">
                <div className="swiper-button-prev slider-ads__prev">
                    <ChevronLeftIcon />
                </div>
                <div className="slider-ads__current">1</div>
                <div>/</div>
                <div className="slider-ads__total">0</div>
                <div className="swiper-button-next slider-ads__next">
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

export default SliderAds;
