import React, { useState } from 'react';
import { URL_LINK as url } from './link';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const state = useSelector((state) => state.getProducts);

    const dispatch = useDispatch();

    if (loading) {
        return <h2 style={{ textAlign: "center", marginTop: "3%" }}>Logging In...</h2>
    }

    async function loginRequest() {
        setLoading(true);
        try {
            let res = await fetch(`${url}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            let data = await res.json();
            if (data.token) {
                setLoading(false);
                localStorage.setItem("token", data.token);
                setLoggedIn(true);
                dispatch({ type: "SET_TOKEN", payload: data.userID });
                localStorage.setItem("userID", data.userID);
                alert(data.msg);
            } else {
                setLoading(false);
                setLoggedIn(false);
                alert("Invalid Credentials");
            }

        } catch (error) {
            setLoggedIn(false);
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginRequest();
        setLoggedIn(prev => {
            if (prev) {
                navigate("/")
            }
        });
    }


    return (

        <div className="modal-content" id='loginPage' style={{ width: "50%", margin: "auto" }}>
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel" style={{ margin: "auto", padding: "1%" }}>Login</h3>
            </div>
            <div className="modal-body">
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-google me-2"></span> Sign in With Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                </button>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Login
