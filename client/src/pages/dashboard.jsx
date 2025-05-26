import React from 'react';
import '../styles/dashboard.scss';
import {
  AvatarsGroup,
  CircularProgressEle,
  ErrorImage,
  ImageEle,
  LinearProgressEle,
  PieChartEle,
  RateEle,
  TapsEle,
  TrackCard,
} from '../utils/dashboard';

const Dashboard = () => {
  return (
    <div>
      <main>
        <AvatarsGroup />
        <CircularProgressEle />
        <LinearProgressEle />
        <ErrorImage />
        <ImageEle />
        <TapsEle />
        <RateEle />
        <TrackCard />
        <PieChartEle />
        {/* https://ant.design/components/steps?theme=dark */}
        {/* https://ant.design/components/upload?theme=dark */}
        {/* https://ant.design/components/calendar?theme=dark */}
        {/* https://ant.design/components/progress?theme=dark */}
        {/* https://chakra-ui.com/docs/components/clipboard */}
      </main>
    </div>
  );
};

export default Dashboard;
