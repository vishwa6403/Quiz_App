import React from 'react';
import './quizList.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const QuizDataList = () => {
    const quizzes = [
        { id: 1, title: "JavaScript Basics", description: "Test your JS knowledge!", totalQuestions: 10, timeLimit: "10 min" },
        { id: 2, title: "React Fundamentals", description: "Check your React skills!", totalQuestions: 15, timeLimit: "15 min" },
    ];

    const navigate = useNavigate();

    return (
        <div className="quiz-list-container">
            <h2>Available Quizzes</h2>
            <div className="quiz-cards">
                {quizzes.map((quiz) => (
                    <div className="quiz-card" key={quiz.id}>
                        <h3>{quiz.title}</h3>
                        <p className="quiz-description">{quiz.description}</p>
                        <p><strong>Questions:</strong> {quiz.questions}</p>
                        <p><strong>Time:</strong> {quiz.time}</p>
                        <button className="play-btn" onClick={() => navigate(`/quiz/instructions/${quiz.id}`)}>
                            Play
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizDataList;