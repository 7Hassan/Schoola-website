import { useTranslation } from 'react-i18next';
import { Skills } from '../../utils/eles';
import './skills.scss';

export const SoftSkills = () => {
  const { t } = useTranslation();
  const softSkills = t('softSkills', { returnObjects: true });
  return <Skills skills={softSkills} />;
};

export const HardSkills = () => {
  const { t } = useTranslation();
  const softSkills = t('hardSkills', { returnObjects: true });
  return <Skills skills={softSkills} />;
};
