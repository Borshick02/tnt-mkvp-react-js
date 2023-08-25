import './index.scss';

import img from '../../assets/images/slider-img.png';

import { ChevronLeftIcon } from 'tnt-uikit-reactjs/src/icons';
import { ChevronRightIcon } from 'tnt-uikit-reactjs/src/icons';

const Slider = () => {
    return (
        <div>
            <div className="slider">
                <div className="slider__wrap">
                    <div className="slider__content">
                        <div className="slider__left">
                            <div className="slider__desc">Не черномор</div>
                            <h5 className="slider__title">Дан старт корпоративной эстафете в честь юбилея ПАО «Транснефть»</h5>
                        </div>
                        <div className="slider__right">
                            <img src={img} alt="" className="slider__img" />
                        </div>
                    </div>
                </div>
                <div className="slider__counter">
                    <div className="swiper-button-prev slider__prev"><ChevronLeftIcon /></div>
                    <div className="slider__current">1</div>
                    <div>/</div>
                    <div className="slider__total">0</div>
                    <div className="swiper-button-next slider__next"><ChevronRightIcon /></div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
