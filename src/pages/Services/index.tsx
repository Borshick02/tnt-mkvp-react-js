import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OneFilterType, TableActionType, TableColumnType, TableDataType } from 'tnt-uikit-reactjs/dist/components/TableView/types';
import { Components } from 'tnt-uikit-reactjs';

import './index.scss';


export default function Services() {
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
            title: 'Наименование сервиса',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'description', // тут строго поля из data
            title: 'Описание',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'git', // тут строго поля из data
            title: 'Git URL',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
        {
            id: 'responsible', // тут строго поля из data
            title: 'Ответственный',
            hasSort: false, // добавляет возможность сортировки по клику (подрисовывает маленькую стрелочку)
        },
    ];

    const data: TableDataType[] = [
        {
            id: '10',
            name: () => <TableText text={'Для хранения'} subtext={'Версия 1.0.0.1'} />,
            description: 'Освобождение ресурсов',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Савин Марк Семенович',
        },
        {
            id: '9',
            name: () => <TableText text={'Процесс 01'} subtext={'Версия 1.0.0.1'} />,
            description: 'Удаление временных файлов',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Никифоров Александр Витальевич',
        },
        {
            id: '8',
            name: () => <TableText text={'Для писем'} subtext={'Версия 1.0.0.1'} />,
            description: 'Подготовка к выполнению основной логики',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Михеев Дмитрий Игнатьевич',
        },
        {
            id: '7',
            name: () => <TableText text={'Для вычислений'} subtext={'Версия 1.0.0.1'} />,
            description: 'Обновление промежуточных результатов',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Овчинников Денис Александрович',
        },
        {
            id: '6',
            name: () => <TableText text={'Процесс02.2'} subtext={'Версия 1.0.0.1'} />,
            description: 'Проверка доступности необходимых ресурсов',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Мышкин Матвей Григорьевич',
        },
        {
            id: '5',
            name: () => <TableText text={'Для чтения'} subtext={'Версия 1.0.0.1'} />,
            description: 'Чтение и обработка входных данных',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Петров Давид Александрович',
        },
        {
            id: '4',
            name: () => <TableText text={'Процесс 04'} subtext={'Версия 1.0.0.1'} />,
            description: 'Подготовка к выполнению основной логики',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Самойлов Мстислав Валерьянович',
        },
        {
            id: '3',
            name: () => <TableText text={'22'} subtext={'Версия 1.0.0.1'} />,
            description: 'Обработка ошибок и исключительных ситуаций',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Пестов Родион Степанович',
        },
        {
            id: '2',
            name: () => <TableText text={'Тестовый'} subtext={'Версия 1.0.0.1'} />,
            description: 'Отправка уведомлений о завершении выполнения',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Калашников Владимир Алексеевич',
        },
        {
            id: '1',
            name: () => <TableText text={'Для хранения'} subtext={'Версия 1.0.0.1'} />,
            description: 'Запись и сохранение выходных данных',
            git: () => (
                <a className="page__link" href="/" rel="noreferrer" target="_blank">
                    Git Confluence
                </a>
            ),
            responsible: 'Копылов Филипп Игнатьевич',
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

    useEffect(() => {
        setHeaderButton(() => onHeaderButtonClick); // устанавливаем кнопку в идере

        return () => {
            setHeaderButton(null); // кнопку в хидере нужно удалить
        };
    });

    const onHeaderButtonClick = (): void => console.log('Click from the Services page');

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
