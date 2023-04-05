import React from "react";
import { useNavigate } from "react-router";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const authenticate = () => {
        navigate("/");
    };
    return (
        <div className="container">
            <label>
                <b>Username</b>
            </label>
            <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
            />

            <label>
                <b>Password</b>
            </label>
            <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
            />

            <button
                className="login-button"
                onClick={authenticate}>
                Login
            </button>
        </div>
    );
}

export default Login;
