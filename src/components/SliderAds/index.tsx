import { SwiperSlide } from 'swiper/react';

import Slider from 'components/Slider';

import './index.scss';

const SliderAds = () => {
    return (
        <Slider id="slider-ads" className="slider-ads" title="Объявления">
            <SwiperSlide>
                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                    <li>
                        <div className="slider-ads__text">Телеграм-канал V летней спартакиады</div>
                        <div className="slider-ads__date">27.05</div>
                    </li>
                    <li>
                        <div className="slider-ads__text">Приглашаем посетить художественную экспозицию</div>
                        <div className="slider-ads__date">28.04</div>
                    </li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                    <li>
                        <div className="slider-ads__text">Корпоративная фотовыставка</div>
                        <div className="slider-ads__date">05.04</div>
                    </li>
                    <li>
                        <div className="slider-ads__text">Опубликован раздел портала "СРТ - ОПТИМУМ"</div>
                        <div className="slider-ads__date">24.03</div>
                    </li>
                </ul>
            </SwiperSlide>
        </Slider>
    );
};

export default SliderAds;
