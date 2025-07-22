import { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { API_BASE } from '../../../utils/variables';
import StudentCard from './studentCard';
import './students.scss';

const fetchStudents = async (page, limit = 20) => {
  const res = await axios.get(`${API_BASE}/students`, {
    params: { page, limit },
  });
  return res.data;
};

const AllStudents = ({ students, fetchMoreStudents, hasMore, setStudents }) => {
  return (
    <InfiniteScroll
      dataLength={students.length}
      next={fetchMoreStudents}
      hasMore={hasMore}
      loader={<h4>جارٍ تحميل المزيد...</h4>}
      endMessage={<p style={{ textAlign: 'center' }}>✅ تم تحميل كل الطلاب</p>}
      scrollableTarget="scrollableDiv"
    >
      <div className="students">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            setStudents={setStudents}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

const Students = ({ students, setStudents, searchLoading, searchValue }) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // ✅ حالة تحميل عامة
  const LIMIT = 20;

  const loadInitialStudents = async () => {
    setIsLoading(true); // ✅ بداية التحميل
    try {
      const data = await fetchStudents(1, LIMIT);
      setStudents(data);
      setPage(2);
      if (data.length < LIMIT) setHasMore(false);
    } catch (err) {
      console.error('❌ فشل التحميل الأولي:', err);
      setHasMore(false);
    }
    setIsLoading(false); // ✅ انتهاء التحميل
  };

  const fetchMoreStudents = async () => {
    try {
      const data = await fetchStudents(page, LIMIT);
      setStudents((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
      if (data.length < LIMIT) setHasMore(false);
    } catch (err) {
      console.error('❌ فشل تحميل المزيد:', err);
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (searchValue) return;
    loadInitialStudents();
  }, [searchValue]);

  return (
    <div className="students-container" id="scrollableDiv">
      {isLoading && searchLoading && <p>جاري التحميل...</p>}
      {students.length < 1 && !isLoading && !searchLoading && (
        <p>لا يوجد طلاب</p>
      )}
      {students.length > 0 && (
        <AllStudents
          students={students}
          fetchMoreStudents={fetchMoreStudents}
          hasMore={hasMore}
          setStudents={setStudents}
        />
      )}
    </div>
  );
};

export default Students;
