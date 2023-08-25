import { HomeIcon } from 'tnt-uikit-reactjs/src/icons';

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
    background?: boolean;
    marginTop?: boolean;
};

export const Routes: RoutesType = {
    // Auth: {
    //     href: '/auth', // авторизация
    //     label: 'Авторизация',
    //     Icon: null,
    //     divider: false,
    //     hide: true,
    // },
    IndexPage: {
        href: '/', // главная - дашборд
        label: 'Компания',
        Icon: HomeIcon,
        divider: false,
        background: false,
    },
    EmployeeDirectory: {
        href: '', // главная - дашборд
        label: 'Справочник работников',
        Icon: HomeIcon,
        divider: false,
        background: false,
    },
    Employee: {
        href: '', // главная - дашборд
        label: 'Работнику',
        Icon: HomeIcon,
        divider: false,
        background: false,
    },
    TasksAndProjects: {
        href: '', // главная - дашборд
        label: 'Задачи и проекты',
        Icon: HomeIcon,
        divider: false,
        background: false,
    },
    MediaCenter: {
        href: '', // главная - дашборд
        label: 'Медиацентр',
        Icon: HomeIcon,
        divider: false,
        background: false,
    },
    Services: {
        href: '', // главная - дашборд
        label: 'Сервисы',
        Icon: HomeIcon,
        divider: false,
        background: false,
    },
    KIS: {
        href: '', // главная - дашборд
        label: 'КИС',
        Icon: HomeIcon,
        divider: false,
        background: true,
        marginTop: true,
    },
    Subsystems: {
        href: '', // главная - дашборд
        label: 'Подсистемы',
        Icon: HomeIcon,
        divider: false,
        background: true,
    },
    Support: {
        href: '', // главная - дашборд
        label: 'Поддержка',
        Icon: HomeIcon,
        divider: false,
        background: true,
    },
    UiKit: {
        href: '/ui-kit',
        label: 'UI Kit',
        Icon: null,
        divider: false,
        background: false,
    },
};
