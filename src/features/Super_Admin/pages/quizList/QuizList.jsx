import React, { useState } from 'react';
import "./quizList.css";
import { Form, Pagination, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const QuizList = () => {
    const navigate = useNavigate();

    const quizzes = [
        { id: 1, name: "JavaScript Basics", description: "Test your JS skills!", admin: "John Doe" },
        { id: 2, name: "React Mastery", description: "Advanced React questions", admin: "Jane Smith" },
        { id: 3, name: "Spring Boot Essentials", description: "Learn backend with Spring", admin: "Alice Johnson" },
    ];

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 2;

    const filteredQuizzes = quizzes.filter(
        (quiz) =>
            quiz.name.toLowerCase().includes(search.toLowerCase()) ||
            quiz.email.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentQuizzes = filteredQuizzes.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredQuizzes.length / usersPerPage);

    return (
        <div className="quiz-list-page">
            <h2 className="quiz-list-title">Quizzes</h2>
            <div className="quiz-list-search-bar">
                <FaSearch />
                <Form.Control
                    type="text"
                    placeholder="Search Admins..."
                    className="quiz-search-bar"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Table striped bordered hover className="quiz-list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Quiz Name</th>
                        <th>Description</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {currentQuizzes.map((quiz) => (
                        <tr key={quiz.id} onClick={() => navigate(`/superadmin/quiz/${quiz.id}`)} style={{ cursor: "pointer" }}>
                            <td>{quiz.id}</td>
                            <td>{quiz.name}</td>
                            <td>{quiz.description}</td>
                            <td>{quiz.admin}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Pagination */}
            <Pagination>
                {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default QuizList;