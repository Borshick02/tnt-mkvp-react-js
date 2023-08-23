import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OneFilterType, TableActionType, TableColumnType, TableDataType } from 'tnt-uikit-reactjs/dist/components/TableView/types';
import { Components, Icons } from 'tnt-uikit-reactjs';

import './index.scss';

export default function RuntimeEnvironments() {
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
            id: 'name', // тут строго поля из data
            title: 'Наименование процесса',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'service', // тут строго поля из data
            title: 'Сервис',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'ip', // тут строго поля из data
            title: 'IP-адрес сервера',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'status', // тут строго поля из data
            title: 'Cтатус',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'action', // тут строго поля из data
            title: 'Действия',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'robot', // тут строго поля из data
            title: 'Робот (ТУЗ)',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
    ];

    const data: TableDataType[] = [
        {
            id: '10',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button secondary>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '9',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="error" large>
                        Не активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '8',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button secondary>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '6',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button secondary>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '5',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button secondary>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '4',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button secondary>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '3',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="error" large>
                        Не активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '2',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="error" large>
                        Не активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
        },
        {
            id: '1',
            name: 'Процесс_01',
            service: 'Сервис 01',
            ip: '192.168.1.2',
            status: () => (
                <div className="page__badge">
                    <Badge status="success" large>
                        Активно
                    </Badge>
                </div>
            ),
            action: () => (
                <div className="page__badge">
                    <Button secondary>
                        <PlusIcon />
                    </Button>
                </div>
            ),
            robot: 'RBP_PYTHON_01',
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
    ];




    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Runtime environments page');

    return (
        <div>
            <TableView
                status={''}
                minSearchSize={3}
                page={2}
                pageSize={3}
                filters={filters}
                onSearchChange={(val) => console.log('onSearchChange', val)}
                onSortChange={(val, direction) => console.log('onSortChange', val, direction)}
                onFilterChange={(filtersArray) => console.log('onFilterChange', filtersArray)}
                onPageChange={(page) => console.log('onPageChange', page)}
                onItemClickAction={(item, action) => console.log('onItemClickAction', item, action)}
                actionItems={actions}
                actionItemsGroup={actionsGroup}
                header={header}
                data={data}
            />
        </div>
    );
}
