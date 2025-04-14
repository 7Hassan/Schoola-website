import { convertToDirectLink } from '../../utils/eles';
import './certificates.scss';

const Text = () => {
  return (
    <div className="text-num row">
      {/* <h3> {skills.text.beforeNum}</h3> */}

      <div className="number">
        <h3 className="num">3</h3>
      </div>
      <h3>مستويات تقييم على مدار الدورة</h3>
    </div>
  );
};

const Certificates = () => {
  return (
    <div className="certificates sec header-sec" id="certificates">
      <Text />
      <h4 className="text-light sub-title">
        كل شهادة من سكولة بتوضح مستوى الطالب حسب أدائه وتطوره خلال الدورة{' '}
      </h4>
      <div className="img large-screen">
        <img src={convertToDirectLink('https://imgur.com/fmvyyHl')} alt="" />
      </div>
      <div className="img small-screen">
        <img src={convertToDirectLink('https://imgur.com/FflJBiM')} alt="" />
      </div>
    </div>
  );
};

export default Certificates;
