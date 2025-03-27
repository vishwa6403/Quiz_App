import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';
import Admin from './features/Admin/adminPanel/Admin';
import ManageUsers from './features/Admin/pages/manage_users/ManageUsers';
import UserData from './features/Admin/pages/userData/UserData';
import QuizDashboard from './features/Quiz_Game/quiz_dashboard/QuizDashboard';
import Instruction from './features/Quiz_Game/instructions/Instruction';
import QuizGame from './features/Quiz_Game/quizGame/QuizGame';
import SubmissionPage from './features/Quiz_Game/submissionPage/SubmissionPage';
import SuperAdminLayout from './features/Super_Admin/pages/superAdminLayout/SuperAdminLayout';
import Dashboard from './features/Super_Admin/pages/superAdminDashboard/Dashboard';
import AdminList from './features/Super_Admin/pages/adminList/AdminList';
import UserList from './features/Super_Admin/pages/userList/UserList';
import QuizList from './features/Super_Admin/pages/quizList/QuizList';
import QuizDetails from './features/Super_Admin/pages/quizDetails/QuizDetails';
import UserDetails from './features/Super_Admin/pages/userDetails/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* Super Admin Routes */}
        <Route path="/superadmin" element={<SuperAdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="admins" element={<AdminList />} />
          <Route path="users-list" element={<UserList />} />
          <Route path="user/:id" element={<UserDetails />} /> {/* ✅ Route for User Details */}
          <Route path="quizzes-list" element={<QuizList />} />
          <Route path="quiz/:id" element={<QuizDetails />} /> {/* ✅ Route for Quiz Details */}
        </Route>

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/userData/:id" element={<UserData />} />
        <Route path="/quiz/dashboard" element={<QuizDashboard />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/quiz-play" element={<QuizGame />} />
        <Route path="/quiz-submitted" element={<SubmissionPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
