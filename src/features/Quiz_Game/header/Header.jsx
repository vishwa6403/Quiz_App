import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import { FaCog, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://i.pravatar.cc/150", // Random avatar
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="profile-navbar">
            <h2 className="logo">QuizMaster</h2>
            <div className="profile-section" ref={dropdownRef}>
                <div className="profile-info" onClick={toggleDropdown}>
                    <img src={user.avatar} alt="User Avatar" className="avatar" />
                    <span className="user-name">{user.name}</span>
                </div>

                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li>
                                <FaTachometerAlt /> <a href="/dashboard">Dashboard</a>
                            </li>
                            <li>
                                <FaCog /> <a href="/settings">Settings</a>
                            </li>
                            <li className="logout" onClick={handleLogout}>
                                <FaSignOutAlt /> Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;