import { OrbitProgress } from 'react-loading-indicators';

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
