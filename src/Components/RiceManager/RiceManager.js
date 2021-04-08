import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ManagerTable from '../ManagerTable/ManagerTable';


const RiceManager = () => {
    const [manageRice, setManageRice] = useState([]);

    useEffect(() => {
        fetch('https://protected-crag-65686.herokuapp.com/rices')
        .then(res => res.json())
        .then(data => setManageRice(data))
    }, []);
    return (
        <div>

                <div className="admin-bar">
                        <h4>Chal Bilash</h4>
                        <Link to ="/addRice"><FontAwesomeIcon icon={faPlusSquare}/> Add Rice</Link>
                        <Link to ="/riceManager"><FontAwesomeIcon icon={faTasks}/> Rice Manager</Link>
                </div>
                <div style={{width: '700px',  marginLeft: '300px'}}>
                    <div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr style={{backgroundColor: 'tomato'}}>
                                    <th style={{width:'250px'}}>Rice Name</th>
                                    <th style={{width:'150px'}}>Wight</th>
                                    <th style={{width:'150px'}}>Price</th>
                                    <th style={{width:'150px'}}>Action</th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    <div>
                            {
                                manageRice.map(product => <ManagerTable product={product}></ManagerTable>)
                            }
                    </div>
                </div>
        </div>
    );
};

export default RiceManager;