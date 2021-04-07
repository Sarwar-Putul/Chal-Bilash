import React from 'react';
import { Table } from 'react-bootstrap';

const OrderHolder = ({order}) => {
    return (
        <div style={{width: '850px',  marginLeft:'300px'}}>
             <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th style={{width:'250px'}}>{order.email}</th>
                            <th style={{width:'250px'}}>Name:- {order.name}</th>
                            <th style={{width:'100px'}}>Wight:- {order.wight}GM</th>
                            <th style={{width:'100px'}}>Price:- ${order.price}</th>
                            <th style={{width:'150px'}}>Date:- {order.date}</th>
                        </tr>
                    </thead>
            </Table> 
        </div>
    );
};

export default OrderHolder;