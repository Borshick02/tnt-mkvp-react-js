import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Routes } from './../../config';
import { authRequest, restoreAuth } from '../../requests';
import { UserType } from '../../Types';
import { getCookie, setCookie } from 'tnt-uikit-reactjs/src/utils';

type AuthProviderType = {
    user: UserType | null;
    signin: (login: string, pass: string, remember: boolean, domen: string, success: () => void, error: (e: any) => void) => void;
    signout: (callback?: () => void) => void;
    checkAuth: (success: () => void, error: (e: any) => void) => void;
    isAuth: () => boolean;
};

export const AuthKey = 'AuthKey_1';

// создание контекста для прокидывания хелпера авторизации во все нужные места
export let AuthContext = React.createContext<null | AuthProviderType>(null);

// хук для получения юзера из контекста
export function useAuth() {
    return React.useContext(AuthContext);
}

// провайдер для оборачивания авторизационных компанент
export function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<null | UserType>(null);

    // восстановить авторизацию при загрузке страницы
    let checkAuth = (success: () => void, error: (e: any) => void): void => {
        let Bearer: string = getCookie(AuthKey, '') as string;

        if (!Bearer) {
            error(null);
            return;
        }

        restoreAuth(Bearer)
            .then((user: UserType) => {
                setUser(user);
                success();
            })
            .catch(error);
    };

    let signin = async (login: string, pass: string, remember: boolean, domen: string, success: () => void, error: (e: any) => void) => {
        authRequest({ login, pass })
            .then((user: UserType) => {
                setUser(user);

                if (remember) {
                    setCookie(AuthKey, user.bearer, 0);
                }

                success();
            })
            .catch(error);
    };

    let signout = (callback?: () => void) => {
        setUser(null);
        setCookie(AuthKey, '', 0);

        if (callback) {
            callback();
        }
    };

    let isAuth = () => !!user?.bearer;

    let value = { user, signin, signout, checkAuth, isAuth };

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
}

// Компанента для оборачивания страниц на которых обязательна авторизация
export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth?.isAuth()) {
        return <Navigate replace to={Routes.Auth.href} state={{ from: location }} />;
    }

    return children;
}
