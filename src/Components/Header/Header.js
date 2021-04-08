import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <nav>
            <span className="title" style={{fontSize: '40px', color: 'white'}}>Chal Bilash</span>
                <Link to ="/">Home</Link>
                <Link to ="/orders">Orders</Link>
                <Link to ="/admin">Admin</Link>
                <Link to ="/deals">Deals</Link>
                <Link to ="/login">Login</Link>
               <img src={loggedInUser.photo} alt=""/>
                <h6 style={{color:'#03e9f4'}}>Email: {loggedInUser.email}</h6>
            </nav>
        </div>
    );
};

export default Header;