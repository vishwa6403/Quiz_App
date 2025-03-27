import React from 'react';
import "./dashboard.css";
import { FaChartBar, FaCheckCircle, FaUsers, FaUserShield } from 'react-icons/fa';

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <h2>Welcome, <span className="superadmin">Superadmin</span></h2>
            <p className="subtitle">Manage all admins, users, quizzes, and roles from here.</p>
            <div className="dashboard-stats">
                <div className="stat-card col-md-3">
                    <div className="icon-container">
                        <FaUserShield className="icon" />
                    </div>
                    <h3>10</h3>
                    <p>Total Admins</p>
                </div>
                <div className="stat-card col-md-3">
                    <div className="icon-container">
                        <FaUsers className="icon" />
                    </div>
                    <h3>150</h3>
                    <p>Total Users</p>
                </div>
                <div className="stat-card col-md-3">
                    <div className="icon-container">
                        <FaCheckCircle className="icon" />
                    </div>
                    <h3>500</h3>
                    <p>Quizzes Completed</p>
                </div>
            </div>
            {/* Recent Activity Section */}
            <div className="recent-activity">
                <h3>Recent Activity</h3>
                <ul>
                    <li>📌 <b>John Doe</b> completed <i>JavaScript Basics</i></li>
                    <li>📌 <b>Admin 1</b> added a new user <b>Alice Smith</b></li>
                    <li>📌 <b>Mary Jane</b> scored <b>85%</b> in <i>React Fundamentals</i></li>
                </ul>
            </div>
            {/* Graph Section */}
            <div className="graph-section">
                <FaChartBar className="graph-icon" />
                <p>📊 User Engagement is up by 30% this month!</p>
            </div>
        </div>
    );
};

export default Dashboard;