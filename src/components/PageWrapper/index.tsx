import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Routes } from '../../config';
import { Components, Icons } from 'tnt-uikit-reactjs';
import MenuNavigation from '../MenuNavigation';
import MenuUser from '../MenuUser';

import './index.scss';

export default function PageWrapper() {
    const [headerButton, setHeaderButton] = useState<null | ((e: any) => void)>(null);
    const { pathname } = useLocation();
    const title = Object.values(Routes).find((Route) => Route.href === pathname);
    const { Button } = Components;
    const { PlusIcon } = Icons;
    // const [RoutesList, SetRoutesList] = useState(Routes);

    return (
        <div className="page-wrapper">
            <MenuNavigation Routes={Routes} />
            <div className="page-wrapper__content">
                <div className="page-wrapper__head">
                    <h2>{title?.longname ? title?.longname : title?.longname ? title?.longname : title?.label}</h2>
                    {!!headerButton && (
                        <Button style={{ marginLeft: '2rem' }} secondary onClick={(e) => headerButton(e)}>
                            <PlusIcon /> Добавить
                        </Button>
                    )}
                    <MenuUser style={{ marginLeft: 'auto' }} />
                </div>
                <Outlet context={setHeaderButton} />
            </div>
        </div>
    );
}
