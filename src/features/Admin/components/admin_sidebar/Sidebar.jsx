import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { FaChartBar, FaClipboardList, FaLayerGroup, FaPlus, FaUsers } from 'react-icons/fa';

const Sidebar = ({ setSelectedMenu, selectedMenu }) => {

    return (
        <div className="admin-sidebar">
            <h4 className="sidebar-title">Admin Panel</h4>
            <ul className="admin-sidebar-menu">
                <Link to="/admin" className={`${selectedMenu === "dashboard" ? "active" : ""}`} onClick={() => setSelectedMenu("dashboard")}>
                    <FaChartBar /> Dashboard
                </Link>
                <Link to="/admin/create-quiz" className={`${selectedMenu === "create-quiz" ? "active" : ""}`} onClick={() => setSelectedMenu("create-quiz")}>
                    <FaPlus /> Create Quiz
                </Link>
                <Link to="/admin/manage-quiz" className={`${selectedMenu === "manage-quiz" ? "active" : ""}`} onClick={() => setSelectedMenu("manage-quiz")}>
                    <FaLayerGroup /> Manage Quizzes
                </Link>
                <Link to="/admin/add-question" className={`${selectedMenu === "add-question" ? "active" : ""}`} onClick={() => setSelectedMenu("add-question")}>
                    <FaClipboardList /> Add Questions
                </Link>
                <Link to="/admin/manage-users" className={`${selectedMenu === "manage-users" ? "active" : ""}`} onClick={() => setSelectedMenu("manage-users")}>
                    <FaUsers /> Manage Users
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;