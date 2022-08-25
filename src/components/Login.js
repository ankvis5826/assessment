import React, { useState } from "react";


export default function Login({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (

        <div className="box" onSubmit={submitHandler}>
            <div className="form">
                <div className="formMain">
                    <h4 className="headText">Login</h4>
                    <div className="inputs">
                        {(error !="")?
                        <span className="error">{error}</span>:
                        ""
                        }
                        <form >
                            <div className="input">
                                <span>Email/Username</span>
                                <input type="text" placeholder="ali23@exampal.com" className="email" name="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                            </div>
                            <div className="input">
                                <span>Password</span>
                                <input type="password" placeholder="......." className="password" name="pass" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </div>
                            <div className="Sendbtn">
                                <button type="submit" className="submitBtn pulse">
                                    Login
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="picture">
                <img src="login.jpg" alt="" />
            </div>
        </div>
    )
};
