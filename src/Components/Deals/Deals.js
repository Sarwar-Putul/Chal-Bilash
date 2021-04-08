import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Deals = () => {
    return (
        <div style={{textAlign:'center', color:'tomato'}}>
            <h1>Deals is under processing......</h1>
            <FontAwesomeIcon style={{height:'300px', width:'300px', color:'red'}} icon={faHeartbeat}/>
        </div>
    );
};

export default Deals;