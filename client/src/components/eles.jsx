import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Student = () => {
  return (
    <div className="student">
      <div className="img">
        <img src="./public/images/student.jpeg" alt="img" loading="lazy" />
      </div>
      <div className="info">
        <div className="row">
          <h5>محمد حسن علي</h5>
          <div className="country">
            <img src="./public/images/egy.png" alt="img" loading="lazy" />
          </div>
        </div>
        <div className="row">
          <h5 className="text-light">١٢ سنة</h5>
        </div>
      </div>
    </div>
  );
};

export const Slider = ({ items }) => {
  return (
    <div className="slide-parent">
      <div className="slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          loop={true}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={800}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <SwiperSlide key={index}>
              <Student />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
