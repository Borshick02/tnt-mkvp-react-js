import { useLocation } from 'react-router-dom';
import { Routes } from 'config';

import './index.scss';

interface Props {
    className?: string;
    style?: React.CSSProperties;
}

const PageTitle = ({ className = '', style = {} }: Props) => {
    const { pathname } = useLocation();
    const title = Object.values(Routes).find((Route) => Route.href === pathname);

    return (
        <h2 className={`page-title ${className}`} style={style}>
            {title?.longname ? title?.longname : title?.longname ? title?.longname : title?.label}
        </h2>
    );
};

export default PageTitle;
