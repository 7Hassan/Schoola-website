import { CustomInput } from '../customizeInput/customizeInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './popUp.scss';

export const ScheduleDays = ({ dayObj, index, setGroup }) => {
  const deleteFun = () => {
    setGroup((prev) => ({
      ...prev,
      schedule: prev.schedule.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="schedule-day">
      <CustomInput
        value={`${dayObj.day} (${dayObj.startTime} - ${dayObj.endTime})`}
        name={`schedule-${dayObj.day}`}
        readOnly
      />
      <button onClick={deleteFun} className="btn bg cancel">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
