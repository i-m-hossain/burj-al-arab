import React from 'react';
import { Link } from 'react-router-dom';
import useGoogleLogin from '../../hooks/useGoogleLogin';


const Register = () => {
    const { handleGoogleLogin } = useGoogleLogin()
    const handleSubmit = () =>{
        
    }
    return (
        <div className='login-container'>
            <div>
                <div className="login-form">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="your name" /> <br />
                        <input type="email" placeholder="your email" /> <br />
                        <input type="password" placeholder="password" /> <br />
                        <input type="submit" value="Register" />
                    </form>
                    <p>Already registered? <Link to="/login">Login here</Link> </p>
                </div>
                <br />
                <div>--------OR-------</div>
                <div className="google-login">
                    <button onClick={handleGoogleLogin}>Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;