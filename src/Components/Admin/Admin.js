import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'


const Admin = () => {
   
    return (
        
            <div className="admin-bar">
                <h4>Chal Bilash</h4>
                <Link to ="/addRice">Add Rice</Link>
                <Link to ="/riceManager">Rice Manager</Link>
            </div>
        
        
    );
};

export default Admin;