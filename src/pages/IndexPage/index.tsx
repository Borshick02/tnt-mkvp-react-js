import reward from 'assets/images/reward.png';
import newSystem from 'assets/images/new-system.png';

import CardNews from 'components/CardNews';
import CardServices from 'components/CardServices';
import SliderHero from 'components/SliderHero';
import SliderAds from 'components/SliderAds';
import SliderAdsImg from 'components/SliderAdsImg';
import Card from 'components/Card';

import './index.scss';

export default function IndexPage() {
    return (
        <div className="home">
            <div className="home__left">
                <SliderHero />
            </div>
            <div className="home__left">
                <CardServices />
                <CardNews />
            </div>
            <div className="home__right">
                <div className="home__info">
                    <Card inline className="home__card">
                        <div className="home__card__img">
                            <img src={reward} alt="Reward" />
                        </div>
                        <div className="home__card__text home__card__text--center">
                            <h3>Награда ПАО «Транснефть»</h3>
                        </div>
                    </Card>
                    <Card inline className="home__card home__card--gradient">
                        <div className="home__card__img">
                            <img src={newSystem} alt="New System" />
                        </div>
                        <div className="home__card__text">
                            <h3>
                                Новая система: <br /> <span>СРТ ОПТИМУМ</span>
                            </h3>
                            <a href="/">Подать идею</a>
                        </div>
                    </Card>
                </div>
                <div className="home__ads">
                    <SliderAds />
                    <SliderAdsImg />
                </div>
            </div>
        </div>
    );
}
