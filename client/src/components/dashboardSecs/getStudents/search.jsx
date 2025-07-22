import { useEffect, useState } from 'react';
import axios from 'axios';
import './search.scss';
const Search = ({
  url,
  studentsCount,
  setLoading,
  setStudents,
  searchValue,
  setSearchValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused) return;
    const delay = setTimeout(() => {
      if (searchValue) {
        console.log('search');
        setLoading(true);
        axios
          .get(url)
          .then((res) => {
            const results = res.data;
            setStudents(results);
          })
          .catch((err) => console.error(err))
          .finally(() => setLoading(false));
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [searchValue]);

  return (
    <div className="search-box">
      <div className="in-container">
        <input
          type="text"
          name="search"
          placeholder="ابحث باسم الطالب..."
          value={searchValue}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="st-count">
          <span>{studentsCount}</span> طالب
        </div>
      </div>
    </div>
  );
};

export default Search;
