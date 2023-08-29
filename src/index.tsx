// UI Kit
// https://www.figma.com/file/a9nmr5CbQqNOoCchflDJxV/%D0%9C%D0%9A%D0%92%D0%9F-UI-%D0%9A%D0%98%D0%A2?type=design&node-id=3448%3A5912&mode=design&t=KyRMMe4E8AF6syqK-1

// Иконки
// https://www.figma.com/file/dXjrLWZXtCBZr9jnqJkOGq/%5BTNT%5D-Icon-pack?type=design&node-id=1%3A4302&mode=design&t=3DPoiFgu0ZCgifIO-1

// Макеты
// https://www.figma.com/file/wpjceM2GH3eXc6uKYQHn3k/Оркестратор-2.0?type=design&node-id=0-1&mode=design&t=qE78SJslnHZd5Dck-0

// Цветовая палитра
// https://www.figma.com/file/N3fcmglAoURnMDKuMohx0A/%5BTNT%5D-Color-Theme-(White%2BDark)?type=design&node-id=49-25203&mode=design&t=dlBT1Dyl4vYxtYUr-0

// Адаптив
// https://www.figma.com/file/khk2GxwD753I4o0QGq7eFw/Adaptive-Design?type=design&node-id=162-22710&mode=design&t=ziLsmH2ux7mGDRUo-0

import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // https://reactrouter.com/en/main/start/concepts

import { Routes as RoutesList } from './config';
// import { AuthProvider, RequireAuth } from './pages/Auth/helpers';
import { Routes as RoutesType } from './config';


import { Modal, Notification } from 'tnt-uikit-reactjs/src/utils';

import ErrorBoundary from './components/ErrorBoundary';
import PageWrapper from './components/PageWrapper';

import Error404 from './pages/Error404';
// import Auth from './pages/Auth';
import UiKit from './pages/UiKit';
import IndexPage from './pages/IndexPage';
import MediaCenter from 'pages/MediaCenter';
import Employee from 'pages/Employee';
import EmployeeDirectory from 'pages/EmployeeDirectory';
import Kis from 'pages/Kis';
import Services from 'pages/Services';
import Subsystems from 'pages/Subsystems';
import TasksAndProjects from 'pages/TasksAndProjects';
import Support from 'pages/Support';
import Info from 'pages/Info';

import 'tnt-uikit-reactjs/src/scss/main.scss';
import './index.scss';

import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

// не давать браузеру самому выставлять скролл при перезагрузке
if (window.history?.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
}

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter basename="/">
                {/* <AuthProvider> */}
                <Routes>
                    {/* <Route path={RoutesList.Auth.href} element={<Auth />} /> */}
                    <Route element={<PageWrapper />}>
                        <Route path={RoutesList.IndexPage.href} element={<IndexPage />} />
                        <Route path={RoutesList.Employee.href} element={<Employee />} />
                        <Route path={RoutesList.EmployeeDirectory.href} element={<EmployeeDirectory />} />
                        <Route path={RoutesList.KIS.href} element={<Kis />} />
                        <Route path={RoutesList.MediaCenter.href} element={<MediaCenter />} />
                        <Route path={RoutesList.Services.href} element={<Services />} />
                        <Route path={RoutesList.Subsystems.href} element={<Subsystems />} />
                        <Route path={RoutesList.Support.href} element={<Support />} />
                        <Route path={RoutesList.TasksAndProjects.href} element={<TasksAndProjects />} />
                        {/* Do route const not in list? */}
                        <Route path={'/info'} element={<Info />} />

                        <Route path={RoutesList.UiKit.href} element={<UiKit />} />
                        <Route path="*" element={<Error404 />} />
                    </Route>
                </Routes>

                <Modal />
                <Notification />
                {/* </AuthProvider> */}
            </BrowserRouter>
        </ErrorBoundary>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
