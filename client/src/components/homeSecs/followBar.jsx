import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './followBar.scss';

const FollowBar = () => {
  const { t } = useTranslation();
  const bar = t('contactBar', { returnObjects: true });
  return (
    <div className="bar-sec row">
      <div className="container row">
        <div className="text" dangerouslySetInnerHTML={{ __html: bar.text }} />
        <Link to={bar.button.link} className={bar.button.class}>
          <div className="h4">{bar.button.text}</div>
        </Link>
      </div>
    </div>
  );
};

export default FollowBar;
