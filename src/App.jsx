import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';
import SuperAdminLayout from './features/Super_Admin/pages/superAdminLayout/SuperAdminLayout';
import Dashboard from './features/Super_Admin/pages/superAdminDashboard/Dashboard';
import AdminList from './features/Super_Admin/pages/adminList/AdminList';
import UserList from './features/Super_Admin/pages/userList/UserList';
import QuizList from './features/Super_Admin/pages/quizList/QuizList';
import QuizDetails from './features/Super_Admin/pages/quizDetails/QuizDetails';
import UserDetails from './features/Super_Admin/pages/userDetails/UserDetails';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './features/Admin/adminLayout/AdminLayout';
import AdminDashboard from './features/Admin/pages/admin_dashboard/AdminDashboard';
import AddQuiz from './features/Admin/pages/add_quiz/AddQuiz';
import ManageQuizzes from './features/Admin/pages/manage_quiz/ManageQuizzes';
import AddQuestions from './features/Admin/pages/add_questions/AddQuestions';
import ManageUsers from './features/Admin/pages/manage_users/ManageUsers';
import UserData from './features/Admin/pages/userData/UserData';
import QuizDashboard from './features/Quiz_Game/pages/quiz_dashboard/QuizDashboard';
import QuizGame from './features/Quiz_Game/pages/quizGame/QuizGame';
import QuizLayout from './features/Quiz_Game/quizLayout/QuizLayout';
import Instruction from './features/Quiz_Game/pages/instructions/Instruction';
import SubmissionPage from './features/Quiz_Game/pages/submissionPage/SubmissionPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Super Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/superadmin" element={<SuperAdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="admins" element={<AdminList />} />
            <Route path="users-list" element={<UserList />} />
            <Route path="user/:id" element={<UserDetails />} />
            <Route path="quizzes-list" element={<QuizList />} />
            <Route path="quiz/:id" element={<QuizDetails />} />
          </Route>
        </Route>
        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          {/* Admin-specific routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="create-quiz" element={<AddQuiz />} />
            <Route path="manage-quiz" element={<ManageQuizzes />} />
            <Route path="add-question" element={<AddQuestions />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="userData/:id" element={<UserData />} />
          </Route>
        </Route>
        {/* Protected Quiz Routes */}
        <Route element={<ProtectedRoute />}>
          {/* Quiz-specific routes */}
          <Route path="/quiz" element={<QuizLayout />}>
            <Route path="dashboard" element={<QuizDashboard />} />
            <Route path="instructions" element={<Instruction />} />
            <Route path="quiz-play" element={<QuizGame />} />
            <Route path="submitted" element={<SubmissionPage />} />
          </Route>
        </Route>
        {/* Default Redirect for Undefined Routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
