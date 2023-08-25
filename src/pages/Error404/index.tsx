import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button } from 'tnt-uikit-reactjs/src/components';

import './index.scss';

export default function Error404(): JSX.Element {
    return (
        <div className="error-404">
            <div className="error-404__content">
                <Header />
                <h2>Страница не найдена!</h2>
                <Button>
                    <Link to="/">На главную страницу</Link>
                </Button>
            </div>
            <Footer style={{ gridRow: '3 / 4' }} />
        </div>
    );
}
