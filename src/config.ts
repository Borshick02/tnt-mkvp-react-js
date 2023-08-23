import { Icons } from 'tnt-uikit-reactjs';
const { PlusIcon } = Icons;

// const BaseApiServer = 'https://transneft.ru/'
const BaseApiServer = 'https://lavrik.site/mkvp/';

export const ApiList = {
    eventLog: BaseApiServer + 'event-log',
    getBusinessProcesses: BaseApiServer + 'getBusinessProcesses',
    deleteModel: BaseApiServer + 'deleteModel',
};

export const defaultPageSize = 10;
export const defaultMinSearchSize = 3;

export const listOfAuthDomains = [
    {
        label: 'Donatello@yandex.ru',
        value: 'donatello@yandex.ru',
    },
    {
        label: 'Michelangelo@yandex.ru',
        value: 'michelangelo@yandex.ru',
    },
    {
        label: 'Leonardo@yandex.ru',
        value: 'leonardo@yandex.ru',
    },
];

export type RoutesType = {
    [key: string]: RouteType;
};

export type RouteType = {
    href: string;
    label: string;
    Icon: null | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    divider: boolean;
    longname?: string;
    hide?: boolean;
};

export const Routes: RoutesType = {
    Auth: {
        href: '/', // авторизация
        label: 'Авторизация',
        Icon: null,
        divider: false,
        hide: true,
    },
    IndexPage: {
        href: '/dashboard', // главная - дашборд
        label: 'Главная',
        Icon: PlusIcon,
        divider: true,
    },
    BusinessProcesses: {
        href: '/business-processes', // игыштуыы
        label: 'Бизнесс-процессы',
        Icon: PlusIcon,
        divider: false,
    },
    Services: {
        href: '/services',
        label: 'Сервисы',
        Icon: PlusIcon,
        divider: false,
    },
    Triggers: {
        href: '/triggers',
        label: 'Триггеры',
        Icon: PlusIcon,
        divider: false,
    },
    Tasks: {
        href: '/tasks',
        label: 'Задачи',
        Icon: PlusIcon,
        divider: false,
    },
    Starts: {
        href: '/starts',
        label: 'Запуски',
        Icon: PlusIcon,
        divider: true,
    },
    WorksTuz: {
        href: '/works-tuz',
        label: 'Работы (ТУЗ)',
        Icon: PlusIcon,
        divider: false,
    },
    Servers: {
        href: '/servers',
        label: 'Серверы',
        Icon: PlusIcon,
        divider: false,
    },
    RuntimeEnvironments: {
        href: '/runtime-environments',
        label: 'Среды исполнения',
        Icon: PlusIcon,
        divider: false,
    },
    Software: {
        href: '/software',
        label: 'ПО',
        longname: 'Программное обеспечение',
        Icon: PlusIcon,
        divider: true,
    },
    Users: {
        href: '/users',
        label: 'Пользователи',
        Icon: PlusIcon,
        divider: true,
    },
    UiKit: {
        href: '/ui-kit',
        label: 'UI Kit',
        Icon: null,
        divider: false,
    },
};
