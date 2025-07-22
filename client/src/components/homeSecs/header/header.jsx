import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';
import { whatsAppLink } from '../../../utils/eles';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const arabic = i18n.language === 'ar';

  const changeLanguage = () => {
    const lng = arabic ? 'en' : 'ar';
    i18n.changeLanguage(lng);
  };

  return (
    <button onClick={changeLanguage} className="lang">
      <FontAwesomeIcon icon={faGlobe} />
      <div className="h5">{arabic ? 'English' : 'العربية'}</div>
    </button>
  );
};

const OtherLinks = () => {
  const { t } = useTranslation();
  const navLinkItems = t('header.navLink', { returnObjects: true });

  return (
    <div className="navbtns-wrapper">
      <a
        href={whatsAppLink(navLinkItems.msg)}
        className="btn bg primary-btn"
        target="_blank"
      >
        {navLinkItems.title}
      </a>
    </div>
  );
};

const MenuBar = ({ activeSection, setMenuActive }) => {
  const { t } = useTranslation();
  const navbarItems = t('header.navbar', { returnObjects: true });

  const handleClick = () => {
    setTimeout(() => {
      setMenuActive(false);
    }, 300);
  };

  return (
    <div className="navlinks-wrapper">
      {navbarItems.map((item, index) => (
        <HashLink
          smooth
          onClick={handleClick}
          to={`#${item.link}`}
          key={index}
          className={`nav-link ${
            item.link === activeSection ? 'active-btn' : ''
          }`}
        >
          <div className="h5 navlink-text">{item.title}</div>
        </HashLink>
      ))}
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const logo = t('header.logo', { returnObjects: true });
  const [activeSection, setActiveSection] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoLink = logo.link;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // لتطبيق الحالة مباشرة لو تم تحميل الصفحة وهي في الأسفل

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.header-sec');
    let lastActiveSection = '';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id !== lastActiveSection) {
              setActiveSection(entry.target.id);
              lastActiveSection = entry.target.id;
            }
          } else {
            if (lastActiveSection === entry.target.id) {
              setActiveSection('');
              lastActiveSection = '';
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      className={`header ${menuActive ? 'active' : ''} ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="container">
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="brand">
          <HashLink smooth to={logoLink}>
            <img className="schoola-logo" src={logo.image} alt={logo.alt} />
          </HashLink>
        </div>
        <nav className="nav-menu">
          <MenuBar
            activeSection={activeSection}
            setMenuActive={setMenuActive}
          />
          <OtherLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
