import { useState, useEffect } from 'react';
import axios from 'axios';
import './customizeInput.scss';

export const CustomSelect = ({
  value,
  name,
  onSelect = () => {},
  fetchUrl = '',
  optionLabel = (item) => item.name,
  optionValue = (item) => item.id || item.code,
  optionKey = (item) => item.id || item.code,
  placeholder = 'بدون',
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!fetchUrl) return;
    axios
      .get(fetchUrl)
      .then((res) => setItems(res.data))
      .catch((err) => console.error('فشل تحميل البيانات', err));
  }, [fetchUrl]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const selectedItem = items.find(
      (item) => String(optionValue(item)) === selectedValue
    );
    onSelect(selectedItem || null);
  };

  return (
    <div className="mb-4 cu-input">
      <select value={value} onChange={handleChange} name={name}>
        <option value="">{`--  ${placeholder}  --`}</option>
        {items.map((item) => (
          <option key={optionKey(item)} value={optionValue(item)}>
            {optionLabel(item)}
          </option>
        ))}
      </select>
    </div>
  );
};

export const Selection = ({ value, name, onSelect, options = [] }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onSelect(value);
  };

  return (
    <div className="mb-4 cu-input">
      <select value={value} onChange={handleChange} name={name}>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};
