import { useState, useMemo } from 'react';
import { CustomInput } from '../../components/dashboardSecs/customizeInput/customizeInput';
import './global.scss';
import { submission } from '../../components/dashboardSecs/customizeInput/variables';
import { API_BASE } from '../../utils/variables';

const initialCourse = {
  name: '',
  ageRange: {
    min: '',
    max: '',
  },
  description: '',
  totalSessions: '',
  iconLink: '',
};

const isValidCourse = (course) =>
  course.name.trim() &&
  Number(course.totalSessions) > 0 &&
  Number(course.ageRange.min) > 5 &&
  Number(course.ageRange.max) < 19 &&
  Number(course.ageRange.min) <= Number(course.ageRange.max);

const AgeRange = ({ ageRange, setCourse }) => {
  const handleAgeChange = (key) => (e) => {
    setCourse((prev) => ({
      ...prev,
      ageRange: {
        ...prev.ageRange,
        [key]: e.target.value,
      },
    }));
  };

  return (
    <div className="row-input cu-input">
      <div className="label">الفئة العمرية:</div>
      <div className="row">
        <CustomInput
          value={ageRange.min}
          name="ageMin"
          placeholder="(أقل عمر مثلاً: 8)"
          type="number"
          onChange={handleAgeChange('min')}
        />
        <CustomInput
          value={ageRange.max}
          name="ageMax"
          placeholder="(أكبر عمر مثلاً: 14)"
          type="number"
          onChange={handleAgeChange('max')}
        />
      </div>
    </div>
  );
};

const AddCourse = () => {
  const [course, setCourse] = useState(initialCourse);
  const isValid = useMemo(() => isValidCourse(course), [course]);

  const handleChange = (field) => (e) => {
    setCourse((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setCourse(initialCourse);
  };

  const handleSubmit = () => {
    const payload = {
      ...course,
      totalSessions: Number(course.totalSessions),
      ageRange: {
        min: Number(course.ageRange.min),
        max: Number(course.ageRange.max),
      },
    };

    submission(`${API_BASE}/courses`, payload, setCourse, initialCourse);
  };

  return (
    <div>
      <main className="p-4 max-w-xl mx-auto">
        <div className="addingForm">
          <CustomInput
            value={course.name}
            name="name"
            placeholder="(اسم الكورس مثلاً: Scratch Beginners)"
            onChange={handleChange('name')}
          />

          <AgeRange ageRange={course.ageRange} setCourse={setCourse} />

          <CustomInput
            value={course.description}
            name="description"
            placeholder="(وصف مختصر للكورس)"
            onChange={handleChange('description')}
          />

          <CustomInput
            value={course.totalSessions}
            name="totalSessions"
            type="number"
            placeholder="(عدد الحصص مثلاً: 12)"
            onChange={handleChange('totalSessions')}
          />

          <CustomInput
            value={course.iconLink}
            name="iconLink"
            placeholder="(رابط أيقونة أو صورة للكورس)"
            onChange={handleChange('iconLink')}
          />

          <button
            onClick={handleSubmit}
            className={`btn bg ${!isValid && 'disabled'}`}
            disabled={!isValid}
          >
            حفظ الكورس
          </button>
          <button onClick={handleCancel} className="btn cancel">
            تنظيف الحقول
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddCourse;
