import React from 'react';
import Header from '../header/Header';
import QuizDashboard from '../quiz_dashboard/QuizDashboard';

const Main = () => {
    return (
        <div className="quiz-main-cover">
            <Header />
            <QuizDashboard />
        </div>
    );
};

export default Main;