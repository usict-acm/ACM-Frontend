import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { doFetch } from "../api/fetchData";
import "./Assests/CSS/login.css";

export interface EncodeResult {
    token: string;
    expires: number;
    issued: number;
}

async function onLogin(
    creds: { email: string; password: string },
    navigate: NavigateFunction
) {
    try {
        let res: EncodeResult = await doFetch("/login", "POST", creds);
        localStorage.setItem("session", JSON.stringify(res));
        console.log(res);
    } catch (e: any) {
        console.log("error on login!");
        navigate("/login");
    }
}

function Login() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const onChangeState = (value: Partial<typeof state>) => {
        setState({ ...state, ...value });
    };
    return (
        <div className="login">
            <div className="innerBox">
                <div className="logo">
                    <img
                        className="ussAcm"
                        src="https://usict.acm.org/assets/images/acm-logo.svg"
                    />
                </div>
                <div className="divider"></div>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        await onLogin(state, navigate);
                    }}
                >
                    <h2>Login...</h2>
                    <div className="inputs">
                        <input
                            className="inputField"
                            type="text"
                            placeholder="Enter Email..."
                            value={state.email}
                            onChange={(e) =>
                                onChangeState({ email: e.target!.value })
                            }
                        />
                        <i className="fa-solid fa-user"></i>
                    </div>

                    <div className="inputs">
                        <input
                            className="inputField"
                            type="password"
                            placeholder="Enter Password..."
                            value={state.password}
                            onChange={(e) =>
                                onChangeState({ password: e.target!.value })
                            }
                        />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="checkbox">
                        <div>
                            <input
                                type="checkbox"
                                onChange={(_e) => {
                                    onChangeState({
                                        rememberMe: !state.rememberMe,
                                    });
                                }}
                            />
                            <label>Remember me</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button className="loginBtn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
