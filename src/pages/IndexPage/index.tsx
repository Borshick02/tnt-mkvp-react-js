import { useState } from 'react';

import KisRbp from './pages/KisRbp';
import Launches from './pages/Launches';
import Logs from './pages/Logs';
import Monitoring from './pages/Monitoring';
import TechnicalInformation from './pages/TechnicalInformation';

import './index.scss';

const TabsContent = [
    {
        title: 'КИС РБП',
        number: null,
        component: KisRbp,
    },
    {
        title: 'Запуски',
        number: 2,
        component: Launches,
    },
    {
        title: 'Мониторинг',
        number: 5,
        component: Monitoring,
    },
    {
        title: 'Техническая информация',
        number: 3,
        component: TechnicalInformation,
    },
    {
        title: 'Логи',
        number: 7,
        component: Logs,
    },
];

export default function IndexPage() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const ActiveComp = TabsContent[activeTab]?.component || null;

    return (
        <div className="home">
            <div className="home__menu__container">
                <div className="home__menu">
                    <ul>
                        {TabsContent.map((item, key) => (
                            <li
                                key={key}
                                className={`home__menu__item ${key === activeTab && 'home__menu__item--active'}`}
                                onClick={() => setActiveTab(key)}
                            >
                                {item.title}
                                {item.number !== null && <span>{item.number}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <ActiveComp />
        </div>
    );
}
