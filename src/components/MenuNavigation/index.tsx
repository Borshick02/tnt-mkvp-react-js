import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Divider } from 'tnt-uikit-reactjs/src/components';
import Header from '../Header';
import { RoutesType } from '../../config';
import './index.scss';
import { HomeIcon } from 'tnt-uikit-reactjs/src/icons';

const MenuNavigation = ({ Routes }: { Routes: RoutesType }) => {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isSiteOpen, setIsSiteOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const openSite = () => {
            setIsSiteOpen(true);
        };

        checkIsMobile();
        openSite();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <div className={`menu-navigation ${isMenuOpen ? 'menu-navigation--open' : ''} ${isSiteOpen ? 'site-container--open' : ''}`}>
            {isMobile && (
                <div className={`menu-navigation__burger ${isMenuOpen ? 'menu-navigation__burger--open' : ''}`} onClick={handleMenuClick}>
                    <div className={`menu-navigation__burger-line ${isMenuOpen ? 'menu-navigation__burger-line--open' : ''}`}></div>
                    <div className={`menu-navigation__burger-line ${isMenuOpen ? 'menu-navigation__burger-line--open' : ''}`}></div>
                    <div className={`menu-navigation__burger-line ${isMenuOpen ? 'menu-navigation__burger-line--open' : ''}`}></div>
                </div>
            )}
            {isMenuOpen && <div className="menu-navigation__overlay" onClick={handleMenuClick}></div>}
            <div className={`menu-navigation__menu ${isMenuOpen ? 'menu-navigation__menu--open' : ''}`}>
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
                                        <div className="menu-navigation__item-img">
                                            <Route.Icon />
                                        </div>
                                    )}
                                    <span className="menu-navigation__item-label">{Route.label}</span>
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