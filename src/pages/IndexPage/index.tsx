import coat from 'assets/icons/coat.svg';
import imgLink from 'assets/icons/img-link.svg';

import CardNews from 'components/CardNews';
import CardServices from 'components/CardServices';
import Slider from 'components/Slider';
import SliderAds from 'components/SliderAds';
import SliderAdsImg from 'components/SliderAdsImg';
import Card from 'components/Card';

import './index.scss';

export default function IndexPage() {
    return (
        <div className="home">
            <div className="home__left">
                <Slider />
            </div>
            <div className="home__left">
                <CardServices />
                <CardNews />
            </div>
            <div className="home__right">
                <div className="home__info">
                    <Card inline>
                        <div className="home__card__img">
                            <img src={coat} alt="coat" />
                        </div>
                        <div className="home__card__text home__card__text--center">
                            <h3>Награда ПАО «Транснефть»</h3>
                        </div>
                    </Card>
                    <Card inline className="home__card__gradient">
                        <div className="home__card__img">
                            <img src={imgLink} alt="imgLink" />
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
