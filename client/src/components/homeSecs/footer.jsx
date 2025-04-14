import { useTranslation } from 'react-i18next';
import './footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  const footer = t('footer', { returnObjects: true });

  return (
    <div className="footer">
      <div className="row wrap footer-container">
        <div className="info">
          <div className="logo-text">
            <img src={footer.logo} alt="img" loading="lazy" />
            <h3>{footer.text}</h3>
          </div>
          <div className="social row">
            {footer.social.map((item, index) => (
              <a href={item.link} target="_blank" key={index}>
                <img src={item.img} alt="img" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
        <div className="studying">
          <h3>{footer.studying.text}</h3>
          <ul>
            {footer.studying.list.map((item, index) => (
              <li className="check-point-row" key={index}>
                {/* <img src={item.imgLink} alt="img" loading="lazy" /> */}
                <h5>{item.text}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row wrap polices">
          <div className="rights h5">{footer.policy.rights}</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
