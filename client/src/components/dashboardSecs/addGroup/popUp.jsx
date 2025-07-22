import { useState, useEffect } from 'react';
import { CustomInput } from '../customizeInput/customizeInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './popUp.scss';
import { Clock } from './clock';
import { Selection } from '../customizeInput/customizeSelect';
import { format, isBefore, isEqual } from 'date-fns';

export const SchedulePopup = ({ setShowScheduleModal, setGroup }) => {
  const [newSchedule, setNewSchedule] = useState({
    day: '',
    startTime: new Date(),
    endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
  });

  const [error, setError] = useState('');

  const addSchedule = () => {
    setError('');
    if (!newSchedule.day) {
      setError('يجب اختيار اليوم');
      return;
    }
    if (
      !isBefore(newSchedule.startTime, newSchedule.endTime) &&
      !isEqual(newSchedule.startTime, newSchedule.endTime)
    ) {
      setError('وقت البداية يجب أن يكون قبل وقت النهاية');
      return;
    }
    const diffInMs =
      newSchedule.endTime.getTime() - newSchedule.startTime.getTime();
    if (diffInMs < 60 * 60 * 1000) {
      setError('يجب أن يكون وقت النهاية بعد البداية بساعة على الأقل');
      return;
    }
    const isDuplicate = (prevSchedule) =>
      prevSchedule.some((s) => s.day === newSchedule.day);

    setGroup((prev) => {
      if (isDuplicate(prev.schedule)) {
        setError('لا يمكن تكرار نفس اليوم مرتين');
        return prev;
      }

      const updatedGroup = {
        ...prev,
        schedule: [
          ...prev.schedule,
          {
            ...newSchedule,
            startTime: format(new Date(newSchedule.startTime), 'hh:mm a'),
            endTime: format(new Date(newSchedule.endTime), 'hh:mm a'),
          },
        ],
      };
      setShowScheduleModal(false);
      setNewSchedule({
        day: '',
        startTime: new Date(),
        endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
      });

      return updatedGroup;
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="mb-20">إضافة موعد جديد</h3>

        <Selection
          label="اليوم"
          name="day"
          value={newSchedule.day}
          options={[
            { label: '-- اختر اليوم --', value: '' },
            { label: 'الأحد', value: 'الأحد' },
            { label: 'الاثنين', value: 'الاثنين' },
            { label: 'الثلاثاء', value: 'الثلاثاء' },
            { label: 'الأربعاء', value: 'الأربعاء' },
            { label: 'الخميس', value: 'الخميس' },
            { label: 'الجمعة', value: 'الجمعة' },
          ]}
          onSelect={(day) => setNewSchedule((prev) => ({ ...prev, day }))}
        />

        <Clock evTime={newSchedule} setEvTime={setNewSchedule} />

        {error && <p className="error-msg">{error}</p>}

        <div className="modal-buttons">
          <button className="btn bg" onClick={addSchedule}>
            إضافة
          </button>
          <button
            className="btn cancel"
            onClick={() => setShowScheduleModal(false)}
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};


