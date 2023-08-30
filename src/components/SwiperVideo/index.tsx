import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './index.scss';

import img from '../../assets/images/swiper-video.png';

// import { ChevronLeftIcon } from 'tnt-uikit-reactjs/src/icons';
// import { ChevronRightIcon } from 'tnt-uikit-reactjs/src/icons';

import { Navigation, Thumbs, FreeMode } from 'swiper';

import { useState } from 'react';

const SwiperVideo = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div>
            click
            <div className="swiper-video">
                <div className="swiper-video__container">
                    <Swiper
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide">
                            <img alt="" className="swiper-video__img" src={img} />
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-video__title">Омский государственный академический театр драмы.mp4</div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={0}
                        slidesPerView={10}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper-video__thumbs"
                    >
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-video__slide-thumbs">
                            <div className="swiper-video__img-wrap">
                                <img alt="" className="swiper-video__img-thumbs" src={img} />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SwiperVideo;
