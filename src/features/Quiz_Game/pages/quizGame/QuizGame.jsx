import React, { useEffect, useState } from 'react';
import './quizGame.css';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { storeResult } from '../../../../redux/slice/adminSlice';
import QuizNavbar from '../../components/quiz_navbar/QuizNavbar';
import { useNavigate } from 'react-router-dom';

const QuizGame = () => {
    const questions = [
        { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Tool"], correct: "Library" },
        { id: 2, question: "What is JSX?", options: ["Syntax", "Function", "Component", "Variable"], correct: "Syntax" },
    ];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizTimeLeft, setQuizTimeLeft] = useState(1 * 60); // 5 minutes
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    const [userAnswers, setUserAnswers] = useState(() =>
        questions.map((q) => ({
            questionId: q.id,
            selectedOption: null,
            correct: false,
        }))
    );

    useEffect(() => {
        let timer;
        if (quizTimeLeft > 0 && !quizSubmitted) {
            timer = setTimeout(() => setQuizTimeLeft(quizTimeLeft - 1), 1000);
        } else if (quizTimeLeft === 0 && !quizSubmitted) {
            handleSubmit(true); // Auto-submit when time runs out
        }

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [quizTimeLeft, quizSubmitted]);

    const handleAnswerSelect = (questionId, option) => {
        setUserAnswers((prevAnswers) =>
            prevAnswers.map((ans) =>
                ans.questionId === questionId
                    ? {
                        ...ans,
                        selectedOption: ans.selectedOption === option ? null : option, // Unselect if clicked twice
                        correct: option === questions.find((q) => q.id === questionId).correct, // Check correctness
                    }
                    : ans
            )
        );
        // Update Redux store immediately after selecting/deselecting an answer
        // dispatch(storeResult(userAnswers));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(null);
        }
    };


    const handleSubmit = ({ autoSubmit = false }) => {
        if (!quizSubmitted) {
            setQuizSubmitted(true); // Mark quiz as submitted

            dispatch(storeResult(userAnswers));
            console.log(userAnswers);

            localStorage.setItem("quizSubmitted", "true");

            toast.success(autoSubmit ? "Time's Up! Quiz Submitted." : "Quiz Submitted!");

            setTimeout(() => {
                navigate("/quiz/submitted");
            }, 3000);
        }
    };

    return (
        <div className="quiz-wrapper">
            <QuizNavbar quizName="React JS" timeLeft={quizTimeLeft} currentQuestion={currentQuestion + 1} totalQuestions={questions.length} />
            <div className="quiz-content">
                <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
                <div className="quiz-options">
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            className={`quiz-option ${userAnswers[currentQuestion].selectedOption === option ? "selected" : ""}`}
                            onClick={() => handleAnswerSelect(questions[currentQuestion].id, option)}
                            disabled={quizTimeLeft === 0} // Disable after time is up
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="quiz-buttons">
                    <button className="btn-previous" onClick={handlePrev} disabled={currentQuestion === 0}>
                        <FaArrowLeft /> Previous
                    </button>
                    {currentQuestion === questions.length - 1 ? (
                        <button className="btn-submit" onClick={handleSubmit}>
                            <FaCheck /> Submit
                        </button>
                    ) : (
                        <button className="btn-next" onClick={handleNext} disabled={quizTimeLeft === 0}>
                            Next <FaArrowRight />
                        </button>
                    )}
                </div>
            </div>
        </div >
    );
};

export default QuizGame;