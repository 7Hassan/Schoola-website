import { useMemo, useState } from 'react';
import { CustomInput } from '../../components/dashboardSecs/customizeInput/customizeInput';
import './global.scss';
import { submission } from '../../components/dashboardSecs/customizeInput/variables';
import { API_BASE, normalizePhoneNumber } from '../../utils/variables';

const initialLocationState = {
  id: '',
  name: '',
  address: '',
  mapLink: '',
  contactPhone: '',
};

const isValidLocation = (location) => {
  return location.name?.trim() && location.address?.trim();
};

const AddLocation = () => {
  const [location, setLocation] = useState(initialLocationState);
  const isValid = useMemo(() => isValidLocation(location), [location]);
  const handleChange = (field) => (e) => {
    setLocation((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setLocation(initialLocationState);
  };

  const handleBlur = (field) => (value) => {
    if (field === 'contactPhone') {
      const phone = normalizePhoneNumber(value);
      setLocation((prev) => ({
        ...prev,
        [field]: phone,
      }));
    }
  };

  const handleSubmit = () => {
    const payload = {
      id: location.id,
      name: location.name,
      address: location.address,
      mapLink: location.mapLink,
      contactPhone: location.contactPhone,
    };

    submission(
      `${API_BASE}/locations`,
      payload,
      setLocation,
      initialLocationState
    );
  };

  return (
    <div>
      <main className="p-4 max-w-xl mx-auto">
        <div className="addingForm">
          <CustomInput
            value={location.name}
            name="name"
            placeholder="اسم المكان (نادي الهيئة ببوفؤاد)"
            onChange={handleChange('name')}
          />
          <CustomInput
            value={location.address}
            name="address"
            placeholder="العنوان الكامل"
            onChange={handleChange('address')}
          />

          <CustomInput
            value={location.mapLink}
            name="mapLink"
            placeholder="رابط الخريطة (Google Maps)"
            onChange={handleChange('mapLink')}
          />

          <CustomInput
            value={location.contactPhone}
            name="contactPhone"
            placeholder="رقم التواصل"
            onChange={handleChange('contactPhone')}
            onBlur={handleBlur('contactPhone')}
            type="number"
          />

          <button
            onClick={handleSubmit}
            className={`btn bg ${!isValid && 'disabled'}`}
            disabled={!isValid}
          >
            حفظ الموقع
          </button>
          <button onClick={handleCancel} className="btn cancel">
            تنظيف الحقول
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddLocation;
