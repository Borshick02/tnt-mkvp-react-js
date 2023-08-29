import { Link } from 'react-router-dom';
import { Badge, DropDown } from 'tnt-uikit-reactjs/src/components';
import { SettingsIcon, CaretDownMdIcon } from 'tnt-uikit-reactjs/src/icons';
import avatar from '../../assets/images/avatar.png';
import { useLocation } from 'react-router-dom';

import './index.scss';

interface Props {
    style?: React.CSSProperties;
}

const MenuUser = ({ style = {} }: Props) => {
    //const auth = useAuth();
    const { pathname } = useLocation();

    return (
        <div className="menu-user" style={style}>
            {/*{!!auth?.isAuth() && (*/}
            <>
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
                            <span className="menu-user__content__item">Контент 1</span>
                            <span className="menu-user__content__item">Контент 2</span>
                            <Link to="/info" className="menu-user__content__item">
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
            </>
            {/*)}*/}
        </div>
    );
};

export default MenuUser;
