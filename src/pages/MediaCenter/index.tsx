import corp from 'assets/images/corp.png';
import survey from 'assets/images/survey.png';
import brandbook from 'assets/images/brandbook.png';
import pao from 'assets/images/pao.png';

import PageTitle from 'components/PageTitle';
import Card from 'components/Card';
import Grid from 'components/Grid';

import './index.scss';

const MediaCenter = () => {
    return (
        <div className="media-center">
            <PageTitle />
            <Grid columns="7">
                <Card className="media-center__item" title="Корпоративные медиа">
                    <img src={corp} alt="media" />
                </Card>
                <Card className="media-center__item" title="Опросы">
                    <img src={survey} alt="media" />
                </Card>
                <Card className="media-center__item" title="Брендбук">
                    <img src={brandbook} alt="media" />
                </Card>
                <Card className="media-center__item" title='ПАО "Транснефть"' subtitle="https://www.transneft.ru/">
                    <img src={pao} alt="media" />
                </Card>
            </Grid>
        </div>
    );
};

export default MediaCenter;
