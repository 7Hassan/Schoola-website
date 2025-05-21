import { Spin } from 'antd';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { getLocalizedPrices } from './data';

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

export const ImageLoader = ({ src = '/images/image-tmp.webp' }) => {
  return (
    <>
      <img
        src={src}
        alt="blur placeholder"
        className="image blur-image absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="loader-overlay absolute inset-0 flex items-center justify-center z-10 bg-white/70">
        <Spin size="large" />
      </div>
    </>
  );
};

export const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0.001,
      }
    );

    const current = imgRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div className="image-loader-wrapper relative">
      {!loaded && <ImageLoader />}
      <img
        ref={imgRef}
        src={isVisible ? src : ''}
        alt={alt}
        className={`${className} image main-image ${loaded ? 'show' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};




export const useLocalizedPrices = () => {
  const [country, setCountry] = useState(null);
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://ipapi.co/json/')
      .then((response) => {
        const userCountry = response.data.country_name;
        setCountry(userCountry);
        setPrices(getLocalizedPrices(userCountry));
      })
      .catch((error) => {
        console.error('Error fetching location', error);
        setCountry('Default');
        setPrices(getLocalizedPrices('Default'));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { country, prices, loading };
};

