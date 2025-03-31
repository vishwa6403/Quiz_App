import React from 'react';
import './userData.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from './../../../../components/avatar/Avatar';

const UserData = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;

    if (!user) {
        return <p className="text-center">No user details found.</p>;
    }

    return (
        <div className="user-details-container">
            <div className="card user-details-card">
                <div className='card-body'>
                    <div className="user-data">
                        <Avatar name={user.name} />
                        <h3 className="text-center">{user.name}'s Details</h3>
                        <p className="text-muted text-center">{user.email}</p>
                    </div>
                    <h5 className="user-quiz-title text-center">Quizzes Played</h5>
                    <div className='row'>
                        {user.quizzes.map((quiz, index) => (
                            <div key={index} className="quiz-list col-md-6">
                                <div className="list-item">
                                    <strong>{quiz.quizName}</strong>
                                    <p>Start Time: {quiz.startTime}</p>
                                    <p>End Time: {quiz.endTime}</p>
                                    <p>Attempted: {quiz.attempted} | Correct: {quiz.correct} | Incorrect: {quiz.incorrect}</p>
                                    <p>Score: <span className="score">{quiz.score}</span></p>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-12 user-data-back-btn">
                            <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserData;