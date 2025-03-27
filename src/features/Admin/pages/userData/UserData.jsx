import React from 'react';
import './userData.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Container, ListGroup } from 'react-bootstrap';
import AdminNavbar from '../../../../components/admin_navbar/AdminNavbar';

const UserData = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;

    if (!user) {
        return <p className="text-center">No user details found.</p>;
    }

    return (
        <>
            <AdminNavbar />
            <Container className="user-data-container">
                <Card className="user-data-card">
                    <Card.Body>
                        <h3 className="text-center">{user.name}'s Details</h3>
                        <p className="text-muted text-center">{user.email}</p>
                        <h5 className="mt-4">Quizzes Played</h5>
                        <ListGroup className='row'>
                            {user.quizzes.map((quiz, index) => (
                                <ListGroup.Item key={index} className="quiz-list col-md-6">
                                    <strong>{quiz.quizName}</strong>
                                    <p>Start Time: {quiz.startTime}</p>
                                    <p>End Time: {quiz.endTime}</p>
                                    <p>Attempted: {quiz.attempted} | Correct: {quiz.correct} | Incorrect: {quiz.incorrect}</p>
                                    <p>Score: <span className="score">{quiz.score}</span></p>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default UserData;