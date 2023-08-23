export default function Monitoring() {
    return (
        <div className="home__content">
            <div className="home__control">
                <div className="home__control__menu">
                    <h4>Мониторинг</h4>
                    <a href="/">Тех.инфо</a>
                    <a href="/">Логи</a>
                </div>
            </div>
            <div className="home__graph">
                <div className="home__graph__1"></div>
                <div className="home__graph__2"></div>
                <div className="home__graph__3"></div>
            </div>
        </div>
    );
}
