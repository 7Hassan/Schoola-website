import dayjs from 'dayjs';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { format } from 'date-fns';
import './clock.scss';

const Start = ({ clock, setClock, changeTime, startTime }) => {
  const { status, view } = clock;

  const handleClick = (view) =>
    setClock({ time: startTime, view, status: 'startTime' });

  const handleClickZone = (zone) => {
    const date = startTime.toDate();
    const hours = date.getHours();

    if (zone === 'am' && hours >= 12) date.setHours(hours - 12);
    if (zone === 'pm' && hours < 12) date.setHours(hours + 12);

    const updated = dayjs(date);
    changeTime(date);
    if (status === 'startTime') setClock({ ...clock, time: updated });
  };

  return (
    <div className="start">
      <span className="text">تبدا في</span>
      <div className="time">
        <div className="hours">
          <span
            className={`text ${
              status === 'startTime' && view === 'hours' ? 'clicked' : ''
            }`}
            onClick={() => handleClick('hours')}
          >
            {format(startTime.toDate(), 'hh')}
          </span>
        </div>
        <div className="column">:</div>
        <div className="minutes">
          <span
            className={`text ${
              status === 'startTime' && view === 'minutes' ? 'clicked' : ''
            }`}
            onClick={() => handleClick('minutes')}
          >
            {format(startTime.toDate(), 'mm')}
          </span>
        </div>
        <div className="AM-PM">
          <span
            className={`text ${startTime.hour() < 12 ? 'clicked' : ''}`}
            onClick={() => handleClickZone('am')}
          >
            AM
          </span>
          <span
            className={`text ${startTime.hour() >= 12 ? 'clicked' : ''}`}
            onClick={() => handleClickZone('pm')}
          >
            PM
          </span>
        </div>
      </div>
    </div>
  );
};

const End = ({ clock, setClock, changeTime, endTime }) => {
  const { status, view } = clock;

  const handleClick = (view) =>
    setClock({ time: endTime, view, status: 'endTime' });

  const handleClickZone = (zone) => {
    const date = endTime.toDate();
    const hours = date.getHours();

    if (zone === 'am' && hours >= 12) date.setHours(hours - 12);
    if (zone === 'pm' && hours < 12) date.setHours(hours + 12);

    const updated = dayjs(date);
    changeTime(date);
    if (status === 'endTime') setClock({ ...clock, time: updated });
  };

  return (
    <div className="end">
      <span className="text">تنتهي في</span>
      <div className="time">
        <div className="hours">
          <span
            className={`text ${
              status === 'endTime' && view === 'hours' ? 'clicked' : ''
            }`}
            onClick={() => handleClick('hours')}
          >
            {format(endTime.toDate(), 'hh')}
          </span>
        </div>
        <div className="column">:</div>
        <div className="minutes">
          <span
            className={`text ${
              status === 'endTime' && view === 'minutes' ? 'clicked' : ''
            }`}
            onClick={() => handleClick('minutes')}
          >
            {format(endTime.toDate(), 'mm')}
          </span>
        </div>
        <div className="AM-PM">
          <span
            className={`text ${endTime.hour() < 12 ? 'clicked' : ''}`}
            onClick={() => handleClickZone('am')}
          >
            AM
          </span>
          <span
            className={`text ${endTime.hour() >= 12 ? 'clicked' : ''}`}
            onClick={() => handleClickZone('pm')}
          >
            PM
          </span>
        </div>
      </div>
    </div>
  );
};

export const Clock = ({ evTime, setEvTime }) => {
  const evTimeObj = {
    startTime: dayjs(evTime.startTime),
    endTime: dayjs(evTime.endTime),
  };
  const { startTime, endTime } = evTimeObj;

  const [clock, setClock] = useState({
    time: startTime,
    view: 'hours',
    status: 'startTime',
  });

  const handleChange = (time) => {
    setClock({ ...clock, time });
    setEvTime((prev) => ({
      ...prev,
      [clock.status]: new Date(time.toDate()),
    }));
  };

  return (
    <div className="clock">
      <div className="container-clock">
        <Start
          clock={clock}
          setClock={setClock}
          startTime={startTime}
          changeTime={(date) =>
            setEvTime((prev) => ({ ...prev, startTime: date }))
          }
        />
        <End
          clock={clock}
          setClock={setClock}
          endTime={endTime}
          changeTime={(date) =>
            setEvTime((prev) => ({ ...prev, endTime: date }))
          }
        />
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeClock
          value={clock.time}
          onChange={handleChange}
          views={[clock.view]}
        />
      </LocalizationProvider>
    </div>
  );
};
