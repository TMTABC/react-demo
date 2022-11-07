import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false);
    // const handleClose = () => setcollapsed(false);
    // const handleShow = () => setcollapsed(true);
    return (
        <div className="admin-container">

            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />


            </div>

            <div className="admin-content" >
                <div className="admin-header">
                    <FaBars onClick={() => setcollapsed(!collapsed)}></FaBars>
                </div>
                <div className="admin-main">
                    <Outlet />

                </div>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    )
}
export default Admin;