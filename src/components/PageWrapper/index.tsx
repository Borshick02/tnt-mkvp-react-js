import { Outlet } from 'react-router-dom';
import { Routes } from '../../config';
import { SearchMagnifyingGlassIcon } from 'tnt-uikit-reactjs/src/icons';
import { Divider } from 'tnt-uikit-reactjs/src/components';
import { useLocation } from 'react-router-dom';

import MenuNavigation from '../MenuNavigation';
import MenuUser from '../MenuUser';

import './index.scss';

export default function PageWrapper() {
    const { pathname } = useLocation();
    
    
    return (
        <div className="page-wrapper">
            <MenuNavigation Routes={Routes} />
            <div className="page-wrapper__content"
            style={{
                background: pathname === '/info' ? 'linear-gradient(90deg, #1d3968, #031c47) 0 -60rem no-repeat' : '',
            }}
            >
                <div className="page-wrapper__head">
                    <div className="page-wrapper__search">
                        <SearchMagnifyingGlassIcon className="page-wrapper__search__icon" />
                        <input
                            //onChange={(e) => {
                            //    if (e.target.value.length >= minSearchSize) {
                            //        onSearchChangeDebounced(e.target.value);
                            //    }
                            //}}
                            placeholder="Поиск"
                            type="text"
                        />
                        <Divider style={{ height: '75%' }} vertical />
                        <select>
                            <option value="1">По порталу</option>
                            <option value="2">По сайту</option>
                            <option value="3">По еще кому-то</option>
                        </select>
                    </div>
                    <MenuUser style={{ marginLeft: 'auto' }} />
                </div>
                <Outlet />
            </div>
        </div>
    );
}
