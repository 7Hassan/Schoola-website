
import { API_BASE } from '../../../utils/variables';
import { CustomInput } from '../customizeInput/customizeInput';
import { CustomSelect } from '../customizeInput/customizeSelect';

const GroupSec = ({ student, setStudent }) => {
  const scheduleStrings = student.group?.schedule
    .map((s) => `${s.day} (${s.startTime} - ${s.endTime})`)
    .join(' - ');

  return (
    <>
      <CustomSelect
        name="group"
        placeholder="بدون جروب"
        value={student.group?.groupCode || ''}
        fetchUrl={`${API_BASE}/groups`}
        onSelect={(group) => setStudent((prev) => ({ ...prev, group }))}
        optionValue={(group) => group.groupCode}
        optionKey={(group) => group.groupCode}
        optionLabel={(group) => `${group.groupName}`}
      />
      {student.group?.studentsCount && (
        <CustomInput
          value={`عدد الطلاب: ${student.group.studentsCount}`}
          name="studentsCount"
          readOnly
        />
      )}
      {scheduleStrings && (
        <CustomInput value={scheduleStrings} name="schedule" readOnly />
      )}
    </>
  );
};

export default GroupSec;
