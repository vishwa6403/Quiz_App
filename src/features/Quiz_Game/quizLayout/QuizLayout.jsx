import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const QuizLayout = () => {
    const location = useLocation().pathname;
    const hideNavbar = location.startsWith("/quiz/quiz-play");
    return (
        <div className="quiz-layout-container">
            <div className="content-wrapper">
                {!hideNavbar && <Navbar panelName="Quiz Panel" ownerName="John Doe" email="johndoe1203@gmail.com" />}
                <div className="main-admin-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default QuizLayout;