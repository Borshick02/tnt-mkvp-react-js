import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FilterChangeType, TableActionType, TableDataType } from 'tnt-uikit-reactjs/dist/components/TableView/types';
import { LoadStatusType } from 'tnt-uikit-reactjs/src/Types';
import { BusinessProcessesResponseApi, ResponseDataApiType, SortRequestType } from 'Types';
import { delFromTableFromApi, getTableFromApi } from 'requests';
import { ApiList, defaultMinSearchSize, defaultPageSize } from 'config';
import Form from './Form';
import { Components, Utils } from 'tnt-uikit-reactjs';
import './index.scss';



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


const emptyModel: BusinessProcessesResponseApi = {
    id: null,
    name: '',
    description: '',
    git: '',
    responsible: '',
    testNewField: '',
};


export default function BusinessProcesses() {
    const setHeaderButton: React.Dispatch<React.SetStateAction<(() => void) | null>> = useOutletContext(); // коллбек на нажатие кнопки в шапке
    const [apiResponse, setApiResponse] = useState<ResponseDataApiType<BusinessProcessesResponseApi> | null>(null); // весь ответ от АПИ
    const [page, setPage] = useState<number>(1); // текущий номер страницы
    const [pageSize, setPageSize] = useState<number>(defaultPageSize); // сколько элементов на странице
    const [minSearchSize, setMinSearchSize] = useState<number>(defaultMinSearchSize); // минимальное кол-во символов для запуска поиска
    const [search, setSearch] = useState<string>(''); // строка поиска
    const [filter, setFilter] = useState<FilterChangeType[]>([]); // набор фильтров
    const [sort, setSort] = useState<SortRequestType>({}); // сортировка
    const [tableStatus, setTableStatus] = useState<LoadStatusType>('load'); // сортировка
    const { TableView } = Components;
    const { Modal, Notification } = Utils;


    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });


    useEffect(() => {
        load();
    }, [page, search, filter, sort]);


    const load = async () => {
        setTableStatus('load');
        const response = await getTableFromApi<BusinessProcessesResponseApi>(ApiList.getBusinessProcesses, { page, search, filter, sort });

        setPageSize(response?.info?.pageSize || defaultPageSize);
        setMinSearchSize(response?.info?.minSearchSize || defaultMinSearchSize);

        setApiResponse(response);
        setTableStatus('');
    }


    const onHeaderButtonClick = (): void => {
        Modal.component(<Form model={emptyModel} />, 'right', () => { }, true);
    }


    const onItemClickAction = (item: TableDataType, action: TableActionType) => {
        if (action.id === 'more') {
            Modal.component(<Form model={item as BusinessProcessesResponseApi} />, 'right', () => { }, true);
        } else if (action.id === 'edit') {
            Modal.component(<Form model={item as BusinessProcessesResponseApi} />, 'right', () => { }, true);
        } else if (action.id === 'delete') {
            Modal.confirm(
                'Удаление:',
                'Вы уверены что хотите удалить запись?',
                async () => {
                    setTableStatus('load');
                    const ids = !!item?.length ? item.map((a: BusinessProcessesResponseApi) => a.id) : item.id;

                    await delFromTableFromApi(ApiList.deleteModel, 'business-processes', ids)

                    Notification.show('Внимание!', ids.length === 1 ? 'Запись успешно удалена' : 'Записи успешно удалены', '');

                    load();
                },
                () => { }
            );
        }
    }


    return (
        <TableView
            status={tableStatus}
            minSearchSize={minSearchSize}
            page={page}
            pageSize={pageSize}
            filters={apiResponse?.info?.filters || []}
            onSearchChange={(val) => setSearch(val)}
            onSortChange={(val, direction) => setSort({ [val]: direction })}
            onFilterChange={(filtersArray) => setFilter(filtersArray)}
            onPageChange={(page) => setPage(page)}
            onItemClickAction={onItemClickAction}
            actionItems={actions}
            actionItemsGroup={actionsGroup}
            header={apiResponse?.info?.headers || []}
            data={apiResponse?.data || []}
        />
    );
}
