import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Scratch from '../pages/scratch';
import ScratchHome from '../components/scratch/scratchHome/scratchHome';
import ScratchLessons from '../components/scratch/scratchLessons/scratchLessons';
import LessonDetails from '../components/scratch/LessonDetails/LessonDetails';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/login';
import AddStudent from '../subPages/dashboard/addstudent';
import GetStudents from '../subPages/dashboard/getStudents';
import AddLocation from '../subPages/dashboard/addLocation';
import AddCourse from '../subPages/dashboard/addCourse';
import AddGroup from '../subPages/dashboard/addGroup';
import CoursesTemp from '../pages/coursesTemp';
import Courses from '../pages/courses';
import Course from '../pages/course';
import LessonContent from '../components/courseSec/lessonContent/lessonContent';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />}>
      <Route index path="addstudent" element={<AddStudent />} />
      <Route index path="addgroup" element={<AddGroup />} />
      <Route index path="addlocation" element={<AddLocation />} />
      <Route index path="addcourse" element={<AddCourse />} />
      <Route index path="getstudents" element={<GetStudents />} />
    </Route>

    <Route path="/courses" element={<CoursesTemp />}>
      <Route index element={<Courses />} />
      <Route path=":courseId/*" element={<Course />}>
        <Route path="lesson/:lessonId" element={<LessonContent />} />
      </Route>
    </Route>
  </Routes>
);

export default RoutesConfig;
