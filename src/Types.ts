import { FilterChangeType, OneFilterType, TableColumnType } from 'tnt-uikit-reactjs/dist/components/TableView/types';

export type UserType = {
    login: string;
    bearer: string;
    fio: string;
};

export type SortRequestType = {
    [key: string]: 'asc' | 'desc' | '';
};

export type RequestDataApiType = {
    page: number;
    search: string;
    filter: FilterChangeType[];
    sort: SortRequestType;
};

export type ResponseDataApiType<T> = {
    info: {
        minSearchSize: number;
        page: number;
        pageSize: number;
        filters: OneFilterType[];
        headers: TableColumnType[];
    };
    data: T[];
};

export type BusinessProcessesResponseApi = {
    id: number | string | null;
    name: string;
    description: string;
    git: string;
    responsible: string;
    [key: string]: any;
};
