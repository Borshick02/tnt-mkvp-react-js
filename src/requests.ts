import { UserType } from './Types';

type AuthProthType = {
    login: string;
    pass: string;
};

const TEST_USER = {
    login: 'admin',
    pass: '123',
    bearer: 'bearerbearerbearerbearerbearer',
    fio: 'Tester Testerovich',
};

// ************************** Заглушки пока нет АПИ

// Восстановить авторизацию
export const restoreAuth = (bearer: string): Promise<UserType> => {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            if (bearer === TEST_USER.bearer) {
                resolve(TEST_USER);
            } else {
                reject();
            }
        }, 1000);
    });
};

// Запрос авторизации
export const authRequest = (props: AuthProthType): Promise<UserType> => {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            if (props.login === TEST_USER.login && `${props.pass}` === `${TEST_USER.pass}`) {
                resolve(TEST_USER);
            } else {
                reject(null);
            }
        }, 1000);

        // let auth = null;
        // try {
        // 	auth = await fetch('https://4543.ru/keys.php', {
        // 		method: "post",
        // 		body: JSON.stringify({
        // 			login: props.login,
        // 			pass: props.pass,
        // 		})
        // 	});

        // 	auth = await auth.json();
        // } catch (err) {
        // 	return reject(err);
        // }

        // if (!auth?.bearer) {
        // 	return reject('ERROR');
        // }

        // resolve(auth);
    });
};
