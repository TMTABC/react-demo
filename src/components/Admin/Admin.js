import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";

const Addmin = (props) => {
    const [comllapsed, setComllapsed] = useState(false);
    return (
        <div className="admin-container">

            <div className="admin-sidebar">
                <SideBar comllapsed={comllapsed} />


            </div>

            <div className="admin-content" >
                <FaBars onClick={() => setComllapsed(!comllapsed)} />
                content goes here
            </div>
        </div>
    )
}
export default Addmin;