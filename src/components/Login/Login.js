import React from 'react';
import { Link } from 'react-router-dom';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import useLogin from '../../hooks/useLogin';
import './Login.css'

const Login = () => {

    const { handleGoogleLogin } = useGoogleLogin()
    const { error, handleEmail, handlePassword, handleSubmit  } = useLogin()
    return (
        <div className='login-container'>
            <div>
                <div className="login-form">
                    <h2>Login with account</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="your email" onBlur={handleEmail}/> <br />
                        <input type="password" placeholder="password" onBlur={handlePassword}/> <br />
                        <p style={{ color: 'red' }}>{error}</p>
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