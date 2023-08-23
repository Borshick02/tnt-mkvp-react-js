import { RequestDataApiType, ResponseDataApiType, UserType } from './Types';

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

// Загрузить таблицу из АПИ
export const getTableFromApi = <T>(url: string, data: RequestDataApiType): Promise<ResponseDataApiType<T>> => {
    return new Promise(async (resolve, reject) => {
        console.log(url, data);

        setTimeout(() => {
            resolve({
                info: {
                    minSearchSize: 3,
                    page: 1,
                    pageSize: 10,
                    filters: [
                        {
                            id: 'name',
                            title: 'Наименование сервиса',
                            values: [
                                {
                                    title: 'Название 1',
                                    count: 3,
                                },
                                {
                                    title: 'Название 2',
                                    count: 36,
                                },
                                {
                                    title: 'Название 3',
                                    count: 5,
                                },
                            ],
                        },
                        {
                            id: 'description',
                            title: 'Описание',
                            values: [
                                {
                                    title: 'description 1',
                                    count: 3,
                                },
                                {
                                    title: 'description 2',
                                    count: 36,
                                },
                                {
                                    title: 'description 3',
                                    count: 5,
                                },
                            ],
                        },
                    ],
                    headers: [
                        {
                            id: 'id', // тут строго поля из data
                            title: 'ID',
                            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
                        },
                        {
                            id: 'name', // тут строго поля из data
                            title: 'Наименование сервиса',
                            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
                        },
                        {
                            id: 'description', // тут строго поля из data
                            title: 'Описание',
                            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
                        },
                        {
                            id: 'git', // тут строго поля из data
                            title: 'Git URL',
                            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
                        },
                        {
                            id: 'responsible', // тут строго поля из data
                            title: 'Ответственный',
                            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
                        },
                    ],
                },
                data: [
                    // @ts-ignore
                    {
                        id: '10',
                        name: 'Отправка писем',
                        description: 'Освобождение ресурсов',
                        git: 'Письма',
                        responsible: 'Да',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '9',
                        name: 'Сохранение в БД',
                        description: 'Удаление временных файлов',
                        git: 'Программные процессы',
                        responsible: 'Да',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '8',
                        name: 'Вычисление среднего',
                        description: 'Подготовка к выполнению основной логики',
                        git: 'Программные процессы',
                        responsible: 'Да',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '7',
                        name: 'Поиск сотрудников',
                        description: 'Обновление промежуточных результатов',
                        git: 'Сотрудники',
                        responsible: 'Нет',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '6',
                        name: 'Генерация почты',
                        description: 'Проверка доступности необходимых ресурсов',
                        git: 'Сотрудники',
                        responsible: 'Да',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '5',
                        name: 'Отправка писем',
                        description: 'Чтение и обработка входных данных',
                        git: 'Письма',
                        responsible: 'Нет',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '4',
                        name: 'Создание в БД',
                        description: 'Подготовка к выполнению основной логики',
                        git: 'Программные процессы',
                        responsible: 'Да',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '3',
                        name: 'Вычисление среднего',
                        description: 'Обработка ошибок и исключительных ситуаций',
                        git: 'Программные процессы',
                        responsible: 'Да',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '2',
                        name: 'Поиск сотрудников',
                        description: 'Отправка уведомлений о завершении выполнения',
                        git: 'Сотрудники',
                        responsible: 'Да',
                        testNewField: 'testNewField text',
                    },
                    // @ts-ignore
                    {
                        id: '1',
                        name: 'Отправка писем',
                        description: 'Запись и сохранение выходных данных',
                        git: 'Сотрудники',
                        responsible: 'Нет',
                        testNewField: 'testNewField text',
                    },
                ],
            });
        }, 1000);
    });
};

// Уадлить запись из АПИ
export const delFromTableFromApi = (url: string, type: string, id: (string | number)[]): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        console.log(url, type, id);
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};
