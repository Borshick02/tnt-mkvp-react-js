import { Link, useLocation } from 'react-router-dom';
import { Divider } from 'tnt-uikit-reactjs/src/components';
import { RoutesType } from '../../config';

import Header from '../Header';

import './index.scss';

interface Props {
    Routes: RoutesType;
}

const MenuNavigation = ({ Routes }: Props) => {
    const { pathname } = useLocation();

    return (
        <div className="menu-navigation__container">
            <div className="menu-navigation">
                <Header style={{ margin: '2rem 0' }} />
                {Object.keys(Routes).map((RouteKey) => {
                    const Route = Routes[RouteKey];
                    if (Route.hide) return null;

                    return (
                        <div key={Route.href}>
                            <div className="menu-navigation__group">
                                <Link
                                    className={`menu-navigation__item ${Route.href === pathname ? 'menu-navigation__item--active' : ''}`}
                                    to={Route.href}
                                    style={{
                                        backgroundColor: !!Route.background ? 'var(--status-blue-surface)' : '',
                                        margin: !!Route.background ? '0 0 .4rem' : '',
                                        marginTop: !!Route.marginTop ? '26rem' : '',
                                    }}
                                >
                                    {!!Route.Icon && (
                                        <div className="menu-navigation__item__img">
                                            <Route.Icon />
                                        </div>
                                    )}
                                    <span className="menu-navigation__item__label">{Route.label}</span>
                                </Link>
                            </div>
                            {!!Route.divider && <Divider style={{ width: '22.5rem' }} />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuNavigation;
