import React, { useState } from 'react';
import './login.css';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { FaEyeSlash, FaLock, FaRegEye, FaRegEyeSlash, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showRegister, setShowRegister] = useState(false);
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const roleTab = localStorage.getItem("roleTab");
    const [showPassword, setShowPassword] = useState(false);

    // Dummy users data for authentication
    const users = [
        { username: "superadmin", password: "superadmin123", role: "SUPERADMIN" },
        { username: "admin", password: "admin123", role: "ADMIN" },
        { username: "user", password: "user123", role: "USER" },
    ];

    const handleLogin = (e) => {
        e.preventDefault();

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem("role", user.role);
            // Redirect based on role
            if (user.role === "SUPERADMIN") {
                localStorage.setItem("token", "token");
                navigate("/superAdmin");
                localStorage.setItem("activeTab", "dashboard");
            } else if (user.role === "ADMIN") {
                localStorage.setItem("token", "token");
                navigate("/admin");
            } else if (user.role === "USER") {
                localStorage.setItem("token", "token");
                navigate("/quiz/dashboard");
            }
        } else {
            if (username === "") {
                toast.error("Username is required!");
            } else if (password === "") {
                toast.error("Password is required!");
            } else {
                toast.error("Enter correct credentials!");
            }
        }
    };

    // Handle registration input change
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    // Handle registration form submission
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Registered User:", registerData);
        setShowRegister(false);
        toast.success("Registration Successful! Now Login.");
    };

    return (
        <div className="login-container">
            <div className="card login-card">
                <div className="card-body">
                    <h2 className="login-title"> Login</h2>
                    {/* <p className="login-subtitle">Access your admin dashboard</p> */}
                    {/* {error && <p className="text-danger">{error}</p>} */}
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <FaUser className="input-icon" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="show-password" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    !showPassword ? <FaRegEye className="input-icon" /> : <FaRegEyeSlash className="input-icon" />
                                }
                            </div>
                        </div>

                        <button className="login-btn" type="submit">
                            Login
                        </button>
                    </form>
                    {roleTab === "user" && <p className="register-link">
                        Not registered?{" "}
                        <span onClick={() => setShowRegister(true)}>Register Here</span>
                    </p>}
                </div>
            </div>

            {/* Registration Modal */}
            <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={registerData.name}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={registerData.email}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={registerData.password}
                                onChange={handleRegisterChange}
                                required
                            />
                        </div>
                        <Button variant="primary" type="submit" className="register-btn">
                            Register
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;