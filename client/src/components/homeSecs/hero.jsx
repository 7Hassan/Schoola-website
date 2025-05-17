import { useTranslation } from 'react-i18next';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { whatsAppLink } from '../../utils/eles';
import { useMediaQuery } from 'react-responsive';
const Hero = () => {
  const { t } = useTranslation();
  const heroContent = t('hero', { returnObjects: true });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div id="hero" className="hero">
      <div className="text">
        <img
          src={isMobile ? 'images/hero-text.webp' : 'images/hero-text-lap.webp'}
          alt=""
          className="hero-text-img"
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
              href={whatsAppLink(item.msg)}
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
        <img
          src={isMobile ? 'images/hero-img.webp' : 'images/hero-img-lap.webp'}
          alt=""
          className="heroImg"
        />
      </div>
    </div>
  );
};

export default Hero;
