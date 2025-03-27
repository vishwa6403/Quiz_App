import React, { useEffect, useState } from 'react';
import './admin.css';
import Sidebar from '../components/admin_sidebar/Sidebar';
import AdminDashboard from '../pages/admin_dashboard/AdminDashboard';
import AddQuiz from '../pages/add_quiz/AddQuiz';
import AddQuestions from '../pages/add_questions/AddQuestions';
import ManageUsers from '../pages/manage_users/ManageUsers';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar';
import ManageQuizzes from '../pages/manage_quiz/ManageQuizzes';


const Admin = () => {
    const [selectedMenu, setSelectedMenu] = useState("dashboard");

    return (
        <div className="main-container">
            <Sidebar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
            <div className="content-wrapper">
                <AdminNavbar panelName="Admin Panel" ownerName="John Doe" email="johndoe1203@gmail.com" />
                <div className="main-admin-content">
                    {selectedMenu === "dashboard" && <AdminDashboard />}
                    {selectedMenu === "create-quiz" && <AddQuiz />}
                    {selectedMenu === "manage-quiz" && <ManageQuizzes />}
                    {selectedMenu === "add-question" && <AddQuestions />}
                    {selectedMenu === "manage-users" && <ManageUsers />}
                </div>
            </div>
        </div>
    );
};

export default Admin;