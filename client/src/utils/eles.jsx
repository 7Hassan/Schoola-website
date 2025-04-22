export const convertToDirectLink = (url) => {
  if (!url || url.includes('undefined')) return null;
  const id = url.split('/').pop();
  return `https://i.imgur.com/${id}.jpg`;
};

export const whatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const number = '201558570124';
  return `https://wa.me/${number}?text=${encodedMessage}`;
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
const baseRewards = {
  certificate: {
    img: '/icons/certificate-icon.png',
    text: 'شهادة اتمام المستوي',
  },
  project: {
    img: '/icons/final-project.png',
    text: 'مشروع نهائي',
  },
  business: {
    img: '/icons/businessIcon.png',
    text: 'حصص ريادة اعمال',
  },
  freelance: {
    img: '/images/freelance.png',
    text: 'حصص العمل الحر',
  },
};

function calculateDiscount(monthlyPrice, otherPrice) {
  const totalMonthlyPrice = monthlyPrice * 3;
  const discount = totalMonthlyPrice - otherPrice;
  return Math.floor((discount / totalMonthlyPrice) * 100);
}

const beginner = {
  id: 'beginner',
  title: 'مبتدئ',
  text: '',
  type: '',
  btnLik: '',
  sessions: 4,
  rewards: [],
  duration: '1 شهر - 4 حصة لايف',
  priceInfo: {
    preOffer: 0,
    discount: 0,
    price: 599,
    perClassPrice: Math.floor(599 / 4),
  },
};

const intermediate = {
  id: 'intermediate',
  title: 'متقدم',
  text: '',
  type: 'best',
  btnLik: '',
  sessions: 12,
  rewards: [baseRewards.certificate, baseRewards.project],
  duration: '3 شهور - 12 حصة لايف',
  priceInfo: {
    price: 1590,
    preOffer: beginner.priceInfo.price * 3,
    discount: calculateDiscount(beginner.priceInfo.price, 1590),
    perClassPrice: Math.floor(1590 / 12),
  },
};

const advanced = {
  id: 'advanced',
  title: 'محترف',
  text: 'المستوي المتقدم + ',
  type: '',
  btnLik: '',
  sessions: 24,
  rewards: [
    baseRewards.certificate,
    baseRewards.project,
    baseRewards.business,
    baseRewards.freelance,
  ],
  duration: '6 شهور - 24 حصة لايف',
  priceInfo: {
    price: 3190,
    preOffer: beginner.priceInfo.price * 6,
    discount: calculateDiscount(beginner.priceInfo.price, 1590),
    perClassPrice: Math.floor(3190 / 24),
  },
};

export const grades = [
  {
    text: 'صف',
    grade: '1-2',
    age: '7-8',
    images: {
      mobile: 'https://i.imgur.com/19URYli.jpg',
      laptop: 'https://i.imgur.com/hrCrHqf.jpg',
    },
    plans: [
      {
        info: { ...beginner },
        details: {
          level: 'التكنولوجيا حولنا',
          features: [
            'التعرف على أنواع التكنولوجيا في حياتنا اليومية',
            'اكتشاف فوائد التكنولوجيا',
          ],
        },
      },
      {
        info: { ...intermediate },
        details: {
          level: 'التكنولوجيا حولنا',
          features: [
            'التعرف على أنواع التكنولوجيا في حياتنا اليومية',
            'اكتشاف فوائد التكنولوجيا',
            'التعرف على أجزاء الكمبيوتر ووظائف كل منها',
            'كيف يعمل الكمبيوتر من الداخل',
            'التعرف على كيفية تواصل الأجهزة مع بعضها',
            'مقدمة عن البرمجة',
          ],
        },
      },
      {
        info: { ...advanced },
        details: {
          level: 'تعلم أساسيات البرمجة باستخدام Scratch',
          features: [
            'تعلم اساسيات البرمجة باستخدام البلوكات البرمجية',
            'تعزيز مهارات حل المشكلات والتفكير المنطقي',
            'إنشاء قصص وألعاب تفاعلية باستخدام الأكواد البرمجية',
          ],
        },
      },
    ],
  },
  {
    text: 'صف',
    grade: '3-4',
    age: '9-10',
    images: {
      mobile: 'https://i.imgur.com/r9IiJZ0.jpg',
      laptop: 'https://i.imgur.com/7FrarxL.jpg',
    },

    plans: [
      {
        info: { ...beginner },
        details: {
          level: 'تعلم البرمجة باستخدام Python',
          features: [
            'تصميم وبناء ألعاب باستخدام بايثون',
            'تعلم كيفية كتابة الأكواد لإنشاء ألعاب ثنائية الأبعاد (2D)',
          ],
        },
      },
      {
        info: { ...intermediate },
        details: {
          level: 'تعلم البرمجة باستخدام Python',
          features: [
            'تصميم وبناء ألعاب باستخدام بايثون',
            'تعلم كيفية كتابة الأكواد لإنشاء ألعاب ثنائية الأبعاد (2D)',
            'تطبيق مفاهيم البرمجة في مشاريع ألعاب تفاعلية',
            'فهم أساسيات التحكم في الحركات، الأصوات، والتفاعل',
            'تصميم واجهات تفاعلية للألعاب باستخدام بايثون',
          ],
        },
      },
      {
        info: { ...advanced },
        details: {
          level: 'الألعاب والذكاء الاصطناعي (Gaming with AI)',
          features: [
            'تعلم كيفية دمج الذكاء الاصطناعي في الألعاب',
            'تصميم شخصيات ألعاب ذكية باستخدام تقنيات AI',
            'تحسين تفاعل اللاعبين باستخدام الذكاء الاصطناعي',
            'استخدام خوارزميات التعلم الآلي لتحسين أداء الألعاب',
            'تخصيص تجارب اللعب باستخدام تقنيات AI',
          ],
        },
      },
    ],
  },
  {
    text: 'صف',
    grade: '5-6',
    age: '11-12',
    images: {
      mobile: 'https://i.imgur.com/W539pUa.jpg',
      laptop: 'https://i.imgur.com/ExyU0S2.jpg',
    },
    plans: [
      {
        info: { ...beginner },
        details: {
          level: 'البرمجة باستخدام بايثون',
          features: [
            'التعرف على أدوات بايثون المستخدمة في بناء الألعاب',
            'بناء وتصميم العاب احترافيه باستخدام بايثون',
          ],
        },
      },
      {
        info: { ...intermediate },
        details: {
          level: 'البرمجة باستخدام بايثون',
          features: [
            'التعرف على أدوات بايثون المستخدمة في بناء الألعاب',
            'بناء وتصميم العاب احترافيه باستخدام بايثون',
            'تطوير مهارات التفكير المنطقي وحل المشكلات من خلال البرمجة',
            'تعلم كيفية إضافة الرسوميات والتأثيرات الصوتية داخل الألعاب',
          ],
        },
      },
      {
        info: { ...advanced },
        details: {
          level: 'تصميم المواقع باستخدام Figma',
          features: [
            'التعرف على واجهة Figma وأدوات التصميم الأساسية',
            'تصميم صفحات ويب باستخدام العناصر البصرية (أزرار، نصوص، صور)',
            'إنشاء تصميمات تفاعلية باستخدام Figma',
            'تصميم واجهات وتجارب المستخدم (UI/UX)',
            'تصميم صفحات متجاوبة (Responsive Design)',
          ],
        },
      },
    ],
  },
  {
    text: 'صف',
    grade: '7-8',
    age: '13-14',
    images: {
      mobile: 'https://i.imgur.com/SCWcsjs.jpg',
      laptop: 'https://i.imgur.com/idopqmp.jpg',
    },

    plans: [
      {
        info: { ...beginner },
        details: {
          level: 'حل المشكلات باستخدام C++',
          features: [
            'فهم مفهوم حل المشكلات وتقسيمها إلى خطوات',
            'تطوير التفكير المنطقي والتحليلي',
          ],
        },
      },
      {
        info: { ...intermediate },
        details: {
          level: 'حل المشكلات باستخدام C++',
          features: [
            'فهم مفهوم حل المشكلات وتقسيمها إلى خطوات',
            'تطوير التفكير المنطقي والتحليلي',
            'التعرف على بيئات التطوير المتكاملة (IDEs)',
            'كتابة برامج باستخدام C++ لحل مشكلات متنوعة',
          ],
        },
      },
      {
        info: { ...advanced },
        details: {
          level: 'تطوير مواقع الويب باستخدام HTML و CSS',
          features: [
            'تعلم أساسيات HTML (الوسوم، الهيكل العام للصفحة)',
            'تنسيق الصفحات باستخدام CSS (الألوان، الخطوط، الهوامش)',
            'إنشاء صفحات ويب ثابتة باستخدام HTML وCSS',
            'تصميم صفحات متجاوبة تتكيف مع مختلف الأجهزة',
          ],
        },
      },
    ],
  },
  {
    text: 'صف',
    grade: '9-10',
    age: '15-16',
    images: {
      mobile: 'https://i.imgur.com/K1PjxhW.jpg',

      laptop: 'https://i.imgur.com/RcKk8RO.jpg',
    },
    plans: [
      {
        info: { ...beginner },
        details: {
          level: 'تطوير تطبيقات الموبايل المتقدمة',
          features: [
            'تعلم تقنيات التصميم المتقدم لتطبيقات الموبايل',
            'استخدام أدوات متقدمة لتطوير تطبيقات احترافية',
          ],
        },
      },
      {
        info: { ...intermediate },
        details: {
          level: 'تطوير تطبيقات الموبايل المتقدمة',
          features: [
            'تعلم تقنيات التصميم المتقدم لتطبيقات الموبايل',
            'استخدام أدوات متقدمة لتطوير تطبيقات احترافية',
            'تطوير تطبيقات تفاعلية مع واجهات مستخدم مخصصة',
            'تطبيق مفاهيم البرمجة الكائنية (OOP) في برمجة تطبيقات الموبايل',
          ],
        },
      },
      {
        info: { ...advanced },
        details: {
          level: 'تطوير الألعاب باستخدام Unity - مبتدئ',
          features: [
            'تعلم أساسيات Unity وبيئة تطوير الألعاب',
            'إنشاء ألعاب ثنائية الأبعاد باستخدام Unity',
            'فهم الفيزياء في الألعاب وكيفية تطبيقها',
            'مقدمة إلى البرمجة باستخدام C# في Unity',
          ],
        },
      },
    ],
  },
  {
    text: 'صف',
    grade: '11-12',
    age: '17-18',
    images: {
      mobile: 'https://i.imgur.com/8bVSrGZ.jpg',
      laptop: 'https://i.imgur.com/maKmN8A.jpg',
    },
    plans: [
      {
        info: { ...beginner },
        details: {
          level: 'علوم البيانات',
          features: [
            'مقدمة في علوم البيانات وكيفية فهم المعلومات من الأرقام',
            'تعلم الأدوات الأساسية مثل Python لبدء تحليل البيانات',
          ],
        },
      },
      {
        info: { ...intermediate },
        details: {
          level: 'علوم البيانات',
          features: [
            'مقدمة في علوم البيانات وكيفية فهم المعلومات من الأرقام',
            'تعلم الأدوات الأساسية مثل Python لبدء تحليل البيانات',
            'كيفية ترتيب وتنظيم البيانات لتصبح مفهومة',
            'استخدام الرسوم البيانية لتوضيح البيانات بشكل مبسط',
          ],
        },
      },
      {
        info: { ...advanced },
        details: {
          level: 'الذكاء الاصطناعي والتعلم الآلي',
          features: [
            'مقدمة في الذكاء الاصطناعي والتعلم الآلي',
            'تعلم خوارزميات التعلم الآلي الأساسية',
            'بناء نماذج تنبؤية باستخدام البيانات',
            'مقدمة في التعلم العميق والشبكات العصبية',
          ],
        },
      },
    ],
  },
];
