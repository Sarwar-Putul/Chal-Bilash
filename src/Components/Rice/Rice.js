
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './Rice.css'



const Rice = ({rice}) => {
    
    
    
    return (
        <div className="rice-card">
            <Card >
                <Card.Img assName="card-img-top shadow rounded" variant="top" src={rice.imageURL} />
                <Card.Body>
                <Card.Title><h5>{rice.name}</h5></Card.Title>
                </Card.Body>
                <div className="d-flex justify-content-between cart_text">
                    <h3 style={{color: 'blue'}}>$ {rice.price}</h3>
                    <Link to={`/checkout/${rice._id}`}> <button className="btn-primary">Buy Now</button></Link>
                </div>
                    
            
            </Card>
        </div>
    );
};

export default Rice;