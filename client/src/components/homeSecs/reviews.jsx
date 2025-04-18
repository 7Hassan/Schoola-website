import { useTranslation } from 'react-i18next';
import { InfiniteSlider } from '../../utils/eles';
import './reviews.scss';

const reviews = [
  {
    id: 1,
    name: 'دينا حسن',
    review:
      'شكرا يا باشمهندس حسن على مجهودك مع الولاد وشكرا لكل القائمين على الكورس. حقيقي تجربة مميزة والولاد مبسوطين جدا جدا واستفادوا جدا.',
    stars: 5,
  },
  {
    id: 2,
    name: 'أحمد خالد',
    review:
      'جزاكم الله خيرا على مجهود حضراتكم مع الأولاد .. البنات استفادوا جدا وكانوا مبسوطين.',
    stars: 4,
  },
  {
    id: 3,
    name: 'ندى أشرف',
    review:
      'فعلا انا بشكر مهندس حسن على مجهوده واهتمامه بالولاد. محمد ابني فعلا مبسوط جدا بالكورس وكان زعلان إن امبارح آخر يوم. وشكرا لمجهود الإدارة فعلا التنظيم كان جميل وكان فيه التزام بالمواعيد واهتمام بالولاد وفعلا الولاد تفاعلوا مع بعض ومع الكورس لدرجة إن مكنوش عايزينه يخلص. شكرا جزيلا ليكم جميعا.',
    stars: 5,
  },
  {
    id: 4,
    name: 'إيمان يوسف',
    review:
      'جزاكم الله خيرا ونفع بكم. الأولاد والبنات استفادوا جدا وكانوا مبسوطين.',
    stars: 4,
  },
  {
    id: 5,
    name: 'علي محمود',
    review:
      'شكرا جدا ليكم جميعا وشكرا بشمهندس حسن على تعبك ومجهودك مع الأولاد. الولاد اتبسطوا جدا وأكيد استفادوا.',
    stars: 4,
  },
  {
    id: 6,
    name: 'ريهام عبد الرحمن',
    review:
      'شكرا لحضراتكم على الكورس الرائع. شكرا بشمهندس حسن، كانت تجربة ممتعة للأولاد وانبسطوا واستفادوا جدا منها.',
    stars: 5,
  },
  {
    id: 7,
    name: 'نهى سامح',
    review:
      'ألف شكر لكل القائمين على الكورس. شكرا باشمهندس حسن، شكرا لكل اللي شاركوا في التنظيم. الولاد اتبسطوا جداااا وكان في استفادة الحمد لله. ونتمنى يكون في كورسات تانية تكملة للمجهود اللي بذلتوه مع الأولاد. ألف شكر للجميع.',
    stars: 4,
  },
  {
    id: 8,
    name: 'سارة هاني',
    review:
      'شكرا باشمهندس حسن على تعبك ومجهودك مع الأولاد وشكرا لأن حضرتك مقصرتش معانا بالمعلومات. شكرا للنقابة، ياريت تستمروا وبانتظار كورسات حلوة للأطفال.',
    stars: 4,
  },
  {
    id: 9,
    name: 'كريم عبد العزيز',
    review:
      'شكرا على تعبك ومجهودك مع الأولاد وربنا يكلل تعبك دائما بالتوفيق والتألق. وإن شاء الله نكون مستمرين على طول.',
    stars: 5,
  },
  {
    id: 10,
    name: 'ملك مصطفى',
    review:
      'جزاك الله خيرا على ما قدمته من جهد طوال فترة التدريب وعلى أمل يكون هناك تدريبات ثانية',
    stars: 4,
  },
  {
    id: 11,
    name: 'أميرة شريف',
    review: 'أشكركم على الكورس الجميل ده.',
    stars: 4,
  },
  {
    id: 12,
    name: 'شريف طارق',
    review: 'ألف شكر على تعبك ومجهودك. الولاد فعلا اتبسطوا جدا.',
    stars: 5,
  },
  {
    id: 13,
    name: 'ياسمين عمر',
    review:
      'شكرا لحضرتك على تعبك ومجهودك مع الأولاد. هما اتبسطوا واستفادوا جدا، وشكرا لكل القائمين على هذا العمل، وإن شاء الله نكون معاكم دائما في كل جديد بإذن الله.',
    stars: 5,
  },
  {
    id: 14,
    name: 'حنان نبيل',
    review: 'شكرا للمجهود الذي بذل وللمشاركين ونتمنى المزيد.',
    stars: 5,
  },
  {
    id: 15,
    name: 'محمود فوزي',
    review:
      'شكرا جدا يا باشمهندس لمجهودكم الأكثر من رائع مع الأولاد. وأسلوبكم الجميل اللي حببهم إنهم يتعلموا ويواظبوا على الحضور. وشكرا طبعا لباشمهندس .',
    stars: 4,
  },
  {
    id: 16,
    name: 'نرمين علاء',
    review: 'شكرا جدا للمجهود المبذول في انتظار المزيد للمتابعة.',
    stars: 4,
  },
  {
    id: 17,
    name: 'فاطمة سعد',
    review: 'شكرا على مجهودك مع الأولاد يا بشمهندس،... جزاكم الله خيرا.',
    stars: 5,
  },
  {
    id: 18,
    name: 'هيثم يحيى',
    review: 'شكرا على المجهود المبذول',
    stars: 4,
  },
];

const Review = ({ data }) => {
  return (
    <div className="container-item">
      <div className="text">{data.review}</div>
      <div className="info row">
        <h5>
          {data.name}
          <br />
          <span className="text-light"> ولي أمر</span>
        </h5>
        <div className="country">
          <img src="/images/egy.png" alt="img" loading="lazy" />
        </div>
      </div>
      <div className="stars row">
        {Array.from({ length: data.stars }).map((_, index) => (
          <img key={index} src="/icons/star.png" alt="star" loading="lazy" />
        ))}
      </div>
    </div>
  );
};

const Reviews = () => {
  const { t } = useTranslation();
  const clients = t('clients', { returnObjects: true });

  return (
    <div className="clients sec header-sec" id="clients">
      <h1 className="h2">{clients.headText}</h1>
      <div className="div-clients">
        <div className="slide-parent">
          <InfiniteSlider list={reviews} Item={Review} />
          <InfiniteSlider reversed={true} list={reviews} Item={Review} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
