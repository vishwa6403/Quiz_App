import React from 'react';
import './manageQuizzes.css';
import { useSelector } from 'react-redux';
import { FaClipboardList, FaExclamationTriangle, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ManageQuizzes = () => {
    const navigate = useNavigate();
    const quizzes = useSelector((state) => state.adminData?.quizzes);

    // Dummy Quiz Data
    // const quizzes = [
    //     {
    //         id: 1,
    //         title: "Java Basics",
    //         description: "A quiz covering fundamental Java concepts.",
    //         totalQuestions: 50,
    //     },
    //     // Uncomment the below object to test multiple quizzes
    //     {
    //         id: 2,
    //         title: "ReactJS Advanced",
    //         description: "Test your ReactJS knowledge with this quiz.",
    //         totalQuestions: 40,
    //     },
    // ];

    return (
        <Container className="manage-quizzes-container">
            {/* Header with Icon */}
            <h2 className="page-title">
                <FaClipboardList className="header-icon" /> Manage Quizzes
            </h2>

            {/* If No Quizzes Exist */}
            {quizzes.length === 0 ? (
                <div className="no-quizzes-message">
                    <FaExclamationTriangle className="no-quiz-icon" />
                    <p>No quizzes available. Please add a new quiz.</p>
                </div>
            ) : (
                <Row className="quiz-row">
                    {quizzes.map((quiz, index) => (
                        <Col key={quiz.id} className={`quiz-col ${quizzes.length === 1 ? "single-quiz" : ""}`}>
                            <Card className="quiz-card">
                                <Card.Body>
                                    <Card.Title className="quiz-title">{quiz.title}</Card.Title>
                                    <Card.Text className="quiz-description">{quiz.description}</Card.Text>
                                    <p className="quiz-questions">Total Questions: {quiz.totalQuestions}</p>
                                    <Button
                                        variant="primary"
                                        className="view-btn"
                                        onClick={() => navigate(`/quizDetails/${quiz.id}`)}
                                    >
                                        <FaEye /> View Quiz
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default ManageQuizzes;