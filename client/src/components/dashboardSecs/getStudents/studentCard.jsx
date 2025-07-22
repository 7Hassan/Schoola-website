import './studentCard.scss';
import EditDeleteBtns from '../subComponents/Edit&Delete/editDeleteBtns';
import { useState } from 'react';
import { CopyBtn } from '../../../utils/components';
import { API_BASE } from '../../../utils/variables';
import axios from 'axios';

const StudentCard = ({ student, setStudents }) => {
  const { id, name, parentPhone, age, group, note, paid, source } = student;
  const [copied, setCopied] = useState(false);

  const onEdit = () => {
    console.log('✏️ تعديل الطالب:', student);
  };

  const handleDeleteLocal = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const onDelete = async () => {
    const confirmDelete = window.confirm(`هل أنت متأكد من حذف ${name}؟`);
    if (confirmDelete) {
      try {
        await axios.delete(`${API_BASE}/students/${id}`);
        handleDeleteLocal(id);
      } catch (err) {
        console.error('❌ فشل حذف الطالب:', err);
      }
    }
  };

  return (
    <div className="student-card">
      <div className="info">
        <div className="name">{name}</div>
        <div className="phone">
          <p>
            📞 رقم ولي الأمر:{' '}
            <a href={`tel:${parentPhone}`} className="phone-link">
              {parentPhone}
            </a>
          </p>
          <CopyBtn value={parentPhone} setCopied={setCopied} copied={copied} />
        </div>

        {note && <p>📝 ملاحظة: {note}</p>}
        <p>🎂 العمر: {age}</p>
        {group && <p>📚 المجموعة: {group.groupName}</p>}
        {source && <p>📌 المصدر: {source}</p>}
        <p>{paid ? '✅ تم الدفع' : '❌ لم يتم الدفع'}</p>
      </div>

      <EditDeleteBtns onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default StudentCard;
