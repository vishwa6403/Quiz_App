import React from 'react';
import './quizDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const QuizDetails = () => {
    const { id } = useParams();  // Get Quiz ID from URL (React Router)
    const navigate = useNavigate();

    // Sample Quiz Data (Replace with API data)
    const quizData = {
        id: id,
        name: "JavaScript Basics",
        description: "A quiz covering JavaScript fundamentals, including ES6, closures, and event handling.",
        totalQuestions: 20,
        difficulty: "Intermediate",
        timeLimit: "15 mins",
        createdBy: "John Doe",
    };

    return (
        <div className="quiz-details-wrapper">
            <div className="quiz-details-container">
                <h2 className="quiz-title">{quizData.name}</h2>
                <p className="quiz-description">{quizData.description}</p>

                <div className="quiz-info">
                    <p><strong>📌 Total Questions:</strong> {quizData.totalQuestions}</p>
                    <p><strong>📊 Difficulty:</strong> {quizData.difficulty}</p>
                    <p><strong>⏳ Time Limit:</strong> {quizData.timeLimit}</p>
                    <p><strong>👤 Created By:</strong> {quizData.createdBy}</p>
                </div>
                <div className="quiz-back-btn">
                    <button onClick={() => navigate(-1)}>
                        <FaArrowLeft /> Back
                    </button>
                </div>
                {/* <button className="start-quiz-btn">Start Quiz 🚀</button> */}
            </div>
        </div>
    );
};

export default QuizDetails;