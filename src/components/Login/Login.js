import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



import './Login.css'


const Login = () => {
    const {googleLogin} = useAuth()
    const history = useHistory()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home' //if login is came from login page, redirect to home page
    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
            history.push(redirect_uri)
        })
    }
    
    console.log('came from',location.state?.from);

    return (
        <div className='login-container'>
            <div>
                <div className="login-form">
                    <h2>Login with account</h2>
                    <form>
                        <input type="email" placeholder="your email"/> <br />
                        <input type="password" placeholder="password"/> <br />
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