import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderHolder from '../OrderHolder/OrderHolder';

const Orders = () => {
    const [user, setUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://protected-crag-65686.herokuapp.com/order/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <div style={{alignItems: 'center'}}>
                <img src={orders.photo} alt=""/>
                
            </div>
            
            {
                orders.length>0 && orders.map(order =><OrderHolder order={order}></OrderHolder>)
            }

        </div>
    );
};

export default Orders;