import React from 'react';
import { ChevronLeftIcon } from 'tnt-uikit-reactjs/src/icons';
import { ChevronRightIcon } from 'tnt-uikit-reactjs/src/icons';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

import './index.scss';
import 'swiper/css';

interface Props {
    children: React.ReactNode;
    id: string;
    title?: string;
    NavButtons?: () => JSX.Element;
    className?: string;
}

const Slider = ({ children, title, id, NavButtons, className = '' }: Props) => {
    return (
        <div className={`slider ${className}`}>
            {title && (
                <h5 className="slider__title">
                    {title}
                    <span className="slider__arrow">
                        <ChevronRightIcon />
                    </span>
                </h5>
            )}
            <Swiper
                className="slider__swiper"
                modules={[Navigation]}
                direction="horizontal"
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    prevEl: `.slider__prev--${id}`,
                    nextEl: `.slider__next--${id}`,
                }}
            >
                {children}
            </Swiper>
            {NavButtons ? (
                <NavButtons />
            ) : (
                <div className="slider__counter">
                    <div className={`slider__prev--${id} slider__prev`}>
                        <ChevronLeftIcon />
                    </div>
                    <div className="slider__current">1</div>
                    <div>/</div>
                    <div className="slider__total">2</div>
                    <div className={`slider__next--${id} slider__next`}>
                        <ChevronRightIcon />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;
