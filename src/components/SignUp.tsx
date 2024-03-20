import {useState} from "react";
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        alert('Successfully registered');
        };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{height: '70vh'}}>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setUsername(e.target.value)}
                                required={true}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-primary mx-5">Submit</button>
                            <Link to="/signin">
                                <button type="button" className="btn btn-success mx-5">Sign In</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;