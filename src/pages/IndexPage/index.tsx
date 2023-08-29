import { SwiperSlide } from 'swiper/react';

import CardNews from 'components/CardNews';
import CardServices from 'components/CardServices';
import SliderHero from 'components/SliderHero';
import SliderAds from 'components/SliderAds';
import SliderAdsImg from 'components/SliderAdsImg';
import Slider from 'components/Slider';
import CardReward from 'components/CardReward';
import CardGradient from 'components/CardGradient';

import './index.scss';

export default function IndexPage() {
    return (
        <div className="home">
            <div className="home__left">
                <SliderHero />
            </div>
            <div className="home__left">
                <CardServices />
                <CardNews />
            </div>
            <div className="home__right">
                <CardReward />
                <CardGradient />
                <div className="home__ads">
                    <SliderAds />
                    <SliderAdsImg />
                </div>
            </div>
            <div className="home__right home__right--tablet">
                <Slider className="home__slider-tablet" allowTouchMove slidesPerView={2.5} spaceBetween={16} navigation={false} id="slider-adaptive">
                    <SwiperSlide>
                        <div className="home__right__slide">
                            <CardReward />
                            <CardGradient />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__right__slide">
                            <SliderAds />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home__right__slide">
                            <SliderAdsImg />
                        </div>
                    </SwiperSlide>
                </Slider>
            </div>
        </div>
    );
}
