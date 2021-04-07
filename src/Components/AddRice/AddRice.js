import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddRice.css'

const AddRice = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const riceData ={
            name: data.name,
            price: data.price,
            wight: data.wight,
            imageURL: imageURL

        }
        const url= `https://protected-crag-65686.herokuapp.com/addRice`
        //console.log(riceData)
        fetch(url,{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(riceData)
        })
        .then(res => console.log('server side response', res))
    };



    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b20fba08b003d774a5cb9fe626d4edce');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (

        <div>
            <div className="admin-bar">
                <h4>Chal Bilash</h4>
                <Link to ="/addRice">Add Rice</Link>
                <Link to ="/riceManager">Rice Manager</Link>
            </div>
            <div  className="add-form">        
                <container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh", color: "red"}}>
                    <div  className = "w-100" style={{maxWidth:"400px"}}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group  controlId="rice-name">
                                <Form.Label>Rice Name</Form.Label>
                                <Form.Control name="name" ref={register}  type="text" placeholder="Rice Name" />
                            </Form.Group>

                            <Form.Group controlId="addPrice">
                                <Form.Label>Add Price</Form.Label>
                                <Form.Control name="price" ref={register} type="number" placeholder="Add Price" />
                            </Form.Group>

                            <Form.Group controlId="wight">
                                <Form.Label>Wight</Form.Label>
                                <Form.Control name="wight" ref={register} type="number" placeholder="Wight" />
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.File name="exampleRequired"  onChange={handleImageUpload} id="exampleFormControlFile1" label="Image" />
                            </Form.Group>

                            <Button className="myButton"variant="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                </container>
            </div>
        </div>

    );
};

export default AddRice;