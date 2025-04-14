import { useState } from 'react';
import './questions.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Question = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="question">
      <div className="container-ques" onClick={() => setOpen(!open)}>
        <div className="question-con">
          <h4>{item.question} </h4>
        </div>
        {!open && <FontAwesomeIcon icon={faAngleDown} className="icon" />}
        {open && <FontAwesomeIcon icon={faAngleUp} className="icon" />}
      </div>

      <div className={`answer ${open && 'show'}`}>
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  );
};

const Questions = () => {
  const { t } = useTranslation();
  const questions = t('questions', { returnObjects: true });

  return (
    <div className="questions sec">
      <h1 className="h2">{questions.headText}</h1>
      <div className="div-questions">
        {questions.list.map((item, index) => (
          <Question item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
