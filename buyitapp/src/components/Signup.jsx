import React, { useState } from 'react';
import { URL_LINK as url } from './link';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    async function registerRequest() {
        try {
            let res = await fetch(`${url}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, name })
            })
            let data = await res.json();
            alert(data.msg);
            return 1;

        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await registerRequest()) {
            console.log("successfull");
        } else {
            console.log("error in registering");
        }
    }

    return (
        <div className="modal-content" style={{width:"50%", margin:"auto"}}>
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel" style={{margin:"auto", padding:"1%"}}>Signup</h3>
            </div>
            <div className="modal-body">
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-google me-2"></span> Sign up With Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                </button>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInput" className="form-label">Username</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
