// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './index.scss';
import 'swiper/css';

import img from '../../assets/images/slider-img.png';

import { ChevronLeftIcon } from 'tnt-uikit-reactjs/src/icons';
import { ChevronRightIcon } from 'tnt-uikit-reactjs/src/icons';

import { Navigation } from 'swiper';

const Slider = () => {
    return (
        <div className="slider">
            <Swiper
                modules={[Navigation]}
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={50}
                navigation={{
                    nextEl: '.slider__next',
                    prevEl: '.slider__prev',
                }}
            >
                <div className="slider__wrap">
                    <SwiperSlide>
                        <div className="slider__content">
                            <div className="slider__left">
                                <div className="slider__desc">Не черномор</div>
                                <h5 className="slider__title">Дан старт корпоративной эстафете в честь юбилея ПАО «Транснефть»</h5>
                            </div>
                            <div className="slider__right">
                                <img src={img} alt="" className="slider__img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__content">
                            <div className="slider__left">
                                <div className="slider__desc">Не черномор</div>
                                <h5 className="slider__title">Дан старт корпоративной эстафете в честь юбилея ПАО «Транснефть»</h5>
                            </div>
                            <div className="slider__right">
                                <img src={img} alt="" className="slider__img" />
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
            <div className="slider__counter">
                <div className="swiper-button-prev slider__prev">
                    <ChevronLeftIcon />
                </div>
                <div className="slider__current">1</div>
                <div>/</div>
                <div className="slider__total">0</div>
                <div className="swiper-button-next slider__next">
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;
