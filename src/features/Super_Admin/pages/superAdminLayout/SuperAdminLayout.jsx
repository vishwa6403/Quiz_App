import React, { useState } from 'react';
import './superAdmin.css';
import Sidebar from '../../components/superadmin_sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './../../../../components/Navbar/Navbar';

const SuperAdminLayout = () => {
    const [selectedMenu, setSelectedMenu] = useState(() => localStorage.getItem("activeTab") || "dashboard");
    const location = useLocation().pathname;
    const hideSidebar =
        location.startsWith("/superadmin/user/") ||
        location.startsWith("/superadmin/quiz/");

    return (
        <div className="superadmin-container">
            {!hideSidebar && <Sidebar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />}
            <div className="content-wrapper">
                <Navbar panelName="Superadmin Panel" ownerName="John Doe" email="johndoe1203@gmail.com" />
                <div className="main-admin-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default SuperAdminLayout;