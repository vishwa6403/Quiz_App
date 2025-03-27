import React from 'react';
import "./dashboard.css";
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaClipboardList, FaLayerGroup, FaUsers } from 'react-icons/fa';


const AdminDashboard = () => {

    return (
        <div className="admin-container">
            {/* Main Content */}
            <div className="main-content">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card className="dashboard-card">
                                <Card.Body>
                                    <FaLayerGroup className="card-icon" />
                                    <h4>Total Quizzes</h4>
                                    <p>12</p>
                                    <Link className="card-link">View Details</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="dashboard-card">
                                <Card.Body>
                                    <FaUsers className="card-icon" />
                                    <h4>Total Users</h4>
                                    <p>58</p>
                                    <Link className="card-link">View Details</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="dashboard-card">
                                <Card.Body>
                                    <FaClipboardList className="card-icon" />
                                    <h4>Questions Added</h4>
                                    <p>120</p>
                                    <Link to="/admin/add-questions" className="card-link">Add More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AdminDashboard;