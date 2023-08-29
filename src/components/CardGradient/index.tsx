import newSystem from 'assets/images/new-system.png';

import Card from 'components/Card';

import './index.scss';

const CardGradient = () => {
    return (
        <Card inline className="card-gradient card-gradient--gradient">
            <div className="card-gradient__img">
                <img src={newSystem} alt="New System" />
            </div>
            <div className="card-gradient__text">
                <h3>
                    Новая система: <br /> <span>СРТ ОПТИМУМ</span>
                </h3>
                <a href="/">Подать идею</a>
            </div>
        </Card>
    );
};

export default CardGradient;
