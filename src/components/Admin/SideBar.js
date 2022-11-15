import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart,
} from 'react-icons/fa';

import sidebarBg from '../../assets/bg2.jpg';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import './SideBar.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    const navigate = useNavigate()
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact
                            cursor={"pointer"}
                            onClick={() => { navigate("/") }}
                            size={'3em'}
                            color={'aqua'}></DiReact>
                        <span>KBT</span>

                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu
                        iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        // suffix={<span className="badge red">New</span>}

                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}>components</MenuItem> */}

                    </Menu>
                    <Menu
                        iconShape="circle">
                        <SubMenu
                            // suffix={<span className='badge yellow'>3</span>}
                            // icon={<FaRegLaughWink />}
                            icon={<FaGem></FaGem>}
                            title='Features'
                        >
                            <MenuItem>
                                Quản lí User
                                <Link to="/admins/manage-users" />
                            </MenuItem>
                            <MenuItem>Quản lí bài Quiz</MenuItem>
                            <MenuItem>Quản lí câu hỏi</MenuItem>
                        </SubMenu>

                    </Menu>

                </SidebarContent>
                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className='sidebar-btn-wrapper'
                        style={{
                            padding: '20px 40px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="blank"
                            className='sidebar-btn'
                            rel="nooponer noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                TMT
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>;
        </>
    )
}
export default SideBar;