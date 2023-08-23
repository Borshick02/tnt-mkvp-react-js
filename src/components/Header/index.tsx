
import React from 'react';
import logo from 'tnt-uikit-reactjs/src/assets/images/logo-transneft.png';
import logox2 from 'tnt-uikit-reactjs/src/assets/images/logo-transneft-x2.png';

import './index.scss';

interface Props {
    large?: boolean;
    subtitle?: boolean;
    title?: boolean;
    style?: React.CSSProperties;
}

const Header = ({ large = false, subtitle = false, title = true, style = {} }: Props) => {
    return (
        <div className="header" style={style}>
            <img src={large ? logox2 : logo} alt="logo" />
            {title && <h3>Оркестратор 2.0</h3>}
            {subtitle && <span>Система управления программными работами</span>}
        </div>
    );
};

export default Header;
