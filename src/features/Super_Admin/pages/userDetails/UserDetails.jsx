import React from 'react';
import './userDetail.css';
import { useParams } from 'react-router-dom';
import Avatar from './../../../../components/avatar/Avatar';

const UserDetails = () => {
    const { id } = useParams(); // Get User ID from URL (React Router)

    // Sample User Data (Replace with API data)
    const userData = {
        id: id,
        name: "John Doe",
        email: "johndoe@example.com",
        role: "User",
        quizzesAttempted: [
            { name: "React Basics", score: "85%" },
            { name: "JavaScript Fundamentals", score: "90%" },
        ],
    };

    return (
        <div className="user-data-wrapper">
            <div className="user-data-container">
                {/* <h2>User Profile</h2> */}
                <Avatar name={userData.name} />
                <div className="user-info">
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Role:</strong> {userData.role}</p>
                </div>
                <h3>Quizzes Attempted</h3>
                <ul className="quiz-history">
                    {userData.quizzesAttempted.map((quiz, index) => (
                        <li key={index}>
                            {quiz.name} - <span className="score">{quiz.score}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserDetails;