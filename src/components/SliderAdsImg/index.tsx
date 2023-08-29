import { SwiperSlide } from 'swiper/react';
import handsUp from '../../assets/images/hands-up.png';

import Slider from 'components/Slider';

import './index.scss';

const SliderAdsImg = () => {
    return (
        <Slider id="slider-ads-img" className="slider-ads-img" title="Объявления">
            <SwiperSlide>
                <div className="slider-ads-img__slide">
                    <img src={handsUp} alt="Hands Up!" className="slider-ads-img__img" />
                    <p className="slider-ads-img__text">Какие волонтерские проекты вам наиболее интересны?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slider-ads-img__slide">
                    <img src={handsUp} alt="Hands Up!" className="slider-ads-img__img" />
                    <p className="slider-ads-img__text">Какие волонтерские проекты вам наиболее интересны?</p>
                </div>
            </SwiperSlide>
        </Slider>
    );
};

export default SliderAdsImg;
