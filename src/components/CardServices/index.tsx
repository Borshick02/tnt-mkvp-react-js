import './index.scss';

import { ReactComponent as OifIcon } from '../../assets/icons/oif.svg';
import { ReactComponent as Kis } from '../../assets/icons/kis.svg';
import { ReactComponent as WebTutor } from '../../assets/icons/web-tutor.svg';
import { ReactComponent as Scud } from '../../assets/icons/scud.svg';

import Grid from 'components/Grid';

const CardServices = () => {
    return (
        <div className="card-services">
            <div className="card-services__head">
                <h3 className="card-services__title">Сервисы</h3>
                <a href="/" className="card-services__link">
                    Смотреть все
                </a>
            </div>
            <Grid type="small">
                <div className="card-services__content">
                    <div className="card-services__icon">
                        <OifIcon />
                    </div>
                    <h6 className="card-services__name">ОИФ</h6>
                </div>
                <div className="card-services__content">
                    <div className="card-services__icon">
                        <Kis />
                    </div>
                    <h6 className="card-services__name">КИС ЭХД</h6>
                </div>
                <div className="card-services__content">
                    <div className="card-services__icon">
                        <WebTutor />
                    </div>
                    <h6 className="card-services__name">WebTutor</h6>
                </div>
                <div className="card-services__content">
                    <div className="card-services__icon">
                        <Scud />
                    </div>
                    <h6 className="card-services__name">СЦУД</h6>
                </div>
            </Grid>
        </div>
    );
};

export default CardServices;
