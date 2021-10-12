import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import useRegister from '../../hooks/useRegister';


const Register = () => {
    const { handleGoogleLogin } = useGoogleLogin()
    const { handleName, handleEmail, handlePassword, handleSubmit } =useRegister()
    return (
        <div className='login-container'>
            <div>
                <div className="login-form">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="your name" onBlur={handleName}/> <br />
                        <input type="email" placeholder="your email" onBlur={handleEmail}/> <br />
                        <input type="password" placeholder="password" onBlur={handlePassword}/> <br />
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