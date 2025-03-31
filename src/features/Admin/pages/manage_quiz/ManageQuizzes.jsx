import React, { useEffect } from 'react';
import './manageQuizzes.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaClipboardList, FaExclamationTriangle, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { getAllQuizzes } from '../../../../Services/Api';
import { addQuiz } from '../../../../redux/slice/adminSlice';

const ManageQuizzes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const quizzes = useSelector((state) => state.quizData?.quizzes);
    const quizList = useSelector((state) => state.quizData?.quizzes);
    const quizDataList = !!quizList ? quizList[0] : [];
    console.log("🚀 ~ ManageQuizzes ~ quizDataList:", quizDataList);

    const handleAllQuizzes = async () => {
        try {
            const result = await getAllQuizzes();
            const { code, message, data, status } = result;
            if (code === 200 && status === "OK") {
                dispatch(addQuiz(data));
            }

        } catch (error) {
            console.error("Error adding quiz:", error);
        }
    };

    useEffect(() => {
        handleAllQuizzes();
    }, []);
    return (
        <Container className="manage-quizzes-container">
            {/* Header with Icon */}
            <h2 className="page-title">
                <FaClipboardList className="header-icon" /> Manage Quizzes
            </h2>

            {/* Loading State */}
            {/* {loading && (
                <div className="loading-message">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p>Loading quizzes...</p>
                </div>
            )} */}

            {/* Error State */}
            {/* {error && (
                <div className="error-message">
                    <FaExclamationTriangle className="error-icon" />
                    <p>Error: {error}</p>
                </div>
            )} */}

            {/* If No Quizzes Exist */}
            {quizDataList?.length === 0 ? (
                <div className="no-quizzes-message">
                    <FaExclamationTriangle className="no-quiz-icon" />
                    <p>No quizzes available. Please add a new quiz.</p>
                </div>
            ) : (
                <Row className="quiz-row">
                    {quizDataList?.map((quiz) => (
                        <Col key={quiz?.id} className={`quiz-col ${quizDataList?.length === 1 ? "single-col" : ""}   `}>
                            <Card className="quiz-card">
                                <Card.Body>
                                    <Card.Title className="quiz-title">{quiz.quizName}</Card.Title>
                                    {/* <Card.Text className="quiz-description">{quiz.description}</Card.Text>
                                    <p className="quiz-questions">Total Questions: {quiz.totalQuestions}</p> */}
                                    <Button
                                        variant="primary"
                                        className="view-btn"
                                    // onClick={() => navigate(`/quizDetails/${quiz?.id}`)}
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