import React, { useEffect } from 'react';
import './submissionPage.css';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaTimesCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const SubmissionPage = () => {
    const navigate = useNavigate();
    const results = useSelector((state) => state.quizData?.results || []);

    // Calculate quiz summary
    const totalQuestions = results.length;
    const correctAnswers = results.filter((r) => r.correct).length;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const score = `${correctAnswers} / ${totalQuestions}`;

    useEffect(() => {
        const isSubmitted = localStorage.getItem("quizSubmitted");

        if (!isSubmitted) {
            navigate("/quiz/dashboard"); // Redirect if accessed directly
        }

        // Prevent going back to quiz page after submission
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = function () {
            navigate("/quiz/dashboard");
        };
    }, [navigate]);
    return (
        <div className="quiz-submission-container">
            <div className="submission-card">
                <h2>Quiz Submitted Successfully! 🎉</h2>
                <p className="summary-text">Here’s how you did:</p>

                <div className="quiz-summary">
                    <div className="summary-box">
                        <FaCheckCircle className="summary-icon correct" />
                        <h3>{correctAnswers}</h3>
                        <p>Correct Answers</p>
                    </div>
                    <div className="summary-box">
                        <FaTimesCircle className="summary-icon incorrect" />
                        <h3>{incorrectAnswers}</h3>
                        <p>Incorrect Answers</p>
                    </div>
                    <div className="summary-box">
                        <h3>{totalQuestions}</h3>
                        <p>Total Questions</p>
                    </div>
                    <div className="summary-box">
                        <h3>{score}</h3>
                        <p>Your Score</p>
                    </div>
                </div>

                <div className="submission-actions">
                    {/* <button className="btn review-btn" onClick={() => navigate("/review")}>
                        Review Answers
                    </button> */}
                    <button className="btn home-btn" onClick={() => navigate("/quiz/dashboard")}>
                        <FaHome /> Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubmissionPage;