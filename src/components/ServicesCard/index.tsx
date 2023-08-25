import React from 'react';
import './index.scss';

import { ReactSVG } from 'react-svg';

import OifIcon from '../../assets/icons/oif.svg';
import Kis from '../../assets/icons/kis.svg';
import WebTutor from '../../assets/icons/web-tutor.svg';
import Scud from '../../assets/icons/scud.svg';

const ServicesCard = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="services-card">
                <div className="services-card__icon">
                    <ReactSVG src={OifIcon} />
                </div>
                <h6 className="services-card__name">ОИФ</h6>
            </div>
            <div className="services-card">
                <div className="services-card__icon">
                    <ReactSVG src={Kis} />
                </div>
                <h6 className="services-card__name">КИС ЭХД</h6>
            </div>
            <div className="services-card">
                <div className="services-card__icon">
                    <ReactSVG src={WebTutor} />
                </div>
                <h6 className="services-card__name">WebTutor</h6>
            </div>
            <div className="services-card">
                <div className="services-card__icon">
                    <ReactSVG src={Scud} />
                </div>
                <h6 className="services-card__name">СЦУД</h6>
            </div>
        </div>
    );
};

export default ServicesCard;
