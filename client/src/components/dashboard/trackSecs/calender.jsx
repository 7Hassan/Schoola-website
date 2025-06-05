import { Calendar, theme } from 'antd';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './calender.scss';

const Session = () => {
  return (
    <div className="session row">
      <div className="time">
        11:30 <sup>PM</sup>
      </div>
      <div className="text">
        <div className="title">
          اسم الحصة اسم الحصة الحصة اسم الحصة اسم الحصة
        </div>
        <div className="dis">اسم الحصة اسم الحصة الحصة اسم الحصة اسم الحصة</div>
      </div>
      <div className="status"> انتهت</div>
    </div>
  );
};
const TodaySession = () => {
  return (
    <div className="today-session">
      <div className="h4">حصص اليوم</div>
      <div className="sessions">
        <Session />
        {/* <Session /> */}
      </div>
    </div>
  );
};

const CalenderEle = () => {
  return (
    <div className="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
      </LocalizationProvider>
      <TodaySession />
    </div>
  );
};

export default CalenderEle;
