


const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  
  return (
    <div
      key={course.id}
      className="course-card"
      onClick={() => navigate(`/courses/${course.slug}`)}
    >
      <h3>{course.name}</h3>
      <p>{course.description}</p>
    </div>
  );
};