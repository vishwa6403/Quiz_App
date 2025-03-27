import React from 'react';
import './submissionPage.css';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaTimesCircle } from 'react-icons/fa';

const SubmissionPage = () => {
    const navigate = useNavigate();

    return (
        <div className="quiz-submission-container">
            <div className="submission-card">
                <h2>Quiz Submitted Successfully! 🎉</h2>
                <p className="summary-text">Here’s how you did:</p>

                <div className="quiz-summary">
                    <div className="summary-box">
                        <FaCheckCircle className="summary-icon correct" />
                        <h3>3</h3>
                        <p>Correct Answers</p>
                    </div>
                    <div className="summary-box">
                        <FaTimesCircle className="summary-icon incorrect" />
                        <h3>2</h3>
                        <p>Incorrect Answers</p>
                    </div>
                    <div className="summary-box">
                        <h3>5</h3>
                        <p>Total Questions</p>
                    </div>
                    <div className="summary-box">
                        <h3>3 / 5</h3>
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