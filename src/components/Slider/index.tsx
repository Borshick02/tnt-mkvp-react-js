import './index.scss';

import img from '../../assets/images/slider-img.png';

const Slider = () => {
  return (
    <div>
      <div className="slider">
        <div className="slider__wrap">
          <div className="slider__content">
            <div className="slider__left">
              <div className="slider__desc">Не черномор</div>
              <div className="slider__title">Дан старт корпоративной эстафете в честь юбилея ПАО «Транснефть»</div>
            </div>
            <div className="slider__right">
              <img src={img} alt="" className="slider__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;