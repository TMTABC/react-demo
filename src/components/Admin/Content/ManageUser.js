import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';

import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUses";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 1;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [dataView, setDataView] = useState({})
    const [listUsers, setListUsers] = useState([
        {
            "id": 17,
            "username": "KBT",
            "password": "1811",
            "email": "test@gmail.com",
            "role": "User",
            "image": 'bg2.jpg'
        },
        {
            "id": 18,
            "username": "TMT",
            "password": "2205",
            "email": "test2@gmail.com",
            "role": "User"
        }
    ]);
    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1)
    }, [])
    const fetchListUsers = async () => {
        let res = await getAllUsers();

        if (res.EC === 0) {
            setListUsers(res.Dt.user)
        }
    }
    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);

        if (res.EC === 0) {
            setListUsers(res.Dt)
            console.log(res.DT);
            setPageCount(res.DT.totalPages);
        }
    }
    const resetUpdateData = () => {
        setDataUpdate({});
    }
    const resetViewData = () => {
        setDataView({});
    }
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);

    };
    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);


    };
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser

                <div className="users-content">
                    <div className="btn-add-new">

                        <button className="btn btn-primary"
                            onClick={() => setShowModalCreateUser(true)}
                        ><FcPlus></FcPlus> Add new user
                        </button>
                    </div>
                    <div className="table-users-container">
                        {/* <TableUser
                            listUsers={listUsers}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete}
                        ></TableUser> */}
                        <TableUserPaginate
                            listUsers={listUsers}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete}
                            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                            pageCount={pageCount}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        >
                        </TableUserPaginate>
                    </div>
                </div>

                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    resetVIewData={resetViewData}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}
export default ManageUser;