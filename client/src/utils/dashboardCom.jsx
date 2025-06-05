import { Progress } from 'antd';
import { PieChart } from '@mui/x-charts/PieChart';
import { AvatarsGroupEle } from './dashboardEle';

export const TrackCard = () => {
  const percentage = 70;
  return (
    <div className="track-card">
      <div className="info-container row">
        <div className="icon-text row">
          <img src="/icons/businessIcon.png" alt="icon" />
          <div className="text">
            <div className="title">اسم الكورس اسم الكورس اسم الكورس</div>
            <div className="dis">
              وصف الكورس وصف الكورس وصف الكورس وصف الكورس وصف الكورس وصف الكورس
            </div>
          </div>
        </div>
        <div className="people">
          <AvatarsGroupEle />
        </div>
      </div>
      <div className="line-sessions row">
        <div className="line">
          <Progress
            percent={percentage}
            type="line"
            trailColor="rgba(202, 226, 240, 0.40)"
            showInfo={percentage === 100}
            strokeColor={percentage === 100 ? '#00E635' : '#FDD835'}
          />
        </div>
        <div className="sessions-counter">
          <strong>12/7</strong>
          حصة
        </div>
      </div>
    </div>
  );
};

export const PieChartEle = () => {
  const attendPercent = 8;
  const notAttendPercent = 5;
  return (
    <PieChart
      className="pie-chart"
      series={[
        {
          data: [
            {
              value: attendPercent,
              color: '#00E635',
            },
            {
              value: notAttendPercent,
              color: '#F13E3E',
            },
          ],
          paddingAngle: 1,
          cornerRadius: 7,
          startAngle: 0,
        },
      ]}
    />
  );
};
