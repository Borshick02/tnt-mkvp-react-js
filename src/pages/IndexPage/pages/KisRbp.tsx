import Chart from 'react-apexcharts'; // https://apexcharts.com/react-chart-demos/
import { Components } from 'tnt-uikit-reactjs';

const homeTableHead = {
    process: 'Процесс',
    startTimes: 'Количество запусков',
    taskComplete: 'Выполнено задач',
    taskQueue: 'Задач в задач',
    totalTime: 'Суммарное время выполнения',
    averageTime: 'Средняя длительность выполнения',
    expected: 'Ожидаемая длительность выполнения (всех задач)',
    discrepancies: 'Расхождение фактической и ожидаемой длительности',
};

const homeMockTableData = [
    {
        process: 'verification_reports_ost',
        startTimes: 4,
        taskComplete: 4,
        taskQueue: 1,
        totalTime: 1,
        averageTime: '0:06:51',
        expected: '0:01:29',
        discrepancies: '0:00:00',
    },
    {
        process: 'additional_incoming_payments',
        startTimes: 1,
        taskComplete: 1,
        taskQueue: 0,
        totalTime: 0,
        averageTime: '0:05:33',
        expected: '0:00:00',
        discrepancies: '0:05:33',
    },
    {
        process: 'bank_statement_galaxy',
        startTimes: 1,
        taskComplete: 1,
        taskQueue: 0,
        totalTime: 0,
        averageTime: '0:07:27',
        expected: '0:00:00',
        discrepancies: '0:07:27',
    },
];
const processMockOptions = [
    { label: 'Процесс 1', value: 'process1' },
    { label: 'Процесс 2', value: 'process2' },
    { label: 'Процесс 3', value: 'process3' },
];
const robotMockOptions = [
    { label: 'Робот 1', value: 'robot1' },
    { label: 'Робот 2', value: 'robot2' },
    { label: 'Робот 3', value: 'robot3' },
];

const Chart2Data = {
    series: [1, 1, 4],
    options: {
        labels: ['Остановлен', 'Ошибка', 'Успех'],
        title: {
            text: 'Количество запусков ', // бизнесс-процессов по статусам
        },
        chart: {
            type: 'donut',
            toolbar: {
                show: true,
                export: {
                    csv: {
                        filename: undefined,
                        columnDelimiter: ',',
                        headerCategory: 'category',
                        headerValue: 'value',
                        dateFormatter(timestamp: any) {
                            return new Date(timestamp).toDateString();
                        },
                    },
                    svg: {
                        filename: undefined,
                    },
                    png: {
                        filename: undefined,
                    },
                },
            },
        },
        responsive: [
            {
                options: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    },
};

const Chart3Data = {
    series: [
        {
            name: 'Выполняется',
            data: [4, 2, 0],
        },
        {
            name: 'Ошибка',
            data: [1, 0, 2],
        },
        {
            name: 'Успех',
            data: [1, 1, 0],
        },
    ],
    options: {
        chart: {
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900,
                        },
                    },
                },
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        title: {
            text: 'Количество задач по статусам',
        },
        xaxis: {
            categories: ['verification_reports_ost', 'bank_statement_galaxy', 'additionl_incoming_payments'],
            labels: {
                formatter: function (val: any) {
                    return val + 'шт';
                },
            },
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return val + 'шт';
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40,
        },
    },
};

export default function IndexPage() {
    const { Select } = Components;

    return (
        <div className="home__content__container">
            <div className="home__content">
                <div className="home__control">
                    <div className="home__control__menu">
                        <h4>Всего запусков: 6</h4>
                        <a href="/">Тех.инфо</a>
                        <a href="/">Логи</a>
                    </div>
                    <div className="home__control__filter">
                        <span className="home__control__filter__label">Фильтры</span>
                        <Select options={processMockOptions} label="Процесс" id="process" style={{ width: '34rem' }} />
                        <Select options={robotMockOptions} label="Робот" id="robot" style={{ width: '34rem' }} />
                    </div>
                </div>
                <div className="home__graph">
                    <div className="home__graph__2">
                        <Chart options={Chart2Data.options as ApexCharts.ApexOptions} series={Chart2Data.series} type="donut" />
                    </div>
                    <div className="home__graph__3">
                        <Chart options={Chart3Data.options as ApexCharts.ApexOptions} series={Chart3Data.series} type="bar" />
                    </div>
                </div>
                <div className="home__process">
                    <h4>Статистика по процессам</h4>
                    <table>
                        <thead>
                            <tr>
                                {Object.values(homeTableHead).map((title) => {
                                    const sortable = title === homeTableHead.startTimes;
                                    return (
                                        <th
                                            className={`home__process__cell-title ${sortable ? 'home__process__cell-title--sortable' : ''}`}
                                            // onClick={() => (sortable ? sortTableData() : null)}
                                            key={title}
                                        >
                                            {title}
                                            {/* {sortable && (sortMode ? <span> &uarr;</span> : <span> &darr;</span>)} */}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {homeMockTableData.map((row) => (
                                <tr key={row.process + 'tr'}>
                                    {Object.values(row).map((item, index) => (
                                        <td
                                            key={item + 'tr' + index}
                                            className={`home__process__cell ${index === Object.values(row).length - 1 && item !== '0:00:00' ? 'home__process__cell--red' : ''
                                                }`}
                                        >
                                            {item}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
