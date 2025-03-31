import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';
import { FaRegEnvelope, FaSignOutAlt, FaUser } from 'react-icons/fa';
import Avatar from '../avatar/Avatar';

const Navbar = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown on profile click
    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    // Hide dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="admin-navbar">
            <h2 className="admin-title">{props?.panelName}</h2>
            <div className="profile-section" ref={dropdownRef}>
                <div className="profile-info" onClick={toggleDropdown}>
                    {/* <FaUserCircle className="profile-icon" /> */}
                    <Avatar name={props?.ownerName} />
                    <span className="admin-name">{props?.ownerName}</span>
                </div>

                {showDropdown && (
                    <div className={`profile-dropdown ${showDropdown ? "open" : "hidden"}`}>
                        <ul>
                            <li>
                                <FaUser /> {props?.ownerName}
                            </li>
                            <li>
                                <FaRegEnvelope /> {props?.email}
                            </li>
                            <li className="logout" onClick={handleLogout}>
                                <FaSignOutAlt /> Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar; 