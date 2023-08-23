import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes } from '../../config';
import { LoadStatusType } from 'tnt-uikit-reactjs/dist/Types';
import { useAuth } from './helpers';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Components, Utils } from 'tnt-uikit-reactjs';

import './index.scss';

type ValidateType = {
    login?: string | null; // ошибка логина
    pass?: string | null; // ошибка пароля
    domen?: string | null; // домен подключения
    msg?: string | null; // общий текст ошибки
};

export default function Auth() {
    const [status, setStatus] = useState<LoadStatusType>('load');
    const [validated, setValidated] = useState<ValidateType | null>(null);
    const { Select, Divider, Button, Input, FullScrenLoad, Form } = Components;
    const { isValid } = Utils;

    let auth = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    let from: string = location.state?.from?.pathname || Routes.IndexPage.href;

    useEffect(() => {
        auth?.checkAuth(
            () => {
                navigate(from, { replace: true });
                setStatus('');
            },
            () => {
                setStatus('');
            }
        );
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        event.stopPropagation();

        const formData = new FormData(event.currentTarget);
        const login = formData.get('login') + ''; // to string
        const pass = formData.get('password') + ''; // to string
        const domen = formData.get('domen') + ''; // to string

        const isValidState = isValid(
            {
                login,
                pass,
                domen,
            },
            {
                login: {
                    message: 'Укажите логин',
                    required: true,
                },
                pass: {
                    message: 'Укажите пароль',
                    required: true,
                },
                domen: {
                    message: 'Выберите домен',
                    required: true,
                },
            }
        );

        setValidated(isValidState.state as ValidateType);

        if (!isValidState.valid) {
            return;
        }

        setStatus('load');

        auth?.signin(
            login,
            pass,
            true,
            domen,
            () => {
                navigate(from, { replace: true });
                setStatus('');
                setValidated(null);
            },
            () => {
                setValidated({ msg: 'Проверьте логин и пароль' });
                setStatus('');
            }
        );
    };

    return (
        <div className="auth">
            {status === 'load' && <FullScrenLoad />}

            <Header
                subtitle
                style={{
                    marginTop: 'auto',
                    marginBottom: '5rem',
                }}
            />

            <Form onSubmit={handleSubmit} title="Добро пожаловать!">
                {!!validated?.msg && <span className="auth__error">{validated.msg}</span>}

                {/* <Select label="Домен" id="domen" name="domen" options={listOfAuthDomains} invalid={!!validated?.domen} /> */}

                <Input label="Логин" id="login" name="login" invalid={!!validated?.login} />

                <Input label="Пароль" id="password" type="password" name="password" invalid={!!validated?.pass} />

                <Divider />
                <Button>Войти</Button>
            </Form>

            <Footer />
        </div>
    );
}
