// import React from 'react';
// // import '../styles/dashboard.scss';
// // import Track from './track';

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       fff
//       <main>
//         {/* <Track /> */}

//         {/*
//         <AvatarsGroup />
//         <LinearProgressEle />
//         <CircularProgressEle />
//         <ErrorImage />
//         <ImageEle />
//         <TapsEle />
//         <RateEle />
//         <TrackCard />
//         <Attendance />
//         */}

//         {/* https://ant.design/components/steps?theme=dark */}
//         {/* https://ant.design/components/upload?theme=dark */}
//         {/* https://ant.design/components/calendar?theme=dark */}
//         {/* https://ant.design/components/progress?theme=dark */}
//         {/* https://chakra-ui.com/docs/components/clipboard */}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
