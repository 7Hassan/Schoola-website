import { useTranslation } from 'react-i18next';
import './contact-wh.scss';

const Contact = () => {
  const { t } = useTranslation();
  const contact = t('contactwh', { returnObjects: true });

  return (
    <div className="contact-wh">
      <div className="contact-container">
        <img src="./public/icons/text.png" alt="img" className="text-img" />
        <a
          href={contact.button.link}
          target="_blank"
          className={contact.button.class}
        >
          <div className="h4">{contact.button.text}</div>
          <img src="./public/icons/whats.png" alt="img" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
