import { useTranslation } from 'react-i18next';
import { InfiniteSlider } from '../../utils/components';
import { reviews } from '../../utils/data';
import './reviews.scss';



const Review = ({ data }) => {
  return (
    <div className="container-item">
      <div className="text">{data.review}</div>
      <div className="info row">
        <h5>
          {data.name}
          <br />
          <span className="text-light"> ولي أمر</span>
        </h5>
        <div className="country">
          <img src="/images/egy.png" alt="img" loading="lazy" />
        </div>
      </div>
      <div className="stars row">
        {Array.from({ length: data.stars }).map((_, index) => (
          <img key={index} src="/icons/star.png" alt="star" loading="lazy" />
        ))}
      </div>
    </div>
  );
};

const Reviews = () => {
  const { t } = useTranslation();
  const clients = t('clients', { returnObjects: true });

  return (
    <div className="clients sec header-sec" id="clients">
      <h1 className="h2">{clients.headText}</h1>
      <div className="div-clients">
        <div className="slide-parent">
          <InfiniteSlider list={reviews} Item={Review} />
          <InfiniteSlider reversed={true} list={reviews} Item={Review} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
