import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices"
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { truncate } from "lodash";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);

    // const myFunction = () => {
    //     var x = document.getElementById("myInput");
    //     if (x.type === "password") {
    //         x.type = "text";
    //     } else {
    //         x.type = "password";
    //     }
    // }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async () => {
        // validate

        // submit apis
        let data = await postLogin(email, password);
        // if (data && +data.EC === 0) {
        //     toast.success(data.EM);
        // navigate('/')

        // }
        // if (data && +data.EC !== 0) {
        //     toast.error(data.EM);

        // }
    }
    return (
        <div className="login-container ">
            <div className="header">
                <span>Already have an account?</span>
                <button
                    onClick={() => { navigate('/login') }}
                >Log in</button>
                {/* <input>Need help?</input> */}
            </div>
            <div
                className="title col-4 mx-auto"
                onClick={() => { navigate('/') }}
            >
                KBT
            </div >
            <div className="welcome col-4 mx-auto">
                Get better data with conversational forms, surveys, quizzes & more.
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-groud">
                    <label>Email(*)</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-groud pass-group">
                    <label>Password(*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowPassword ?
                        <span
                            className="icons-eye"
                            onClick={() => setIsShowPassword(false)}>
                            <VscEye></VscEye>
                        </span>
                        :
                        <span
                            className="icons-eye"
                            onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed></VscEyeClosed>
                        </span>
                    }
                </div>
                <div className="form-groud">
                    <label>Username</label>
                    <input
                        title="Username"
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >Create my free account</button>
                </div>
            </div>
        </div >
    )
}
export default Register;