import React from 'react';
import { SwiperSlide } from 'swiper/react';
import imgCard from '../../assets/images/CardNews.png';

import Grid from 'components/Grid';
import Card from 'components/Card';
import Slider from 'components/Slider';

import './index.scss';

const mockItems = [
    {
        image: imgCard,
        title: 'ТНТ на ЦИПР-2023',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!',
        date: '06.06',
    },
    {
        image: imgCard,
        title: 'ТНТ на ЦИПР-2023',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!',
        date: '06.06',
    },
    {
        image: imgCard,
        title: 'ТНТ на ЦИПР-2023',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!',
        date: '06.06',
    },
    {
        image: imgCard,
        title: 'ТНТ на ЦИПР-2023',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!',
        date: '06.06',
    },
    {
        image: imgCard,
        title: 'ТНТ на ЦИПР-2023',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!',
        date: '06.06',
    },
    {
        image: imgCard,
        title: 'ТНТ на ЦИПР-2023',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!',
        date: '06.06',
    },
];

const CardNews = () => {
    const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const target = event.target as HTMLParagraphElement;
        target.classList.toggle('card-news-active');
    };
    return (
        <div className="card-news">
            <div className="card-news__head">
                <h3 className="card-news__title">Новости</h3>
                <a href="/" className="card-news__link">
                    Смотреть все
                </a>
            </div>
            <Grid className="card-news__grid" type="large">
                {mockItems &&
                    mockItems.map(({ image, title, text, date }, key) => (
                        <Card key={key}>
                            <img src={image} alt={title} className="card-news__img" />
                            <h5 className="card-news__title">{title}</h5>
                            <p className="card-news__desc" onClick={handleClick}>
                                {text}
                            </p>
                            <div className="card-news__date">{date}</div>
                        </Card>
                    ))}
            </Grid>
            <Slider
                slidesPerView={1.1}
                spaceBetween={16}
                allowTouchMove
                navigation={false}
                id="slider-card-services--mobile"
                className="card-services__slider"
            >
                {mockItems && mockItems.map(({ image, title, text, date }, key) => (
                    <SwiperSlide key={key}>
                        <Card>
                            <img src={image} alt={title} className="card-news__img" />
                            <h5 className="card-news__title">{title}</h5>
                            <p className="card-news__desc" onClick={handleClick}>
                                {text}
                            </p>
                            <div className="card-news__date">{date}</div>
                        </Card>
                    </SwiperSlide>
                ))}
            </Slider>
            <a href="/" className="card-news__more">
                Показать еще
            </a>
        </div>
    );
};

export default CardNews;
