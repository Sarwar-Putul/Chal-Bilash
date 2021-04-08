import React from 'react';
import { Link } from 'react-router-dom';
import { faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Admin.css'


const Admin = () => {
   
    return (
        
            <div className="admin-bar">
                <h4>Chal Bilash</h4>
                <Link to ="/addRice"><FontAwesomeIcon icon={faPlusSquare}/> Add Rice</Link>
                <Link to ="/riceManager"><FontAwesomeIcon icon={faTasks}/> Rice Manager</Link>
            </div>
        
        
    );
};

export default Admin;