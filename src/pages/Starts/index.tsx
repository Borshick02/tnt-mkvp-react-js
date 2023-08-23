import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OneFilterType, TableActionType, TableColumnType, TableDataType } from 'tnt-uikit-reactjs/dist/components/TableView/types';
import { Components, Icons } from 'tnt-uikit-reactjs';


import './index.scss';


export default function Starts() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext();
    const { PlusIcon } = Icons;
    const { TableView, Badge, Button } = Components;


    const header: TableColumnType[] = [
        {
            id: 'id', // тут строго поля из data
            title: 'ID',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'process', // тут строго поля из data
            title: 'Процесс',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'robot', // тут строго поля из data
            title: 'Робот',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'server', // тут строго поля из data
            title: 'Сервер',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'status', // тут строго поля из data
            title: 'Cтатус',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'start', // тут строго поля из data
            title: 'Начало запуска',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'end', // тут строго поля из data
            title: 'Окончание запуска',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'trigger', // тут строго поля из data
            title: 'Триггер',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
    ];

    const data: TableDataType[] = [
        {
            id: '10',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Успех
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '9',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="error" large>
                        Ошибка
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '8',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="await" large>
                        Остановлен
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '7',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="work" large>
                        Запущен <PlusIcon />
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => <Button color="red">Остановить</Button>,
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '6',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Успех
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '5',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="error" large>
                        Ошибка
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '4',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="await" large>
                        Остановлен
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '3',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="work" large>
                        Запущен <PlusIcon />
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => <Button color="red">Остановить</Button>,
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '2',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Успех
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
        {
            id: '1',
            process: 'Процесс_01',
            robot: 'RBP-01PYTHON',
            server: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="error" large>
                        Ошибка
                    </Badge>
                </div>
            ),
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            trigger: 'Ежедневный в 09:00',
        },
    ];

    const actions: TableActionType[] = [
        {
            id: 'more',
            title: 'Подробнее',
        },
        {
            id: 'edit',
            title: 'Редактировать',
        },
        {
            id: 'delete',
            title: 'Удалить',
        },
    ];

    const actionsGroup: TableActionType[] = [
        {
            id: 'delete',
            title: 'Удалить',
        },
    ];

    const filters: OneFilterType[] = [
        {
            id: 'status',
            title: 'Статус',
            values: [
                {
                    title: 'описание 1',
                    count: 3,
                },
                {
                    title: 'описание 2',
                    count: 36,
                },
                {
                    title: 'описание 3',
                    count: 5,
                },
            ],
        },
        {
            id: 'process',
            title: 'Процесс',
            values: [
                {
                    title: 'описание 1',
                    count: 3,
                },
                {
                    title: 'описание 2',
                    count: 36,
                },
                {
                    title: 'описание 3',
                    count: 5,
                },
            ],
        },
        {
            id: 'robot',
            title: 'Робот',
            values: [
                {
                    title: 'описание 1',
                    count: 3,
                },
                {
                    title: 'описание 2',
                    count: 36,
                },
                {
                    title: 'описание 3',
                    count: 5,
                },
            ],
        },
        {
            id: 'server',
            title: 'Сервер',
            values: [
                {
                    title: 'описание 1',
                    count: 3,
                },
                {
                    title: 'описание 2',
                    count: 36,
                },
                {
                    title: 'описание 3',
                    count: 5,
                },
            ],
        },
    ];


    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Starts page');

    return (
        <div>
            <TableView
                status={''}
                minSearchSize={3}
                page={2}
                pageSize={3}
                filters={filters}
                onSearchChange={(val: any) => console.log('onSearchChange', val)}
                onSortChange={(val: any, direction: any) => console.log('onSortChange', val, direction)}
                onFilterChange={(filtersArray: any) => console.log('onFilterChange', filtersArray)}
                onPageChange={(page: any) => console.log('onPageChange', page)}
                onItemClickAction={(item: any, action: any) => console.log('onItemClickAction', item, action)}
                actionItems={actions}
                actionItemsGroup={actionsGroup}
                header={header}
                data={data}
            />
        </div>
    );
}
