import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';


const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams()
    // console.log(id)
   const [rice, setRice] = useState({name:"",price:""});
   useEffect(() => {
       fetch(`https://protected-crag-65686.herokuapp.com/rice/${id}`)
       .then(res => res.json())
       .then(data => setRice(data))
   }, [id]);

   const handleCheckout = () => {
    const {name,price,wight}=rice
       const orderPlacement = {...loggedInUser, name, price, wight,date: new Date()};
       fetch('https://protected-crag-65686.herokuapp.com/checkout', {
           method: 'POST',
           headers: {'content-type': 'application/json'},
           body: JSON.stringify(orderPlacement)
       })
       .then(res => res.json())
       .then(data => {
           if(data){
               alert('Your Order placed successfully');
           }
       })
   }


    return (
        <div>
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{rice.name}</td>
                    <td>{rice.wight}</td>
                    <td>${rice.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Table>
                <tr>
                    <th>Total</th>
                    <th> = ${rice.price}</th>
                </tr>
                <Button onClick={handleCheckout}>Checkout</Button>
            </Table>
            
            
        </div>
    );
};

export default Checkout;