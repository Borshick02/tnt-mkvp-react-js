import React from 'react';
import './index.scss';
import imgCard from '../../assets/images/CardNews.png';

// interface handleClick {
//     event: React.MouseEvent<HTMLParagraphElement, MouseEvent>;
// }

const CardNews = () => {

    const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const target = event.target as HTMLParagraphElement;
        target.classList.toggle('card-news-active');
    };
    return (
        <div className='wrap'>
            <div className="card-news">
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </div>
            <div className="card-news">
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </div>
            <div className="card-news">
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </div>
            <div className="card-news">
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </div>
            <div className="card-news">
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </div>
            <div className="card-news">
                <img src={imgCard} alt="" className="card-news__img" />
                <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
                <p className="card-news__desc" onClick={handleClick}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                    necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
                </p>
                <div className="card-news__date">06.06</div>
            </div>
        </div>
    );
};

export default CardNews;
