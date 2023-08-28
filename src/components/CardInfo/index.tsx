import './index.scss';

import { ReactSVG } from 'react-svg';

import Coat from 'assets/icons/coat.svg';

const CardInfoLink = () => {
  return (
    <div>
      <div className="card-info">
        <div className="card-info__img">
          <ReactSVG src={Coat} />
        </div>
        <div className="card-info__text">Награда <br /> ПАО «Транснефть» </div>
      </div>
      
    </div>
  );
};

export default CardInfoLink;