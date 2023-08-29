import './index.scss';

import img from '../../assets/images/acc.png'

import Grid from 'components/Grid';


const PersonalArea = () => {
    
    return (
        <div className="info">
            <div className="info__top">
                <div className="info__left">
                    <img src={img} alt="" className="info__img" />
                </div>
                <div className="info__right">
                <h1 className="info__title">Лавров Иван Иванович</h1>
                <div className="info__subtitle">Специалист по строительному контролю</div>
                </div>
            </div>
            <div className="info__bottom">
                <h5 className="info__subtitle-bottom">Основная информация</h5>
                <Grid type='half'>
                    <li className="info__item">
                        <span className="info__desc-left">Организация:</span>
                        <span className="info__desc-right">Организация:</span>
                    </li>
                    <li className="info__item">
                        <span className="info__desc-left">Email:</span>
                        <span className="info__desc-right">LavrovII@ak.transneft.ru</span>
                    </li>
                    <li className="info__item">
                        <span className="info__desc-left">Подразделение:</span>
                        <span className="info__desc-right">Подразделение:</span>
                    </li>
                    <li className="info__item">
                        <span className="info__desc-left">Телефон:</span>
                        <span className="info__desc-right">+7 (926) 354 - 17 - 88</span>
                    </li>
                </Grid>
            </div>
        </div>
    );
};

export default PersonalArea;
