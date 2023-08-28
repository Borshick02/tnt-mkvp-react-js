import React from 'react';
import './index.scss';
import imgCard from '../../assets/images/CardNews.png';

import Grid from 'components/Grid';
import Card from 'components/Card';

// interface handleClick {
//     event: React.MouseEvent<HTMLParagraphElement, MouseEvent>;
// }

const CardNews = () => {

    const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const target = event.target as HTMLParagraphElement;
        target.classList.toggle('card-news-active');
    };
    return (
        <div className="card-news">
            <div className="card-news__head">
                <h3 className="card-news__title">Новости</h3>
                <a href="#" className="card-news__link">Смотреть все</a>
            </div>
            <Grid type="large">
            <Card>
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </Card>
            <Card>
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </Card>
            <Card>
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </Card>
            <Card>
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </Card>
            <Card>
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </Card>
            <Card>
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </Card>
        </Grid>
        <a href="#" className="card-news__more">Показать еще</a>
        </div>
    );
};

export default CardNews;
