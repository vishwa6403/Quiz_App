import React, { useState } from 'react';
import './sidebar.css';
import { FaQuestionCircle, FaTachometerAlt, FaUsers, FaUserShield } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();
    const tab = localStorage.getItem("activeTab");
    const [activeTab, setActiveTab] = useState("dashboard");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem("activeTab", tab);
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div className="superadmin-sidebar">
            <h2 className="sidebar-title" onClick={() => { handleTabClick("dashboard"); }}>Quiz Superadmin</h2>
            <ul className="sidebar-menu">
                <Link to="/superadmin" className={`${tab === "dashboard" ? "active" : ""}`} onClick={() => handleTabClick("dashboard")}>
                    <span className="menu-icon">
                        <FaTachometerAlt className="icon" />
                    </span>
                    <span className="menu-text">Dashboard</span>
                </Link>
                <Link to="/superadmin/admins" className={`${tab === "admin" ? "active" : ""}`} onClick={() => handleTabClick("admin")}>
                    <span className="menu-icon">
                        <FaUserShield className="icon" />
                    </span>
                    <span className="menu-text">Admins</span>
                </Link>
                <Link to="/superadmin/users-list" className={`${tab === "user" ? "active" : ""}`} onClick={() => handleTabClick("user")}>
                    <span className="menu-icon">
                        <FaUsers className="icon" />
                    </span>
                    <span className="menu-text">Users</span>
                </Link>
                <Link to="/superadmin/quizzes-list" className={`${tab === "quiz" ? "active" : ""}`} onClick={() => handleTabClick("quiz")}>
                    <span className="menu-icon">
                        <FaQuestionCircle className="icon" />
                    </span>
                    <span className="menu-text">Quizzes</span>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;