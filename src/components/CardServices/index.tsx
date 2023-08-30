import { ReactComponent as OifIcon } from '../../assets/icons/oif.svg';
import { ReactComponent as Kis } from '../../assets/icons/kis.svg';
import { ReactComponent as WebTutor } from '../../assets/icons/web-tutor.svg';
import { ReactComponent as Scud } from '../../assets/icons/scud.svg';
import { SwiperSlide } from 'swiper/react';

import Grid from 'components/Grid';
import Slider from 'components/Slider';

import './index.scss';

const mockItems = [
    {
        Icon: OifIcon,
        name: 'ОИФ',
    },
    {
        Icon: Kis,
        name: 'КИС ЭХД',
    },
    {
        Icon: WebTutor,
        name: 'WebTutor',
    },
    {
        Icon: Scud,
        name: 'Скуд',
    },
];

const CardServices = () => {
    return (
        <div className="card-services">
            <div className="card-services__head">
                <h3 className="card-services__title">Сервисы</h3>
                <a href="/" className="card-services__link">
                    Смотреть все
                </a>
            </div>
            <Grid type="small" className="card-services__grid">
                {mockItems && mockItems.map(({ Icon, name }, key) => (
                    <div className="card-services__grid__item" key={key}>
                        <div className="card-services__icon">
                            <Icon />
                        </div>
                        <h6 className="card-services__name">{name}</h6>
                    </div>
                ))}
            </Grid>
            <Slider
                slidesPerView={1.3}
                spaceBetween={16}
                allowTouchMove
                navigation={false}
                id="slider-card-services--mobile"
                className="card-services__slider"
            >
                {mockItems.map(({ Icon, name }, key) => (
                    <SwiperSlide key={key}>
                        <div className="card-services__slider__item">
                            <div className="card-services__icon">
                                <Icon />
                            </div>
                            <h6 className="card-services__name">{name}</h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Slider>
        </div>
    );
};

export default CardServices;
