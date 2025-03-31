import React from 'react';
import './instruction.css';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaClock, FaPlayCircle, FaTimesCircle } from 'react-icons/fa';

const Instruction = ({ quizTitle }) => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate("/quiz/quiz-play"); // Redirect to Quiz Play Page
    };

    return (
        <div className="instructions-container">
            <div className="instructions-card">
                <h2 className="instructions-title">Quiz Instructions</h2>
                {/* <p className="sub-heading">Please read the instructions before starting the quiz.</p> */}

                <ul className="instructions-list">
                    <li><FaCheckCircle className="icon success" /> Each quiz consists of multiple-choice questions.</li>
                    <li><FaClock className="icon warning" /> The quiz has a time limit. Answer quickly but carefully.</li>
                    <li><FaCheckCircle className="icon success" /> Each correct answer awards points.</li>
                    <li><FaTimesCircle className="icon danger" /> Incorrect answers do not deduct points.</li>
                    <li><FaCheckCircle className="icon success" /> Ensure a stable internet connection before starting.</li>
                </ul>

                <div className="button-container">
                    <button className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
                    <button className="start-btn" onClick={handleStartQuiz}>
                        <FaPlayCircle className="play-icon" /> Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Instruction;