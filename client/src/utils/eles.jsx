import { useRef, useState, useEffect } from 'react';

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

export const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.001,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      className={className}
    />
  );
};

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};

export default useDeviceType;
