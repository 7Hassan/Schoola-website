import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const { t } = useTranslation();
  const heroContent = t('hero', { returnObjects: true });

  return (
    <div id="hero" className="hero">
      <div className="text">
        <img
          src="https://i.imgur.com/eOhaVyO.jpg"
          alt=""
          className="hero-text-img"
        />
        <img
          src="https://i.imgur.com/b9J0Pd3.jpg"
          alt=""
          className="hero-text-img small"
        />
        <div className="subtitle">
          {heroContent.subtitle.map((item, index) => (
            <div className="check-point-row" key={index}>
              <FontAwesomeIcon icon={faCheck} />
              <div
                className="h4"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
        <div className="btns row">
          {heroContent.buttons.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className={item.class}
              target="_blank"
            >
              <div className="h5 navlink-text">{item.text}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-img">
        <img src="https://i.imgur.com/zw0pU6l.jpg" alt="" className="heroImg" />
        <img
          src="https://i.imgur.com/jjoLhfT.jpg"
          alt=""
          className="heroImg small"
        />
      </div>
    </div>
  );
};

export default Hero;
