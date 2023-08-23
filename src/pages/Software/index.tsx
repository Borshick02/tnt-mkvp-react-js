import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OneFilterType, TableActionType, TableColumnType, TableDataType } from 'tnt-uikit-reactjs/dist/components/TableView/types';
import { Components } from 'tnt-uikit-reactjs';

import './index.scss';


export default function Software() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext();
    const { TableView, TableText } = Components;



    const header: TableColumnType[] = [
        {
            id: 'id', // тут строго поля из data
            title: 'ID',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'name', // тут строго поля из data
            title: 'Наименование ПО',
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
            name: () => <TableText text={'Система 10'} subtext={'Версия 1.0.0.1'} />,
            description: 'To do list',
        },
        {
            id: '9',
            name: () => <TableText text={'Система 9'} subtext={'Версия 1.0.0.1'} />,
            description: 'Календарь',
        },
        {
            id: '8',
            name: () => <TableText text={'Система 8'} subtext={'Версия 1.0.0.1'} />,
            description: 'Мессенджер',
        },
        {
            id: '7',
            name: () => <TableText text={'Система 7'} subtext={'Версия 1.0.0.1'} />,
            description: 'To do list',
        },
        {
            id: '6',
            name: () => <TableText text={'Система 6'} subtext={'Версия 1.0.0.1'} />,
            description: 'Календарь',
        },
        {
            id: '5',
            name: () => <TableText text={'Система 5'} subtext={'Версия 1.0.0.1'} />,
            description: 'Мессенджер',
        },
        {
            id: '4',
            name: () => <TableText text={'Система 4'} subtext={'Версия 1.0.0.1'} />,
            description: 'To do list',
        },
        {
            id: '3',
            name: () => <TableText text={'Система 3'} subtext={'Версия 1.0.0.1'} />,
            description: 'Календарь',
        },
        {
            id: '2',
            name: () => <TableText text={'Система 2'} subtext={'Версия 1.0.0.1'} />,
            description: 'Мессенджер',
        },
        {
            id: '1',
            name: () => <TableText text={'Система 1'} subtext={'Версия 1.0.0.1'} />,
            description: 'To do list',
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

    const filters: OneFilterType[] = [];


    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Software page');

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
