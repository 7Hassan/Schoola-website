import { PieChart } from '@mui/x-charts/PieChart';
import './rating.scss';

const PieChartEle = () => {
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

const Attendance = () => {
  return (
    <div className="attendance row">
      <div className="text">
        <p className="h3">غياب</p>
        <div className="dot-text row color">
          <span className="dot"></span>
          <p className="text-dt">
            حصص <span className="tx-color">4</span> غياب
          </p>
        </div>
        <div className="dot-text row red">
          <span className="dot"></span>
          <p className="text-dt">
            حصص <span className="tx-color">4</span> غياب
          </p>
        </div>
      </div>
      <div className="pie-chart-container">
        <PieChartEle />
      </div>
    </div>
  );
};

const Rating = () => {
  return (
    <div className="rating">
      <div className="container-rating">
        <div className="attendance-task row wrap">
          <Attendance />
          <Attendance />
        </div>
      </div>
    </div>
  );
};

export default Rating;
