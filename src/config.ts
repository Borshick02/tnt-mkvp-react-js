import { Icons } from 'tnt-uikit-reactjs';
const { PlusIcon } = Icons;

// const BaseApiServer = 'https://transneft.ru/'
const BaseApiServer = 'https://lavrik.site/mkvp/';

export const ApiList = {
    eventLog: BaseApiServer + 'event-log',
    getBusinessProcesses: BaseApiServer + 'getBusinessProcesses',
    deleteModel: BaseApiServer + 'deleteModel',
};

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
    // Auth: {
    //     href: '/', // авторизация
    //     label: 'Авторизация',
    //     Icon: null,
    //     divider: false,
    //     hide: true,
    // },
    IndexPage: {
        href: '/dashboard', // главная - дашборд
        label: 'Главная',
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
