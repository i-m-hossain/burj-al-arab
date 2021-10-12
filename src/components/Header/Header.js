import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth()
    console.log(user.email);
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul >
                    <div className="nav-flex">
                        <div className='nav-left' >
                            <li>
                                <img className="logo" src={logo} alt="" />
                            </li>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="btn-book" to="/foods">Food</Link>
                            </li>
                        </div>
                        <div>
                            
                            {
                                !user?.email &&
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                            }
                            {
                                user?.email && <span className="user">hey, {user?.displayName}</span>
                            }
                            {
                                user?.email && <button onClick={logout}>Logout</button>
                            }
                        </div>
                    </div>

                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;