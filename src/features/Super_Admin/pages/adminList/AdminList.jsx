import React, { useState } from 'react';
import { Button, Form, Pagination, Table } from 'react-bootstrap';
import './adminList.css';
import { FaEdit, FaSearch, FaTrash } from 'react-icons/fa';

const AdminList = () => {

    const admins = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Superadmin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Inactive" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
        { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Admin", status: "Active" },
        { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Admin", status: "Inactive" },
        { id: 6, name: "Emma Wilson", email: "emma@example.com", role: "Admin", status: "Active" },
    ];

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const adminsPerPage = 5;

    // Filter admins based on search input
    const filteredAdmins = admins.filter((admin) =>
        admin.name.toLowerCase().includes(search.toLowerCase()) ||
        admin.email.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const indexOfLastAdmin = currentPage * adminsPerPage;
    const indexOfFirstAdmin = indexOfLastAdmin - adminsPerPage;
    const currentAdmins = filteredAdmins.slice(indexOfFirstAdmin, indexOfLastAdmin);
    const totalPages = Math.ceil(filteredAdmins.length / adminsPerPage);

    return (
        <div className="admin-list-container">
            <h2 className="admin-list-title">Admin List</h2>

            {/* Search Bar */}
            <div className="admin-list-search-bar">
                <FaSearch />
                <Form.Control
                    type="text"
                    placeholder="Search Admins..."
                    className="admin-search-bar"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Admins Table */}
            <Table striped bordered hover className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentAdmins.map((admin) => (
                        <tr key={admin.id}>
                            <td>{admin.id}</td>
                            <td>{admin.name}</td>
                            <td>{admin.email}</td>
                            <td>{admin.role}</td>
                            <td>
                                <span className={`status-badge status-${admin.status.toLowerCase()}`}>
                                    {admin.status}
                                </span>
                            </td>
                            <td>
                                {/* <Button variant="primary" size="sm" className="me-2">
                                    <FaEdit /> Edit
                                </Button> */}
                                <Button variant="danger" size="sm">
                                    <FaTrash /> Delete
                                </Button>
                            </td>
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

export default AdminList;