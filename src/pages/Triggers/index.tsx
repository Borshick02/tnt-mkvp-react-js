import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OneFilterType, TableActionType, TableColumnType, TableDataType } from 'tnt-uikit-reactjs/dist/components/TableView/types';
import { Components } from 'tnt-uikit-reactjs';



import './index.scss';

export const header: TableColumnType[] = [
    {
        id: 'id', // тут строго поля из data
        title: 'ID',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'name', // тут строго поля из data
        title: 'Наименование триггера',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'process', // тут строго поля из data
        title: 'Бизнес-процесс',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'service', // тут строго поля из data
        title: 'Сервис',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'type', // тут строго поля из data
        title: 'Тип',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'launch', // тут строго поля из data
        title: 'Ближайший запуск',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
];

const data: TableDataType[] = [
    {
        id: '10',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '9',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '8',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по письму',
        launch: () => {
            const date: any = null;
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '7',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '6',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '5',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '4',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по письму',
        launch: () => {
            const date: any = null;
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '3',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '2',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
    },
    {
        id: '1',
        name: 'Ежедневный в 09:00',
        process: 'Процесс_01',
        service: 'Сервис_01',
        type: 'Запуск по времени',
        launch: () => {
            const date: any = new Date('June 28, 2023 10:00:00');
            return date instanceof Date ? `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}` : '';
        },
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
    {
        id: 'type',
        title: 'Тип',
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

export default function Triggers() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext();
    const { TableView } = Components;

    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Triggers page');

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
