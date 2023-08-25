import { Badge } from 'tnt-uikit-reactjs/src/components';
import { SettingsIcon, CaretDownMdIcon } from 'tnt-uikit-reactjs/src/icons';

import './index.scss';

interface Props {
    style?: React.CSSProperties;
}

const MenuUser = ({ style = {} }: Props) => {
    //const auth = useAuth();

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
                    <SettingsIcon />
                </div>
                <div className="menu-user__info">
                    {/*<span>{auth?.user?.fio}</span>*/}
                    <small></small>
                    <span>Иван Лавров</span>
                    <div className="menu-user__settings">
                        <CaretDownMdIcon />
                    </div>
                </div>
            </>
            {/*)}*/}
        </div>
    );
};

export default MenuUser;
