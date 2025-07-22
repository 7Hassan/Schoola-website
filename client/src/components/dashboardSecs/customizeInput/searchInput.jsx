import axios from 'axios';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

export const SearchInput = ({
  value,
  name,
  onChange = () => {},
  placeholder = '',
  type = 'text',
  onSelect = () => {},
  searchUrl = '',
  resultKey = 'data',
  renderItem = (item) => `${item.name}`,
  itemKey = (item) => item.id || item._id || item.name,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    if (selectedItem || !isFocused) return;

    const delay = setTimeout(() => {
      if (value.length > 1 && searchUrl) {
        setLoading(true);
        axios
          .get(`${searchUrl}?q=${value}`)
          .then((res) => {
            const results = res.data[resultKey] || res.data;
            setSuggestions(results);
          })
          .catch((err) => console.error(err))
          .finally(() => setLoading(false));
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [value, selectedItem, isFocused, searchUrl]);

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setSuggestions([]);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200);
  };

  return (
    <div className="relative mb-4 cu-input">
      <input
        className="searchInput"
        name={name}
        type={type}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onChange={(e) => {
          setSelectedItem(null);
          onChange(e);
        }}
      />

      {isFocused && !selectedItem && (
        <>
          {loading && <Spin size="small" className="spin-in" />}
          {!loading && suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((item) => (
                <li
                  key={itemKey(item)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  {renderItem(item)}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
