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
        title: 'Имя сервера',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'ip', // тут строго поля из data
        title: 'IP-адрес',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'po', // тут строго поля из data
        title: 'Программное обеспечение',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
    {
        id: 'description', // тут строго поля из data
        title: 'Описание',
        hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
    },
];

const data: TableDataType[] = [
    {
        id: '10',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '9',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '8',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '7',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '6',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '5',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '4',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '3',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '2',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
    },
    {
        id: '1',
        name: 'RPA_SERVER_01',
        ip: '192.168.1.1',
        po: 'Cистема 1, Система 2, Система 3',
        description: 'Тот, который работает даже когда все спят',
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
        id: 'ip',
        title: 'IP-адрес',
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
];

export default function Servers() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext();
    const { TableView } = Components;

    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Servers page');

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
