// UI Kit
// https://www.figma.com/file/a9nmr5CbQqNOoCchflDJxV/%D0%9C%D0%9A%D0%92%D0%9F-UI-%D0%9A%D0%98%D0%A2?type=design&node-id=3448%3A5912&mode=design&t=KyRMMe4E8AF6syqK-1

// Иконки
// https://www.figma.com/file/dXjrLWZXtCBZr9jnqJkOGq/%5BTNT%5D-Icon-pack?type=design&node-id=1%3A4302&mode=design&t=3DPoiFgu0ZCgifIO-1

// Макеты
// https://www.figma.com/file/wpjceM2GH3eXc6uKYQHn3k/Оркестратор-2.0?type=design&node-id=0-1&mode=design&t=qE78SJslnHZd5Dck-0

// Цветовая палитра
// https://www.figma.com/file/N3fcmglAoURnMDKuMohx0A/%5BTNT%5D-Color-Theme-(White%2BDark)?type=design&node-id=49-25203&mode=design&t=dlBT1Dyl4vYxtYUr-0

import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // https://reactrouter.com/en/main/start/concepts

import { Routes as RoutesList } from './config';
import { AuthProvider, RequireAuth } from './pages/Auth/helpers';

import { Utils } from 'tnt-uikit-reactjs';

import ErrorBoundary from './components/ErrorBoundary';
import PageWrapper from './components/PageWrapper';

import Error404 from './pages/Error404';
import Auth from './pages/Auth';
import UiKit from './pages/UiKit';
import IndexPage from './pages/IndexPage';
import BusinessProcesses from './pages/BusinessProcesses';
import Services from './pages/Services';
import Triggers from './pages/Triggers';
import Tasks from './pages/Tasks';
import Starts from './pages/Starts';
import WorksTuz from './pages/WorksTuz';
import Servers from './pages/Servers';
import RuntimeEnvironments from './pages/RuntimeEnvironments';
import Software from './pages/Software';
import Users from './pages/Users';

import 'tnt-uikit-reactjs/src/scss/main.scss';
import 'tnt-uikit-reactjs/dist/tnt-uikit-reactjs.cjs.development.css';

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

// не давать браузеру самому выставлять скролл при перезагрузке
if (window.history?.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
}

function App() {
    const { Modal, Notification } = Utils;

    return (
        <ErrorBoundary>
            <BrowserRouter basename="/">
                <AuthProvider>
                    <Routes>
                        <Route path={RoutesList.Auth.href} element={<Auth />} />

                        <Route element={<PageWrapper />}>
                            <Route
                                path={RoutesList.IndexPage.href}
                                element={
                                    <RequireAuth>
                                        <IndexPage />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.BusinessProcesses.href}
                                element={
                                    <RequireAuth>
                                        <BusinessProcesses />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.Services.href}
                                element={
                                    <RequireAuth>
                                        <Services />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.Triggers.href}
                                element={
                                    <RequireAuth>
                                        <Triggers />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.Tasks.href}
                                element={
                                    <RequireAuth>
                                        <Tasks />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.Starts.href}
                                element={
                                    <RequireAuth>
                                        <Starts />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.WorksTuz.href}
                                element={
                                    <RequireAuth>
                                        <WorksTuz />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.Servers.href}
                                element={
                                    <RequireAuth>
                                        <Servers />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.RuntimeEnvironments.href}
                                element={
                                    <RequireAuth>
                                        <RuntimeEnvironments />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.Software.href}
                                element={
                                    <RequireAuth>
                                        <Software />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={RoutesList.Users.href}
                                element={
                                    <RequireAuth>
                                        <Users />
                                    </RequireAuth>
                                }
                            />

                            <Route path={RoutesList.UiKit.href} element={<UiKit />} />
                            <Route path="*" element={<Error404 />} />
                        </Route>
                    </Routes>

                    <Modal />
                    <Notification />
                </AuthProvider>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
