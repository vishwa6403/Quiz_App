import React, { useState } from 'react';
import './addQuiz.css';
import { Button, Card, Form } from 'react-bootstrap';
import { FaClipboardList, FaFileAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { addQuiz } from '../../../../redux/slice/adminSlice';

const AddQuiz = () => {
    const dispatch = useDispatch();

    const initialQuiz = {
        id: "",
        title: "",
        description: ""
    };

    const [quiz, setQuiz] = useState(initialQuiz);

    // Handle input change
    const handleChange = (e) => {
        setQuiz((prevQuiz) => ({
            ...prevQuiz,
            [e.target.name]: e.target.value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!quiz.title.trim() || !quiz.description.trim()) return;

        const newQuiz = {
            ...quiz,
            id: uuidv4() // ✅ Generate unique ID for each quiz
        };

        dispatch(addQuiz(newQuiz)); // ✅ Add quiz to Redux store
        setQuiz(initialQuiz); // ✅ Reset form after submission
    };


    return (
        <div className="quiz-form-container">
            {/* <Container> */}
            <Card className="quiz-form-card">
                <Card.Body>
                    <h3 className="quiz-title">Create a New Quiz</h3>
                    <p className="quiz-description">
                        Enter the quiz details below to create a new quiz.
                    </p>
                    <hr />
                    <Form onSubmit={(e) => handleSubmit(e)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSubmit(e);
                            }
                        }}>
                        {/* Quiz Title */}
                        <Form.Group className="mb-3">
                            <Form.Label>Quiz Title</Form.Label>
                            <div className="input-icon">
                                <FaClipboardList className="icon" />
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Enter quiz title"
                                    value={quiz.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Form.Group>
                        {/* Quiz Description */}
                        <Form.Group className="mb-3">
                            <Form.Label>Quiz Description</Form.Label>
                            <div className="input-icon">
                                <FaFileAlt className="icon" />
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    rows={2}
                                    placeholder="Enter quiz description"
                                    value={quiz.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Form.Group>

                        {/* Submit Button */}
                        <Button variant="primary" type="submit" className="submit-btn">
                            Create Quiz
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            {/* </Container> */}
        </div>
    );
};

export default AddQuiz;