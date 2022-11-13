import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices"
import { toast } from 'react-toastify';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleLogin = async () => {
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
                <span>Don't have an account yet?</span>
                <button>Sign up</button>
                {/* <input>Need help?</input> */}
            </div>
            <div className="title col-4 mx-auto">
                KBT
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who’s this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-groud">
                    <label>Email</label>
                    <input
                        title="Email"
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-groud">
                    <label>Password</label>
                    <input
                        title="Password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className="forgot-password">Forgot password ?</span>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                    >Login to KBT</button>

                </div>
                <div
                    className="text-center"

                >
                    <span
                        className="back"
                        onClick={() => { navigate('/') }} >	&#60;&#60; Go to HomePage	&#62;&#62;</span>
                </div>
            </div>
        </div>
    )
}
export default Login;