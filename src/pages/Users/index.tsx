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
        id: 'fio', // тут строго поля из data
        title: 'ФИО пользователя системы',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'email', // тут строго поля из data
        title: 'email',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'role', // тут строго поля из data
        title: 'Роль',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
];

const data: TableDataType[] = [
    {
        id: '10',
        fio: 'Савин Марк Семенович',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Администратор',
    },
    {
        id: '9',
        fio: 'Никифоров Александр Витальевич',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Пользователь',
    },
    {
        id: '8',
        fio: 'Овчинников Денис Александрович',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Специалист тех.поддержки',
    },
    {
        id: '7',
        fio: 'Мышкин Матвей Григорьевич',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Администратор',
    },
    {
        id: '6',
        fio: 'Петров Давид Александрович',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Пользователь',
    },
    {
        id: '5',
        fio: 'Самойлов Мстислав Валерьянович',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Специалист тех.поддержки',
    },
    {
        id: '4',
        fio: 'Пестов Родион Степанович',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Администратор',
    },
    {
        id: '3',
        fio: 'Калашников Владимир Алексеевич',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Пользователь',
    },
    {
        id: '2',
        fio: 'Савин Марк Семенович',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Специалист тех.поддержки',
    },
    {
        id: '1',
        fio: 'Копылов Филипп Игнатьевич',
        email: () => (
            <a className="page__link" href="/" rel="noreferrer" target="_blank">
                111@transneft.ru
            </a>
        ),
        role: 'Администратор',
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
        id: 'responsible',
        title: 'Ответственный',
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

export default function Users() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext();
    const { TableView } = Components;

    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Users page');

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
