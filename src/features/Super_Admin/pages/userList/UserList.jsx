import React, { useState } from 'react';
import './userList.css';
import { Form, Pagination, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const UserList = () => {
    const navigate = useNavigate();

    const users = [
        {
            id: 1,
            name: "Alice Johnson",
            email: "alice@example.com",
            role: "User",
            status: "Active",
            admin: "John Admin",
            quizzes: [
                { quizName: "Math Quiz", score: 85 },
                { quizName: "Science Quiz", score: 90 },
            ],
        },
        {
            id: 2,
            name: "Bob Brown",
            email: "bob@example.com",
            role: "User",
            status: "Inactive",
            admin: "Jane Admin",
            quizzes: [
                { quizName: "History Quiz", score: 75 },
                { quizName: "Physics Quiz", score: 80 },
            ],
        },
        {
            id: 3,
            name: "Emma Wilson",
            email: "emma@example.com",
            role: "User",
            status: "Active",
            admin: "John Admin",
            quizzes: [
                { quizName: "English Quiz", score: 92 },
                { quizName: "Chemistry Quiz", score: 88 },
            ],
        },
    ];

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 2;

    // Filter users based on search input
    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <div className="users-page">
            <h2 className="user-title">Users Managed by Admin</h2>
            {/* Search Bar */}
            <div className="user-list-search-bar">
                <FaSearch />
                <Form.Control
                    type="text"
                    placeholder="Search Admins..."
                    className="user-search-bar"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {/* Users Table */}
            <Table striped bordered hover className="user-list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr
                            key={user.id}
                            onClick={() => navigate(`/superadmin/user/${user.id}`, { state: user })}
                            className="clickable-row"
                        >
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <span className={`user-status-badge user-status-${user.status.toLowerCase()}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td>{user.admin}</td>
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

export default UserList;