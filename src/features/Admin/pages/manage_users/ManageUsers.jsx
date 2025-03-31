import React from 'react';
import "./manageUsers.css";
import { FaExclamationTriangle, FaEye, FaUser, FaUsers } from 'react-icons/fa';
import { Button, Card, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageUsers = () => {
    const navigate = useNavigate();

    // Dummy Data
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            score: 85,
            quizzes: [
                { quizName: "Java Basics", startTime: "10:00 AM", endTime: "10:30 AM", attempted: 10, correct: 8, incorrect: 2, score: 80 },
                { quizName: "ReactJS", startTime: "12:00 PM", endTime: "12:40 PM", attempted: 12, correct: 10, incorrect: 2, score: 90 },
            ],
        },
        {
            id: 2,
            name: "Alice Smith",
            email: "alice@example.com",
            score: 78,
            quizzes: [
                { quizName: "Python Fundamentals", startTime: "02:00 PM", endTime: "02:45 PM", attempted: 15, correct: 12, incorrect: 3, score: 85 },
            ],
        },
    ];



    return (
        <Container className="manage-users-container">
            {/* Header with Icon */}
            <h2 className="page-title">
                <FaUsers className="header-icon" /> Manage Users
            </h2>

            {/* If No Users Exist */}
            {users.length === 0 ? (
                <div className="no-users-message">
                    <FaExclamationTriangle className="no-users-icon" />
                    <p>No users available.</p>
                </div>
            ) : (
                <Card className="user-list-card">
                    <Card.Body>
                        <Table striped bordered hover responsive>
                            <thead className="table-header">
                                <tr>
                                    <th>#</th>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Score</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td><FaUser className="user-icon" /> {user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.score}</td>
                                        <td>
                                            <Button
                                                variant="info"
                                                className="view-btn"
                                                onClick={() => navigate(`/admin/userData/${user.id}`, { state: { user } })}
                                            >
                                                <FaEye /> View
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            )}
        </Container>

    );
};

export default ManageUsers;