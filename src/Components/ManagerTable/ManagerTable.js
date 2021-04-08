import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManagerTable = ({product}) => {

     const deleteProduct = (id) =>{
        fetch(`https://protected-crag-65686.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                alert('Your product deleted successfully');
            }
        })

    }
    
    return (
        <div style={{width: '700px'}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr1>
                        <th style={{width:'250px'}}>{product.name}</th>
                        <th style={{width:'150px'}}>{product.wight}GM</th>
                        <th style={{width:'150px'}}>$ {product.price}</th>
                        <th style={{width:'150px'}}><FontAwesomeIcon onClick={() =>deleteProduct(product._id)} icon={faTrash} /></th>
                    </tr1>
                </thead>
            </Table>

            
           
        </div>
    );
};

export default ManagerTable;