import axios from 'axios';
import { toast } from 'react-toastify';

export const isValidStudent = (student) => {
  return student.name?.trim() && student.parentPhone?.trim();
};

export const submission = async (url, data, SetData, initialData) => {
  try {
    await axios.post(url, data);
    toast.success('تم الحفظ بنجاح', {
      autoClose: 500,
      position: 'top-center',
    });
    SetData(initialData);
  } catch (err) {
    console.error('فشل في إضافة :', err);
    toast.error(`${err} :حصل خطأ أثناء الحفظ`, { autoClose: 2000 });
  }
};


// react hook form, zood