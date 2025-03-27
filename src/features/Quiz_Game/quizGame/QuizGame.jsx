import React, { useEffect, useState } from 'react';
import './quizGame.css';
import QuizNavbar from './../quiz_navbar/QuizNavbar';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { storeResult } from '../../../redux/slice/adminSlice';

const QuizGame = () => {
    const questions = [
        { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Tool"], correct: "Library" },
        { id: 2, question: "What is JSX?", options: ["Syntax", "Function", "Component", "Variable"], correct: "Syntax" },
    ];
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

    const handleAnswerSelect = (questionId, selectedOption) => {
        setUserAnswers((prevAnswers) =>
            prevAnswers.map((ans) =>
                ans.questionId === questionId ? { ...ans, selectedOption } : ans
            )
        );
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
        console.log(autoSubmit);
        if (!quizSubmitted) {
            setQuizSubmitted(true); // Mark quiz as submitted
            dispatch(storeResult(userAnswers));
            toast.success(autoSubmit ? "Time's Up! Quiz Submitted." : "Quiz Submitted!");
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
                            className={`quiz-option ${selectedOption === option ? "selected" : ""}`}
                            onClick={() => setSelectedOption(option)}
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