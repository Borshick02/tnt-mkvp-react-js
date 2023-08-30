import { Link, useLocation } from 'react-router-dom';
import { Badge, Divider, DropDown } from 'tnt-uikit-reactjs/src/components';
import { SettingsIcon, CaretDownMdIcon, SearchMagnifyingGlassIcon } from 'tnt-uikit-reactjs/src/icons';
import { ReactComponent as BurgerMenuIcon } from '../../assets/icons/burger-menu.svg';
import { ReactComponent as RingTemproraryIcon } from '../../assets/icons/ring-temporary.svg';
import avatar from '../../assets/images/avatar.png';

import './index.scss';

interface Props {
    style?: React.CSSProperties;
    className?: string;
}

const MenuUser = ({ style = {}, className = '' }: Props) => {
    const { pathname } = useLocation();

    return (
        <>
            <div className={`menu-user ${className}`} style={style}>
                <div className="menu-user__notification">
                    <Badge
                        style={{
                            position: 'absolute',
                            top: '-1.75rem',
                            left: '-1.25rem',
                            color: 'white',
                            backgroundColor: 'red',
                            borderRadius: '2rem',
                            width: '2.5rem',
                            fontSize: '1.2rem',
                            padding: '0rem',
                        }}
                        status="error"
                    >
                        8
                    </Badge>
                    <SettingsIcon
                        style={{
                            color: pathname === '/info' ? 'var(--static-white)' : '',
                        }}
                    />
                </div>
                <DropDown
                    Component={({ close }) => (
                        <div className="menu-user__content">
                            <span onClick={() => close()} className="menu-user__content__item">
                                Контент 1
                            </span>
                            <span onClick={() => close()} className="menu-user__content__item">
                                Контент 2
                            </span>
                            <Link onClick={() => close()} to="/info" className="menu-user__content__item">
                                Ссылка на страницу основная информация
                            </Link>
                        </div>
                    )}
                    Button={() => (
                        <div className="menu-user__info">
                            <img src={avatar} alt="avatar" />
                            <span style={{ color: pathname === '/info' ? 'var(--static-white)' : '' }}>Иван Лавров</span>
                            <div className="menu-user__info__icon">
                                <CaretDownMdIcon style={{ color: pathname === '/info' ? 'var(--static-white)' : '' }} />
                            </div>
                        </div>
                    )}
                />
            </div>
            <div className={`menu-user menu-user--adaptive ${className}`} style={style}>
                <SearchMagnifyingGlassIcon className="menu-user--adaptive__item" style={{ fontSize: '3.5rem' }} />
                <div className="menu-user__notification menu-user--adaptive__item">
                    <Badge
                        style={{
                            position: 'absolute',
                            top: '.5rem',
                            right: '0rem',
                            color: 'white',
                            backgroundColor: 'red',
                            borderRadius: '2rem',
                            width: '2.5rem',
                            fontSize: '1.2rem',
                            padding: '0rem',
                        }}
                        status="error"
                    >
                        8
                    </Badge>
                    <RingTemproraryIcon />
                </div>
                <div className="menu-user--adaptive__item">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className=" menu-user--adaptive__divider menu-user--adaptive__item">
                    <Divider vertical style={{ height: '75%', width: '1px' }} />
                </div>
                <div className="menu-user--adaptive__item">
                    <BurgerMenuIcon />
                </div>
            </div>
        </>
    );
};

export default MenuUser;
