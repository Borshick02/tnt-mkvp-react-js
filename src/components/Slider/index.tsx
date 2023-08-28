// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderPhoto from '../../assets/images/slider-img.png';

// Import Swiper styles
import 'swiper/css';
import './index.scss';

const Slider = () => {
    return (
        <div className="slider">
            <Swiper spaceBetween={30} slidesPerView={2} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className="slider__item">
                    <img src={sliderPhoto} alt="Slider" />
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <img src={sliderPhoto} alt="Slider" />
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <img src={sliderPhoto} alt="Slider" />
                </SwiperSlide>
                <SwiperSlide className="slider__item">
                    <img src={sliderPhoto} alt="Slider" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
