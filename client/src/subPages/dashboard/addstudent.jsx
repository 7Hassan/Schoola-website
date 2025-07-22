import { useMemo, useState } from 'react';
import { CustomInput } from '../../components/dashboardSecs/customizeInput/customizeInput';
import {
  CustomSelect,
  Selection,
} from '../../components/dashboardSecs/customizeInput/customizeSelect';
import './global.scss';
import {
  isValidStudent,
  submission,
} from '../../components/dashboardSecs/customizeInput/variables';
import { API_BASE, normalizePhoneNumber } from '../../utils/variables';
import { SearchInput } from '../../components/dashboardSecs/customizeInput/searchInput';
import GroupSec from '../../components/dashboardSecs/addStudent/groupSec';

const initialStudentState = {
  id: '',
  name: '',
  parentPhone: '',
  age: '',
  email: '',
  changes: null,
  source: '',
  group: null,
  paid: false,
  info: '',
  note: '',
  studentCode: '',
};

const AddStudent = () => {
  const [student, setStudent] = useState(initialStudentState);
  const isValid = useMemo(
    () => isValidStudent(student),
    [student.name, student.parentPhone]
  );
  const handleChange = (field) => (e) => {
    setStudent((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
  const handleCancel = () => {
    setStudent(initialStudentState);
  };

  const handleBlur = (field) => (value) => {
    const phone = normalizePhoneNumber(value);
    setStudent((prev) => ({
      ...prev,
      [field]: phone,
    }));
  };

  const handelSubmit = () => {
    const payload = {
      id: student.id,
      name: student.name,
      parentPhone: student.parentPhone,
      age: Number(student.age),
      email: student.email,
      source: student.source,
      group: student.group?._id || student.group?.id || null,
      paid: student.paid,
      info: student.info,
      note: student.note,
    };
    submission(
      `${API_BASE}/students`,
      payload,
      setStudent,
      initialStudentState
    );
  };

  const handleStudentSelect = (selected) => {
    setStudent({
      id: selected._id,
      name: selected.name,
      changes: selected.changes,
      parentPhone: selected.parentPhone,
      age: selected.age,
      email: selected.email,
      source: selected.source,
      group: selected.group,
      paid: selected.paid,
      info: selected.info,
      note: selected.note,
      studentCode: selected.studentCode,
    });
  };

  return (
    <div>
      <main className="p-4 max-w-xl mx-auto">
        <div className="addingForm">
          <SearchInput
            name="name"
            placeholder="اكتب اسم الطفل أو بحث"
            value={student.name}
            onChange={handleChange('name')}
            searchUrl={`${API_BASE}/students/search`}
            renderItem={(student) => (
              <span>
                <strong>{student.name}</strong> — {student.parentPhone}
              </span>
            )}
            itemKey={(student) => student.studentCode}
            onSelect={(student) => handleStudentSelect(student)}
          />
          {!student.name?.trim() && (
            <p className="error-msg mt">⚠️ الاسم مطلوب</p>
          )}
          <CustomInput
            value={student.note}
            name="note"
            placeholder="ملاحظات إضافية (اختياري)"
            onChange={handleChange('note')}
          />
          {!student.group && !student.note?.trim() && (
            <p className="error-msg mt">
              ⚠️ يرجى كتابة ملاحظة توضح تبعية الطفل إذا لم يتم تحديد جروب
            </p>
          )}

          <CustomInput
            value={student.parentPhone}
            name="parentPhone"
            placeholder="أدخل رقم الهاتف"
            onChange={handleChange('parentPhone')}
            onBlur={handleBlur('parentPhone')}
            type="number"
          />
          {!student.parentPhone?.trim() && (
            <p className="error-msg mt">⚠️ رقم الهاتف مطلوب</p>
          )}
          <CustomInput
            value={student.age}
            name="age"
            type="number"
            placeholder="أدخل عمر الطفل"
            onChange={handleChange('age')}
          />
          <GroupSec student={student} setStudent={setStudent} />
          <Selection
            label="حالة الدفع"
            name="paid"
            value={student.paid}
            options={[
              { label: '❌ مدفـعش', value: false },
              { label: '✅ دافع', value: true },
            ]}
            onSelect={(paid) => setStudent((prev) => ({ ...prev, paid }))}
          />

          <CustomInput
            value={student.email}
            name="email"
            placeholder="البريد الإلكتروني (اختياري)"
            onChange={handleChange('email')}
          />

          <CustomInput
            value={student.source}
            name="source"
            placeholder="المصدر الي جاي منه الطفل؟ (اختياري)"
            onChange={handleChange('source')}
          />
          <CustomInput
            value={student.info}
            name="info"
            placeholder="معلومات إضافية عن الطفل (مثلاً: اهتماماته، تحدياته)"
            onChange={handleChange('info')}
          />
          {student.studentCode && (
            <CustomInput
              value={student.studentCode}
              name="studentCode"
              placeholder="كود الطالب"
              readOnly={true}
            />
          )}

          <button
            onClick={handelSubmit}
            className={`btn bg ${!isValid && 'disabled'}`}
            disabled={!isValid}
          >
            حفظ الطالب
          </button>
          <button onClick={handleCancel} className="btn cancel">
            تنظيف الحقول
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddStudent;
