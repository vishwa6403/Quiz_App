import React, { useEffect, useState } from 'react';
import './landingPage.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUserShield, FaUserTie } from 'react-icons/fa';

const LandingPage = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    useEffect(() => {
        localStorage.setItem("roleTab", role);
    }, [role]);
    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to the Quiz Management System</h1>
            <p className="landing-subtitle">Select your role to proceed</p>

            <div className="role-selection">
                <div className="role-card"
                    onClick={() => {
                        setRole("superadmin");
                        navigate("/login");
                    }}>
                    <FaUserShield className="role-icon superadmin-icon" />
                    <h3>Superadmin</h3>
                    <p>Manage all admins, users, and quizzes</p>
                </div>

                <div className="role-card"
                    onClick={() => {
                        setRole("admin");
                        navigate("/login");
                    }}>
                    <FaUserTie className="role-icon admin-icon" />
                    <h3>Admin</h3>
                    <p>Manage quizzes and user data</p>
                </div>

                <div className="role-card"
                    onClick={() => {
                        setRole("user");
                        navigate("/login");
                    }}>
                    <FaUser className="role-icon user-icon" />
                    <h3>User</h3>
                    <p>Take quizzes and view results</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;