import { useState } from 'react';
import { API_BASE } from '../../utils/variables';
import Students from '../../components/dashboardSecs/getStudents/students';
import Search from '../../components/dashboardSecs/getStudents/search';
import './getStudents.scss';

const GetStudents = () => {
  const [searchValue, setSearchValue] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `${API_BASE}/students/search?q=${searchValue}`;
  return (
    <div className="getStudents">
      <Search
        url={url}
        studentsCount={students.length}
        setStudents={setStudents}
        setLoading={setLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <Students
        searchValue={searchValue}
        students={students}
        setStudents={setStudents}
        searchLoading={loading}
      />
    </div>
  );
};

export default GetStudents;
