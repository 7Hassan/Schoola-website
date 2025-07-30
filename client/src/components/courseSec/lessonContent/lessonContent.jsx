import { useParams } from 'react-router-dom';
import './lessonContent.scss';
const LessonContent = () => {
  const { lessonId } = useParams();

  return (
    <div className="lesson-content">
      <h2>محتوى الدرس رقم {lessonId}</h2>
      {/* ممكن هنا تجيب الداتا من API أو تعرض محتوى ثابت حسب id */}
    </div>
  );
};

export default LessonContent;
