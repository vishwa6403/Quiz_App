import React, { useState } from 'react';
import './addQuiz.css';
import { Button, Card, Form } from 'react-bootstrap';
import { FaClipboardList, FaFileAlt, FaListOl } from 'react-icons/fa';
import { addQuizApi, getAllQuizzes } from '../../../../Services/Api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addQuiz } from '../../../../redux/slice/adminSlice';

const AddQuiz = () => {
    const dispatch = useDispatch();
    const initialQuiz = {
        id: "",
        title: "",
        description: "",
        questionLimit: 1
    };

    const [quiz, setQuiz] = useState(initialQuiz);

    // Handle adding a quiz
    const handleAddQuiz = async () => {
        try {
            const result = await addQuizApi(quiz?.title, quiz?.questionLimit);
            console.log("Quiz Added:", result);
            toast.success("Quiz added successfully");
        } catch (error) {
            console.error("Error adding quiz:", error);
            toast.error("Failed to add quiz");
        }
    };



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

        handleAddQuiz(); // ✅ Add quiz to API and Redux store
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
                        <Form.Group className="mb-3">
                            <Form.Label>Question Limit</Form.Label>
                            <div className="input-icon">
                                <FaListOl className="icon" /> {/* Using FaListOl as an appropriate icon */}
                                <Form.Control
                                    type="number"
                                    name="questionLimit"
                                    min={1}  // Ensuring a minimum limit of 1 question
                                    placeholder="Enter question limit"
                                    value={quiz.questionLimit}
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