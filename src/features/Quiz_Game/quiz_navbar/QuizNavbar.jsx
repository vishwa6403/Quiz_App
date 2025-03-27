import React from 'react';
import './quizNavbar.css';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

const QuizNavbar = ({ quizName, timeLeft, currentQuestion, totalQuestions }) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return (
        <nav className="quiz-navbar">
            <div className="quiz-navbar-content">
                <h2 className="quiz-name">{quizName}</h2>

                <div className="data-info">
                    <div className="quiz-timer">
                        <FaClock className=" timer-icon" />
                        <span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds} min</span>
                    </div>
                    <div className="quiz-progress">
                        <FaCheckCircle className=" progress-icon" />
                        <span>Question {currentQuestion} / {totalQuestions}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default QuizNavbar;