import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { whatsAppLink } from '../../utils/eles';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const heroContent = t('hero', { returnObjects: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="hero" className="hero">
      <div className="text">
        <img
          src={
            isMobile
              ? 'https://i.imgur.com/b9J0Pd3.jpg'
              : 'https://i.imgur.com/eOhaVyO.jpg'
          }
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
          src={
            isMobile
              ? '/images/hero-img.png'
              : 'https://i.imgur.com/zw0pU6l.jpg'
          }
          alt=""
          className="heroImg"
        />
      </div>
    </div>
  );
};

export default Hero;
//https://imgur.com/jjoLhfT
