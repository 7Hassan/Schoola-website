import { useState, useMemo } from 'react';
import { CustomSelect } from '../../components/dashboardSecs/customizeInput/customizeSelect';
import { CustomInput } from '../../components/dashboardSecs/customizeInput/customizeInput';
import { submission } from '../../components/dashboardSecs/customizeInput/variables';
import { SchedulePopup } from '../../components/dashboardSecs/addGroup/popUp';
import { ScheduleDays } from '../../components/dashboardSecs/addGroup/scheduleDays';
import { API_BASE } from '../../utils/variables';
import './global.scss';

const initialGroupState = {
  course: null,
  location: null,
  schedule: [],
  price: '',
  startDate: '',
  totalSessions: 0,
  notes: '',
};

const AddGroup = () => {
  const [group, setGroup] = useState(initialGroupState);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const isValid = useMemo(() => {
    const firstSchedule = group.schedule[0];
    return (
      group.course &&
      group.location &&
      firstSchedule?.day &&
      firstSchedule?.startTime &&
      firstSchedule?.endTime &&
      group.price &&
      group.price > 0 &&
      group.startDate &&
      group.totalSessions &&
      group.totalSessions > 0
    );
  }, [group]);

  const handleChange = (field) => (e) => {
    setGroup((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const payload = {
      course: group.course?._id || group.course?.id,
      location: group.location?._id || group.location?.id,
      schedule: group.schedule,
      price: Number(group.price),
      startDate: group.startDate,
      totalSessions: Number(group.totalSessions),
      notes: group.notes,
    };

    submission(`${API_BASE}/groups`, payload, setGroup, initialGroupState);
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <div className="addingForm">
        {showScheduleModal && (
          <SchedulePopup
            setShowScheduleModal={setShowScheduleModal}
            setGroup={setGroup}
          />
        )}

        <CustomSelect
          name="course"
          placeholder="اختر الكورس"
          value={group.course?.name || ''}
          fetchUrl={`${API_BASE}/courses`}
          onSelect={(course) => setGroup((prev) => ({ ...prev, course }))}
          optionValue={(course) => course.name}
          optionKey={(course) => course._id}
          optionLabel={(course) => course.name}
        />
        {!group.course && <p className="error-msg mt">⚠️ الكورس مطلوب</p>}

        <CustomSelect
          name="location"
          placeholder="اختر المكان"
          value={group.location?.name || ''}
          fetchUrl={`${API_BASE}/locations`}
          onSelect={(location) => setGroup((prev) => ({ ...prev, location }))}
          optionValue={(location) => location.name}
          optionKey={(location) => location._id}
          optionLabel={(location) => location.name}
        />
        {!group.location && <p className="error-msg mt">⚠️ المكان مطلوب</p>}

        {group.schedule.length > 0 &&
          group.schedule.map((s, index) => (
            <ScheduleDays
              key={s.day}
              dayObj={s}
              index={index}
              setGroup={setGroup}
            />
          ))}

        <button
          className="btn mb-20"
          onClick={() => setShowScheduleModal(true)}
        >
          إضافة موعد جديد
        </button>

        <CustomInput
          name="price"
          placeholder="السعر بالجنيه"
          type="number"
          value={group.price}
          onChange={handleChange('price')}
        />
        {(!group.price || group.price <= 0) && (
          <p className="error-msg mt">⚠️ السعر لازم يكون أكبر من صفر</p>
        )}

        <CustomInput
          name="startDate"
          placeholder="تاريخ بداية الكورس"
          type="date"
          value={group.startDate}
          onChange={handleChange('startDate')}
        />
        {!group.startDate && (
          <p className="error-msg mt">⚠️ تاريخ البداية مطلوب</p>
        )}

        <CustomInput
          name="totalSessions"
          placeholder="عدد الجلسات"
          type="number"
          value={group.totalSessions}
          onChange={handleChange('totalSessions')}
        />
        {(!group.totalSessions || group.totalSessions <= 0) && (
          <p className="error-msg mt">⚠️ عدد الجلسات لازم يكون أكبر من صفر</p>
        )}

        <CustomInput
          name="notes"
          placeholder="ملاحظات إضافية (اختياري)"
          value={group.notes}
          onChange={handleChange('notes')}
        />

        <button
          onClick={handleSubmit}
          className={`btn bg ${!isValid ? 'disabled' : ''}`}
          disabled={!isValid}
        >
          حفظ الجروب
        </button>
        <button
          onClick={() => setGroup(initialGroupState)}
          className="btn cancel"
        >
          تنظيف الحقول
        </button>
      </div>
    </main>
  );
};

export default AddGroup;
