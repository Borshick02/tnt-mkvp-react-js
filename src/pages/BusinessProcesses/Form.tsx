import { useEffect, useState } from "react";
import { BusinessProcessesResponseApi } from "Types";
import { Components, Utils } from 'tnt-uikit-reactjs';

const initialCheckboxData = {
    last: false,
    plan: false,
    today: false,
};


const mockListOfDomains = [
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



export default function Form({
    model
}: {
    model: BusinessProcessesResponseApi
}) {
    const [switchChecked, setSwitchChecked] = useState(false);
    const [checkbox, setCheckbox] = useState(initialCheckboxData);
    const [allChecked, setAllChecked] = useState(false);
    const [text, setText] = useState('Отправка писем');
    const { Accordion, Badge, Button, Checkbox, Divider, Input, Select, Switcher, TextInline, Title } = Components;
    const { Modal } = Utils;


    const { last, plan, today } = checkbox;

    useEffect(() => {
        setAllChecked(last && plan && today);
    }, [last, plan, today]);

    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => setSwitchChecked(e.target.checked);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCheckbox((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.checked,
        }));

    const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAllChecked(e.target.checked);
        setCheckbox((prevState) => {
            const newObj = { ...prevState };
            Object.keys(newObj).forEach((key) => {
                newObj[key as keyof typeof newObj] = e.target.checked;
            });
            return { ...newObj };
        });
    };

    console.log('model', model);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '3rem', gap: '1.5rem' }}>
                <Title type="h2" title="Редактировать бизнес-процесс" subtitle="Отправка писем" />
                <Divider />
                <h4 style={{ marginBottom: '1rem' }}>Информация</h4>
                <TextInline style={{ gridTemplateColumns: '1.2fr 1fr' }} title="Дата создания" text="10.07.2023" />
                <Divider />
                <TextInline style={{ gridTemplateColumns: '1.2fr 1fr' }} title="Дата редактирования" text="11.07.2023" />
                <Divider />
                <Input onChange={handleInput} label="Наименование бизнес-процесса" value={text} id="Отправка писем" />
                <Select label="Домен" id="sidebar-test" defaultValue={mockListOfDomains[1].value} options={mockListOfDomains} />
                <Switcher
                    style={{ marginTop: '1rem', gridTemplateColumns: '1.2fr 1fr' }}
                    label="Запуск из оркестратора"
                    checked={switchChecked}
                    onChange={handleSwitch}
                />
                <Divider />
                <Accordion
                    title={
                        <>
                            <h3>Статус</h3>
                            <Badge>2</Badge>
                        </>
                    }
                >
                    <Checkbox checked={allChecked} onChange={handleCheckAll} label="Все" />
                    <Checkbox id="last" checked={last} onChange={handleCheckbox} label="Последние" />
                    <Checkbox id="plan" checked={plan} onChange={handleCheckbox} label="Запланирован" />
                    <Checkbox id="today" checked={today} onChange={handleCheckbox} label="Сегодня" />
                </Accordion>
                <Divider />
            </div>

            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: 'auto',
                    background: 'white',
                    padding: '2rem',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                }}
            >
                <Button
                    onClick={() => {
                        Modal.hide();
                    }}
                >
                    Закрыть модалку
                </Button>

                <Button
                    onClick={() => {
                        Modal.hide(true);
                    }}
                >
                    Закрыть сразу все модалки
                </Button>
            </div>
        </div>
    );
};
