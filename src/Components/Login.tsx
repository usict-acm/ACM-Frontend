import { useState } from "react";
import { useNavigate } from "react-router";
import { doFetch, setSession } from "../api/fetchData";
import "./Assests/CSS/login.css";

export interface EncodeResult {
    token: string;
    expires: number;
    issued: number;
}

async function onLogin(
    creds: { username: string; password: string, rememberMe: boolean },
) {
    let res: EncodeResult = await doFetch("/login", "POST", creds);
    setSession(res);
    if (creds.rememberMe) {
        localStorage.setItem("session", JSON.stringify(res));
    }
    console.log(res);
}

function Login() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: "",
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
                        try {
                            await onLogin(state);
                            navigate("/");
                        } catch (e: any) {
                            console.log(e);
                        }
                    }}
                >
                    <h2>Login...</h2>
                    <div className="inputs">
                        <input
                            className="inputField"
                            type="text"
                            placeholder="Enter Username..."
                            value={state.username}
                            onChange={(e) =>
                                onChangeState({ username: e.target!.value })
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
