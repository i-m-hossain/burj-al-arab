import React from 'react';
import { Link } from 'react-router-dom';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import './Login.css'

const Login = () => {
    const { handleGoogleLogin } = useGoogleLogin()
    return (
        <div className='login-container'>
            <div>
                <div className="login-form">
                    <h2>Login with account</h2>
                    <form>
                        <input type="email" placeholder="your email" /> <br />
                        <input type="password" placeholder="password" /> <br />
                        <input type="submit" value="Login" />
                    </form>
                    <p>New to Burj al Arab? <Link to="/register">Create account</Link> </p>
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

export default Login;