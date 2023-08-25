
import React from 'react';
import logo from '../../assets/icons/logo-transneft-fareast.svg';

import './index.scss';

interface Props {
    large?: boolean;
    subtitle?: boolean;
    title?: boolean;
    style?: React.CSSProperties;
}

const Header = ({ subtitle = false, title = true, style = {} }: Props) => {
    return (
        <div className="header" style={style}>
            <img src={logo} alt="logo" />
            {title && <h3>Оркестратор 2.0</h3>}
            {subtitle && <span>Система управления программными работами</span>}
        </div>
    );
};

export default Header;
