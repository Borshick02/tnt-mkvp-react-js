import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OneFilterType, TableActionType, TableColumnType, TableDataType } from 'tnt-uikit-reactjs/dist/components/TableView/types';
import { Components, Icons } from 'tnt-uikit-reactjs';


import './index.scss';

export default function Tasks() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext();
    const { PlusIcon } = Icons;
    const { TableView, Badge, Popup } = Components;



    const header: TableColumnType[] = [
        {
            id: 'id', // тут строго поля из data
            title: 'ID',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'service', // тут строго поля из data
            title: 'Cервис',
            hasSort: true, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'start', // тут строго поля из data
            title: 'Начало',
            hasSort: true, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'end', // тут строго поля из data
            title: 'Завершение',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'status', // тут строго поля из data
            title: 'Cтатус',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'time', // тут строго поля из data
            title: 'Время статуса',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'duration', // тут строго поля из data
            title: 'Длительность',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
    ];

    const data: TableDataType[] = [
        {
            id: '10',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Успех
                    </Badge>
                </div>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
        },
        {
            id: '9',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <Popup text="Системная" subtext="Бесконечный цикл">
                    <div className="page__badge">
                        <Badge status="error" large>
                            Ошибка <PlusIcon />
                        </Badge>
                    </div>
                </Popup>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
        },
        {
            id: '8',
            service: 'Сервис_01',
            start: () => {
                const date: any = null;
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = null;
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <div className="page__badge">
                    <Badge status="await" large>
                        В ожидании
                    </Badge>
                </div>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '',
        },
        {
            id: '7',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = null;
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <div className="page__badge">
                    <Badge status="work" large>
                        В работе
                    </Badge>
                </div>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
        },
        {
            id: '6',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Успех
                    </Badge>
                </div>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
        },
        {
            id: '5',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <Popup text="Системная" subtext="Бесконечный цикл">
                    <div className="page__badge">
                        <Badge status="error" large>
                            Ошибка <PlusIcon />
                        </Badge>
                    </div>
                </Popup>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
        },
        {
            id: '4',
            service: 'Сервис_01',
            start: () => {
                const date: any = null;
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = null;
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <div className="page__badge">
                    <Badge status="await" large>
                        В ожидании
                    </Badge>
                </div>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '',
        },
        {
            id: '3',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = null;
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <div className="page__badge">
                    <Badge status="work" large>
                        В работе
                    </Badge>
                </div>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
        },
        {
            id: '2',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Успех
                    </Badge>
                </div>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
        },
        {
            id: '1',
            service: 'Сервис_01',
            start: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            end: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            status: () => (
                <Popup text="Системная" subtext="Бесконечный цикл">
                    <div className="page__badge">
                        <Badge status="error" large>
                            Ошибка <PlusIcon />
                        </Badge>
                    </div>
                </Popup>
            ),
            time: () => {
                const date: any = new Date('June 28, 2023 10:00:00');
                return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
            },
            duration: '10:00:00',
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
            id: 'service',
            title: 'Сервис',
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
            id: 'start',
            title: 'Начало',
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
            id: 'end',
            title: 'Завершение',
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
    ];



    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Tasks page');

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
                onPageChange={(page: number) => console.log('onPageChange', page)}
                onItemClickAction={(item: any, action: any) => console.log('onItemClickAction', item, action)}
                actionItems={actions}
                actionItemsGroup={actionsGroup}
                header={header}
                data={data}
            />
        </div>
    );
}
