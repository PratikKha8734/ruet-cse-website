import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Programs from '../pages/quickMenu/Programs';
import Curriculum from '../pages/quickMenu/Curriculum';
import Syllabus from '../pages/quickMenu/Syllabus';
import AcademicCalendar from '../pages/quickMenu/AcademicCalendar';
import ClassRoutine from '../pages/quickMenu/ClassRoutine';
import ExamRoutine from '../pages/quickMenu/ExamRoutine';
import CtRoutine from '../pages/quickMenu/CtRoutine';
import Notice from '../pages/quickMenu/Notice';
import NewsEvents from '../pages/quickMenu/NewsEvents';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminLogin from '../pages/admin/AdminLogin';
import ProtectedRoute from '../components/common/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/academic-calendar" element={<AcademicCalendar />} />
      <Route path="/class-routine" element={<ClassRoutine />} />
      <Route path="/examination-routine" element={<ExamRoutine />} />
      <Route path="/ct-routine" element={<CtRoutine />} />
      <Route path="/notices" element={<Notice />} />
      <Route path="/news-events" element={<NewsEvents />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
