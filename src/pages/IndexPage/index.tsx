import './index.scss';

import CardNews from 'components/CardNews';
import ServicesCard from 'components/ServicesCard';


export default function IndexPage() {

    return (
        <div className="home">
            <CardNews />
            <ServicesCard />
        </div>
    );
}
