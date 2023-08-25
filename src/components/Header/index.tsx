import React from 'react';
import logo from '../../assets/images/logo.png';

import { SettingsIcon } from 'tnt-uikit-reactjs/src/icons';

import './index.scss';

interface Props {
    style?: React.CSSProperties;
}

const Header = ({ style = {} }: Props) => {
    return (
        <div className="header" style={style}>
            <img src={logo} alt="logo" />
            <SettingsIcon />
        </div>
    );
};

export default Header;
