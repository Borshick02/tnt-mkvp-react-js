import { SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'tnt-uikit-reactjs/src/icons';
import heroImage from '../../assets/images/hero-image.png';

import Slider from 'components/Slider';

import './index.scss';

const CustomNavigation = (id: string) => (
    <div className="slider-hero__counter">
        <div className={`slider__prev--${id} slider-hero__prev`}>
            <ChevronLeftIcon />
        </div>
        <div className="slider-hero__current">1</div>
        <div>/</div>
        <div className="slider-hero__total">2</div>
        <div className={`slider__next--${id} slider-hero__next`}>
            <ChevronRightIcon />
        </div>
    </div>
);

const SliderHero = () => {
    return (
        <div className="slider-hero">
            <Slider id="slider-hero" allowTouchMove CustomNavigation={() => CustomNavigation('slider-hero')}>
                <SwiperSlide>
                    <div className="slider-hero__content">
                        <div className="slider-hero__left">
                            <div className="slider-hero__desc">Не черномор</div>
                            <h5 className="slider-hero__title">Дан старт корпоративной эстафете в честь юбилея ПАО «Транснефть»</h5>
                        </div>
                        <div className="slider-hero__right">
                            <img src={heroImage} alt="Hero Slider" className="slider-hero__img" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-hero__content">
                        <div className="slider-hero__left">
                            <div className="slider-hero__desc">Не черномор</div>
                            <h5 className="slider-hero__title">Дан старт корпоративной эстафете в честь юбилея ПАО «Транснефть»</h5>
                        </div>
                        <div className="slider-hero__right">
                            <img src={heroImage} alt="" className="slider-hero__img" />
                        </div>
                    </div>
                </SwiperSlide>
            </Slider>
        </div>
    );
};

export default SliderHero;
