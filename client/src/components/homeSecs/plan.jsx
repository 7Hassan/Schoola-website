import './plan.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useContext, useMemo, useState } from 'react';
import { whatsAppLink } from '../../utils/eles';
import { Spin } from 'antd';
// import { LocationContext } from '../../context/user';
import { getLocalizedPrices, priceType } from '../../utils/data';
import { CountryContext } from '../../context/country';

const Price = ({ type, country }) => {
  const prices = useMemo(() => getLocalizedPrices(country), [country, type]);
  const priceInfo = useMemo(() => priceType(type, prices), [type, prices]);
  const { preOffer, price, perClassPrice, discount, currency } = priceInfo;

  return (
    <div className="price-container">
      <div className="pricing-price">
        {preOffer > 0 && <span className="price_before">{preOffer}</span>}
        <span className="price_currency"> {currency} </span>
        <span className="price">
          <strong className="bold-text-3">{price}</strong>
        </span>
      </div>
      <div className="paragraph-regular margin-bottom-20">
        معدل{' '}
        <strong>
          {perClassPrice} {currency}
        </strong>{' '}
        لكل حصة
      </div>
      {<div className={`save ${!discount && 'hide'}`}>وفر {discount}%</div>}
    </div>
  );
};

const Title = ({ title }) => (
  <div className="title-container">
    <h2 className="pricing-title">{title}</h2>
  </div>
);

const Features = ({ rewards }) => {
  if (!rewards.length) return null;

  return (
    <div className="pricing_more_features_container">
      <p className="paragraph-4">مميزات المستوى:</p>
      <div className="more_features_in_container">
        {rewards.map(({ img, text }, index) => (
          <div className="frame-1940" key={index}>
            <img
              src={img}
              alt={text}
              width="52"
              height="52"
              loading="lazy"
              className="vectors-wrapper-11"
            />
            <div className="overline-12-regular">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CardDetails = ({ plan, drop, setDrop }) => {
  const { details, info, grade, age } = plan;
  const { duration, text, rewards } = info;

  return (
    <div className="card-details">
      <div className="duration-container" onClick={() => setDrop(!drop)}>
        <div className="div-block-18">
          <p className="paragraph-2">{duration}</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>

      <p className="paragraph-3 center">
        <strong>
          الصف {grade} / {age} سنوات
        </strong>
        <br />
        المنهج يشمل:
      </p>

      <p className="paragraph-3 ar">
        <span className="pricing_span_second">
          <span className="color-text">{text}</span>
          {details.level}
        </span>
      </p>

      <ul className="pricing-feature-list ar list-unstyled">
        {details.features.map((feature, index) => (
          <li key={index} className="list-item">
            <div className="pricing-feature ar">{feature}</div>
          </li>
        ))}
      </ul>

      <Features rewards={rewards} />
    </div>
  );
};

const Button = ({ age }) => {
  const message = `مرحبًا، أنا مهتم/مهتمة بتسجيل طفلي (عمره ${age} سنوات) في سكولة، ممكن أعرف التفاصيل؟`;

  return (
    <a
      href={whatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="pricing_card_button pricing_card_button_first w-button"
    >
      تواصل للاشتراك
    </a>
  );
};

const PlanCard = ({ plan }) => {
  const [drop, setDrop] = useState(false);
  const { info } = plan;
  const isBest = info.type === 'best';
  // const { locationObj } = useContext(LocationContext);
  const { country, loading } = useContext(CountryContext);

  return (
    <div className={`pricing-card2 ${info.type}`}>
      {isBest && <div className="head-best h4">الأكثر شهرة</div>}

      <div className={`pricing-card ${drop ? 'active' : ''}`}>
        <Title title={info.title} />
        <div className="price-container">
          {/* {loading && <Spin size="medium" />} */}
          {/* <Price type={info.id} country={country} /> */}
          {/* {locationObj.loading && <Spin size="medium" />}
          <Price type={info.id} country={locationObj.locationData.country} /> */}
        </div>
        <Button age={plan.age} />
        <div className="pricing-divider" />
        <CardDetails plan={plan} drop={drop} setDrop={setDrop} />
      </div>
    </div>
  );
};

export default PlanCard;
