import './index.scss';

import CardNews from 'components/CardNews';
import ServicesCard from 'components/ServicesCard';
import Slider from 'components/Slider';


export default function IndexPage() {

    return (
        <div className="home">
            <Slider />
            <ServicesCard />
            <CardNews />
        </div>
    );
}
