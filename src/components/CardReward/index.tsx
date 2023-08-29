import reward from 'assets/images/reward.png';

import Card from 'components/Card';

import './index.scss';

const CardReward = () => {
    return (
        <Card inline className="card-reward">
            <div className="card-reward__img">
                <img src={reward} alt="Reward" />
            </div>
            <div className="card-reward__text card-reward__text--center">
                <h3>Награда ПАО «Транснефть»</h3>
            </div>
        </Card>
    );
};

export default CardReward;
