import Rating from '../components/dashboard/trackSecs/ratings';
import { TrackCard } from '../utils/dashboardCom';
import CalenderEle from '../components/dashboard/trackSecs/calender';
import '../styles/track.scss';

const Track = () => {
  return (
    <div className="track-page page">
      <div className="container-page">
        <div className="main-tracker row">
          <div className="tracker">
            <TrackCard />
            <Rating />
          </div>
          <CalenderEle />
        </div>
      </div>
    </div>
  );
};

export default Track;
