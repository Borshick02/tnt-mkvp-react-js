import './index.scss';

import { ReactSVG } from 'react-svg';

import ImgLink from 'assets/icons/img-link.svg';

const CardInfoLink = () => {
  return (
    <div>
      <div className="card-info-link">
        <div className="card-info-link__img">
          <ReactSVG src={ImgLink} />
        </div>
        <div className="card-info-link__desc">
          <div className="card-info-link__title">Новая система:</div>
          <div className="card-info-link__subtitle">СРТ ОПТИМУМ</div>
          <a href="" className="card-info-link__link">Подать идею</a>
        </div>
      </div>
      
    </div>
  );
};

export default CardInfoLink;