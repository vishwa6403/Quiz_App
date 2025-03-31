import React from 'react';
import './quizDashboard.css';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaTrophy, FaHistory } from "react-icons/fa";
import { Container } from 'react-bootstrap';

const QuizDashboard = () => {
    const navigate = useNavigate();

    // Dummy Data
    const quizzes = [
        { id: 1, title: "Java Basics", questions: 10, time: "15 min" },
        { id: 2, title: "React Fundamentals", questions: 15, time: "20 min" },
        { id: 3, title: "Python Essentials", questions: 12, time: "18 min" },
        { id: 4, title: "Java Basics", questions: 10, time: "15 min" },
        { id: 5, title: "React Fundamentals", questions: 15, time: "20 min" },
        { id: 6, title: "Python Essentials", questions: 12, time: "18 min" },
    ];

    return (
        <div className="home-container">
            {/* <QuizNavbar quizTitle="JavaScript Basics" timeLeft="10:30" onExit={() => alert("Exit Quiz?")} /> */}
            {/* Welcome Section */}
            {/* <Header /> */}
            <div className="welcome-banner">
                <h2>Welcome to the Quiz Dashboard!</h2>
                <p>Test your knowledge and improve your skills with exciting quizzes.</p>
            </div>
            <Container>
                {/* Quiz List Section */}
                <div className="quiz-section">
                    <h3>Available Quizzes</h3>
                    <div className="quiz-list">
                        {quizzes.map((quiz) => (
                            <div key={quiz.id} className="quiz-card">
                                <h4>{quiz.title}</h4>
                                <p>{quiz.questions} Questions • {quiz.time}</p>
                                <button onClick={() => navigate(`/quiz/instructions`)}>
                                    <FaPlay /> Start Quiz
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Performance Section */}
                <div className="performance-section">
                    <h3>Your Performance</h3>
                    <div className="performance-cards">
                        <div className="performance-card">
                            <FaTrophy className="icon" />
                            <h4>Top Score</h4>
                            <p>92/100</p>
                        </div>
                        <div className="performance-card">
                            <FaHistory className="icon" />
                            <h4>Last Attempt</h4>
                            <p>85/100 - Java Basics</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default QuizDashboard;