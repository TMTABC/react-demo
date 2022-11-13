import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('https://localhost:3000', data);
}
const getAllUsers = () => {
    return axios.get('http://localhost:3000');
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('https://localhost:3000', data);
}
const deleteUser = (userId) => {
    return axios.delete('http://localhost:3000', { data: { id: userId } });
}
const getUserWithPaginate = (page, limit) => {
    return axios.get(`http://localhost:3000/page=${page}&limit=${limit}`);
}
const postLogin = (userEmail, userPassword) => {
    return axios.post(`http://localhost:3000/login`,
        { email: userEmail, password: userPassword }
    );
    // const postLogin1 = (email, password) => {
    //     return axios.post(`http://localhost:3000/login`,
    //         {email,password}
    //     );
}
export {
    postCreateNewUser, getAllUsers, putUpdateUser,
    deleteUser, getUserWithPaginate, postLogin
}
