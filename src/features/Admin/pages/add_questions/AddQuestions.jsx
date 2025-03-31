import React, { useState } from 'react';
import './addQuestions.css';
import { FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../../../../redux/slice/adminSlice';
import UploadExcel from '../../components/uploadExcel/UploadExcel';
import { toast } from 'react-toastify';

const AddQuestions = () => {
    const dispatch = useDispatch();
    const quesArray = useSelector((state) => state.quizData?.questions);
    console.log("🚀 ~ AddQuestions ~ quesArray:", quesArray);

    const [question, setQuestion] = useState({
        questionText: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (question?.questionText === "") {
            toast.error("Please enter a question");
        } else if (question?.optionA === "" || question?.optionB === "" || question?.optionC === "" || question?.optionD === "") {
            toast.error("Please fill the option");
        } else if (question?.correctOption === "") {
            toast.error("Please enter correct option");
        } else {
            // Convert option inputs to uppercase (A, B, C, D)
            if (["optionA", "optionB", "optionC", "optionD", "correctOption"].includes(name)) {
                setQuestion((prev) => ({
                    ...prev,
                    [name]: value.toUpperCase(),
                }));
            } else {
                setQuestion((prev) => ({
                    ...prev,
                    [name]: value,
                }));
            }
            toast.success("Question added successfully");

        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Question Added:", question);
        dispatch(addQuestion(question));
        setQuestion({ questionText: "", optionA: "", optionB: "", optionC: "", optionD: "", correctOption: "" });
    };

    return (
        <div className="add-questions-container">
            <h2 className="title">
                <FaPlusCircle className="icon" /> Add New Question
            </h2>

            <div className="add-questions-content">
                {/* Left Side: Question Form */}
                <form className="question-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Question</label>
                        <textarea name="questionText" value={question.questionText} onChange={handleChange} placeholder="Enter the question..." ></textarea>
                    </div>

                    <div className="options-container">
                        <div className="form-group">
                            <label>Option A</label>
                            <input type="text" name="optionA" value={question.optionA} onChange={handleChange} placeholder="Enter option A" />
                        </div>
                        <div className="form-group">
                            <label>Option B</label>
                            <input type="text" name="optionB" value={question.optionB} onChange={handleChange} placeholder="Enter option B" />
                        </div>
                        <div className="form-group">
                            <label>Option C</label>
                            <input type="text" name="optionC" value={question.optionC} onChange={handleChange} placeholder="Enter option C" />
                        </div>
                        <div className="form-group">
                            <label>Option D</label>
                            <input type="text" name="optionD" value={question.optionD} onChange={handleChange} placeholder="Enter option D" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Correct Option</label>
                        <select name="correctOption" value={question.correctOption} onChange={handleChange} >
                            <option value="">Select Correct Answer</option>
                            <option value="A">Option A</option>
                            <option value="B">Option B</option>
                            <option value="C">Option C</option>
                            <option value="D">Option D</option>
                        </select>
                    </div>

                    <div className="add-question-btn">
                        <button className="add-btn " type='submit'>
                            <FaPlusCircle /> Add Question
                        </button>
                    </div>
                </form>

                {/* Right Side: Upload Section */}
                <UploadExcel />
            </div>
        </div>
    );
};

export default AddQuestions;