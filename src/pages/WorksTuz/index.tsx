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
        title: 'Наименование робота',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'domen', // тут строго поля из data
        title: 'Домен',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'responsible', // тут строго поля из data
        title: 'Ответственный',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'po', // тут строго поля из data
        title: 'Программное обеспечение',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'safe', // тут строго поля из data
        title: 'Cейф',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
];

const data: TableDataType[] = [
    {
        id: '10',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Савин Марк Семенович',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '9',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Никифоров Александр Витальевич',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '8',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Михеев Дмитрий Игнатьевич',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '7',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Овчинников Денис Александрович',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '6',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Мышкин Матвей Григорьевич',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '5',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Петров Давид Александрович',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '4',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Самойлов Мстислав Валерьянович',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '3',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Пестов Родион Степанович',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '2',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Калашников Владимир Алексеевич',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
    },
    {
        id: '1',
        name: 'RBP-01PYTHON',
        domen: 'TN',
        responsible: 'Копылов Филипп Игнатьевич',
        po: 'Система 1, Система 2, Система 3',
        safe: 'RBP-01PYTHON',
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
        id: 'domen',
        title: 'Домен',
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
        id: 'responsible',
        title: 'Ответственный',
        values: [
            {
                title: 'имя 1',
                count: 3,
            },
            {
                title: 'имя 2',
                count: 36,
            },
            {
                title: 'имя 3',
                count: 5,
            },
        ],
    },
    {
        id: 'po',
        title: 'ПО',
        values: [
            {
                title: 'имя 1',
                count: 3,
            },
            {
                title: 'имя 2',
                count: 36,
            },
            {
                title: 'имя 3',
                count: 5,
            },
        ],
    },
    {
        id: 'safe',
        title: 'Сейф',
        values: [
            {
                title: 'имя 1',
                count: 3,
            },
            {
                title: 'имя 2',
                count: 36,
            },
            {
                title: 'имя 3',
                count: 5,
            },
        ],
    },
];

export default function WorksTuz() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext();
    const { TableView } = Components;

    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Work TUZ page');

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
