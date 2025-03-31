import React, { useState } from 'react';
import './admin.css';
import Sidebar from '../components/admin_sidebar/Sidebar';
import Navbar from '../../../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';


const AdminLayout = () => {
    const [selectedMenu, setSelectedMenu] = useState("dashboard");
    const location = useLocation().pathname;
    const hideSidebar = location.startsWith("/admin/userData/");

    return (
        <div className="admin-layout-container">
            {!hideSidebar && <Sidebar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />}
            <div className="content-wrapper">
                <Navbar panelName="Admin Panel" ownerName="John Doe" email="johndoe1203@gmail.com" />
                <div className="main-admin-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;