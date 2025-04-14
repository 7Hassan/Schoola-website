import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './about.scss';

const Mission = () => {
  return (
    <div className="container-div mission">
      <div className="sub-sec">
        <div className="title">
          <h1 className="title-text">رسالتنا</h1>
        </div>
        <p className="h4">
          نؤمن بأن تعليم التكنولوجيا أساسي في حياة الطفل تمامًا مثل المدرسة،
          ونعتنق أهمية إعداد الطفل لمستقبل يعتمد على التكنولوجيا والمهارات
          الناعمة، لنفتح لهم أبوابًا جديدة تمنحهم ميزة تنافسية مبكرة
          <br />
          <br />
          لهذا، نقدم مناهج متكاملة تجمع بين المهارات التقنية والمهارات الناعمة،
          حيث تُعدّ هذه المهارات حجر الأساس لمستقبل الطفل. بالإضافة إلى ذلك،
          نركز على المهارات الناعمة مثل العمل الجماعي، مهارات العرض، إدارة
          الوقت، والتفكير الإبداعي، مما يجعل الطفل مستعدًا للحياة العملية
          والمستقبل المهني.{' '}
        </p>
      </div>
    </div>
  );
};

const Vision = () => {
  return (
    <div className="container-div vision">
      {/* <img src="/images/mission.avif" alt="" className="about-img" /> */}
      <div className="sub-sec">
        <div className="title">
          <h1 className="title-text">رؤيتنا</h1>
        </div>
        <p className="h4">
          أن نكون الداعم الأول في حياة الطفل لاكتشاف قدراته في عالم التكنولوجيا،
          وتمكينه من مهارات لا يتم تدريسها ف المدارس وتفتح له أبواب المستقبل
          بثقة ووعي، من خلال تعليم عصري يجمع بين المهارات التقنية والشخصية،
          ويصنع جيلًا مستعدًا لتحديات الغد
        </p>
      </div>
    </div>
  );
};
const VisionMission = () => {
  return (
    <div className="vision-mission sec">
      {/* <h1 className="section-title">رؤيتنا و رسالتنا</h1> */}
      <Vision />
      <Mission />
    </div>
  );
};

export default VisionMission;
