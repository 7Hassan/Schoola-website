import { OrbitProgress } from 'react-loading-indicators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';

export const PreLoading = () => {
  return (
    <div className="loading-app">
      <OrbitProgress color="#056fec" size="medium" text="" textColor="" />
    </div>
  );
};

export const Skills = ({ skills }) => {
  return (
    <div id="skills" className="skills sec">
      <div className="curriculums">
        <div className="text-num row">
          <h3> {skills.text.beforeNum}</h3>

          <div className="number">
            <h3>{skills.text.num}</h3>
          </div>
          <h3>{skills.text.afterNum}</h3>
        </div>
        <div className="icons row">
          {skills.icons.map((item, index) => (
            <div className="icon" key={index}>
              <img src={item.imgLink} alt="" loading="lazy" />
              <div className="text">
                <h5 className="text-light">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InfiniteSlider = ({ list, reversed = false, Item }) => {
  return (
    <div className={`slider infinite-loop ${reversed && 'reversed'}`}>
      <div className="list" style={{ '--quantity': list.length }}>
        {list.map((item, index) => (
          <div
            className="item review"
            style={{ '--position': index }}
            key={index}
          >
            <Item data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const CopyBtn = ({ value = '', setCopied, copied }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="copy" onClick={copyToClipboard}>
      {copied && <FontAwesomeIcon icon={faCheck} />}
      {copied && <span>copied</span>}
      {!copied && <FontAwesomeIcon icon={faCopy} />}
      {!copied && <span>copy</span>}
    </div>
  );
};
