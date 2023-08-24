import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../pages/Auth/helpers';
import { Divider, Icons } from 'tnt-uikit-reactjs';

import './index.scss';

interface Props {
    style?: React.CSSProperties;
}

const MenuUser = ({ style = {} }: Props) => {
    const auth = useAuth();
    let navigate = useNavigate();
    const { SettingsIcon, LogOutIcon } = Icons;


    return (
        <div className="menu-user" style={style}>
            {!!auth?.isAuth() && (
                <>
                    <div className="menu-user__info">
                        <span>{auth?.user?.fio}</span>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                auth?.signout();

                                navigate('/', { replace: true });
                            }}
                        >
                            <LogOutIcon />
                        </a>
                    </div>
                    <Divider
                        vertical
                        style={{
                            height: '50%',
                            margin: '0 0.5rem',
                        }}
                    />
                    <div className="menu-user__settings">
                        <SettingsIcon />
                    </div>
                </>
            )}
        </div>
    );
};

export default MenuUser;
