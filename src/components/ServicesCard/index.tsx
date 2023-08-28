import React from 'react';
import './index.scss';

import { ReactSVG } from 'react-svg';

import OifIcon from '../../assets/icons/oif.svg';
import Kis from '../../assets/icons/kis.svg';
import WebTutor from '../../assets/icons/web-tutor.svg';
import Scud from '../../assets/icons/scud.svg';

import Grid from 'components/Grid';
import Card from 'components/Card';

const ServicesCard = () => {
    return (
        <div className='services-cards'>
            <div className="services-cards__head">
                <h3 className="services-cards__title">Сервисы</h3>
                <a href="#" className="services-cards__link">Смотреть все</a>
            </div>
            <Grid type='small'>
            <div className="services-cards__content">
                <div className="services-cards__icon">
                    <ReactSVG src={OifIcon} />
                </div>
                <h6 className="services-cards__name">ОИФ</h6>
            </div>
            <div className="services-cards__content">
                <div className="services-cards__icon">
                    <ReactSVG src={Kis} />
                </div>
                <h6 className="services-cards__name">КИС ЭХД</h6>
            </div>
            <div className="services-cards__content">
                <div className="services-cards__icon">
                    <ReactSVG src={WebTutor} />
                </div>
                <h6 className="services-cards__name">WebTutor</h6>
            </div>
            <div className="services-cards__content">
                <div className="services-cards__icon">
                    <ReactSVG src={Scud} />
                </div>
                <h6 className="services-cards__name">СЦУД</h6>
            </div>
            </Grid>
        </div>
    );
};

export default ServicesCard;
