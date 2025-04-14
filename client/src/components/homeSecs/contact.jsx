import { useTranslation } from 'react-i18next';
import './contact.scss';

const Contact = () => {
  const { t } = useTranslation();
  const contact = t('contact', { returnObjects: true });

  return (
    <div className="contact">
      <div className="contact-container">
        {contact.info.map((item, index) => (
          <div className="div-contact-info" key={index}>
            <div className="h5">{item.name}</div>
            <a href={item.link}>
              <div className="h4">{item.data}</div>
            </a>
          </div>
        ))}

        <a
          href={contact.button.link}
          target="_blank"
          className={contact.button.class}
        >
          <div className="h5">{contact.button.text}</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
