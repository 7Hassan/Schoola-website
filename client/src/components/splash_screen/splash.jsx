import React, { useEffect, useRef, useState } from 'react';
import { init } from 'ityped';
import './splash.scss';

const letterImages = [
  '/icons/chars/s.webp',
  '/icons/chars/c.webp',
  '/icons/chars/h.webp',
  '/icons/chars/o.webp',
  '/icons/chars/o.webp',
  '/icons/chars/l.webp',
  '/icons/chars/a.webp',
];

const Type = () => {
  return <div ref={textRef} className="typing-text" />;
};

const SplashScreen = () => {
  const textRef = useRef(null);
  const [text, setText] = useState(true);

  useEffect(() => {
    setText(false);
    if (text) return;
    init(textRef.current, {
      loop: false,
      startDelay: 1500,
      showCursor: true,
      typeSpeed: 40,
      strings: ['Coding for kids'],
      cursorChar: '',
    });
  }, [text]);

  return (
    <div className="splash-container">
      <div className="splash-text">
        {letterImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`letter-${index}`}
            className={`wave-letter letter-${index}`}
            style={{ '--i': index }}
          />
        ))}
      </div>
      <div className="container-text">
        <div ref={textRef} className="typing-text" />
      </div>
    </div>
  );
};

export default SplashScreen;
