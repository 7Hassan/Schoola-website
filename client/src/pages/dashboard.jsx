import React from 'react';
import {
  AvatarsGroup,
  CircularProgressEle,
  ErrorImage,
  ImageEle,
  LinearProgressEle,
  RateEle,
  TapsEle,
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
