import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import Register from "./components/Auth/Register";
const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path='/users' element={<User />}></Route>


                </Route>
                <Route path='/admins' element={<Admin />}>
                    <Route index element={<DashBoard />}></Route>
                    <Route path='manage-users' element={<ManageUser />}></Route>
                </Route>
                <Route path='/login' element={<Login />}></Route>

                <Route path='/register' element={<Register />}></Route>
            </Routes>

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
        </>
    )
}
export default Layout;