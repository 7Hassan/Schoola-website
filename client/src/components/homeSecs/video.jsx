import { useTranslation } from 'react-i18next';
import React from 'react';
import './video.scss';
import { Link } from 'react-router-dom';
import { whatsAppLink } from '../../utils/eles';

const VideoPlayer = () => {
  return (
    <div className="div-video">
      <div className="video-container">
        <iframe
          width="100%"
          height="100vh"
          src="https://www.youtube.com/embed/TLB0shmSQVQ?rel=0&modestbranding=1&controls=1&playsinline=1&vq=hd1080"
          title="YouTube Video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Video = () => {
  const { t } = useTranslation();
  const video = t('video', { returnObjects: true });

  return (
    <div id="video" className="video sec">
      <h2>{video.text}</h2>
      <VideoPlayer />
      <h3 className="text-video">
        {video.subtitle.text}
        <span> {video.subtitle.subText}</span>
      </h3>
      <div className="btns row">
        {video.buttons.map((button, index) => (
          <a
            href={whatsAppLink(button.msg)}
            className={button.class}
            key={index}
            target="_blank"
          >
            <div className="h5 navlink-text">{button.text}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Video;
