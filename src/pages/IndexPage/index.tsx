import './index.scss';

import CardNews from 'components/CardNews';
import ServicesCard from 'components/ServicesCard';
import Slider from 'components/Slider';
import CardInfo from 'components/CardInfo';
import CardInfoLink from 'components/CardInfoLink';
import SliderAds from 'components/SliderAds';
import SliderAdsImg from 'components/SliderAdsImg';

export default function IndexPage() {
    return (
        <div className="home">
            <div className="home__left">
                <Slider />
                <ServicesCard />
                <CardNews />
            </div>
            <div className="home__right">
                <CardInfo />
                <CardInfoLink />
                <SliderAds />
                <SliderAdsImg />
            </div>
        </div>
    );
}
