import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './gallery.scss';

const rawImages = [
  'https://imgur.com/FtSwvVG',
  'https://imgur.com/HPdjYuF',
  'https://imgur.com/undefined',
  'https://imgur.com/undefined',
  'https://imgur.com/iVi3F2K',
  'https://imgur.com/EMmVff4',
  'https://imgur.com/2OE3CFr',
  'https://imgur.com/undefined',
  'https://imgur.com/izrsmyl',
  'https://imgur.com/ufEWj0S',
  'https://imgur.com/DwWwf8y',
  'https://imgur.com/ykk4ZZF',
];

// ✅ دالة لتحويل روابط Imgur إلى روابط مباشرة
const convertToDirectLinks = (urls) => {
  return urls
    .filter((url) => url !== 'https://imgur.com/undefined') // استبعاد الروابط غير الصالحة
    .map((url) => {
      const id = url.split('/').pop(); // استخراج ID الصورة
      return `https://i.imgur.com/${id}.jpg`; // إنشاء الرابط المباشر
    });
};

const Header = () => {
  const { t } = useTranslation();
  const header = t('gallery.header', { returnObjects: true });

  return (
    <div className="header">
      <div className="row title">
        <img
          src="/icons/stars.png"
          alt="img"
          loading="lazy"
          className="right"
        />
        <h2>{header.title}</h2>
        <img src="/icons/stars.png" alt="img" loading="lazy" className="left" />
      </div>
      <h4 className="text-light sub-title">
        {header.subTitle}
        <br />
        <span className="text-high">{header.text}</span>
      </h4>
    </div>
  );
};

const Gallery = ({ speed = 10 }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const validImages = convertToDirectLinks(rawImages);
    setImages(validImages);
  }, []);

  return (
    <div id="students" className="students-gallery sec header-sec">
      <Header />
      <div
        className="gallery-container"
        style={{ '--scroll-speed': `${speed}s` }}
      >
        <div className="gallery">
          {images.length > 0 ? (
            images.map((src, index) => (
              <div key={index} className="image-container">
                <img src={src} alt={`Gallery Image ${index}`} />
              </div>
            ))
          ) : (
            <p>جاري تحميل الصور...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
