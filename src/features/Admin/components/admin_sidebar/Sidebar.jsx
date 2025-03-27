import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { FaChartBar, FaClipboardList, FaLayerGroup, FaPlus, FaUsers } from 'react-icons/fa';

const Sidebar = ({ setSelectedMenu, selectedMenu }) => {

    return (
        <div className="admin-sidebar">
            <h4 className="sidebar-title">Admin Panel</h4>
            <ul className="sidebar-menu">
                <li className={`${selectedMenu === "dashboard" ? "active" : ""}`} onClick={() => setSelectedMenu("dashboard")}>
                    <Link ><FaChartBar /> Dashboard</Link>
                </li>
                <li className={`${selectedMenu === "create-quiz" ? "active" : ""}`} onClick={() => setSelectedMenu("create-quiz")}>
                    <Link ><FaPlus /> Create Quiz</Link></li>
                <li className={`${selectedMenu === "manage-quiz" ? "active" : ""}`} onClick={() => setSelectedMenu("manage-quiz")}><Link ><FaLayerGroup /> Manage Quizzes</Link>
                </li>
                <li className={`${selectedMenu === "add-question" ? "active" : ""}`} onClick={() => setSelectedMenu("add-question")}>
                    <Link ><FaClipboardList /> Add Questions</Link>
                </li>
                <li className={`${selectedMenu === "manage-users" ? "active" : ""}`} onClick={() => setSelectedMenu("manage-users")}>
                    <Link><FaUsers /> Manage Users</Link>
                </li>
                {/* <li className="logout">
                    <Link to="/login"><FaSignOutAlt /> Logout</Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar;