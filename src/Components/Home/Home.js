import React, { useEffect, useState } from 'react';
import Rice from '../Rice/Rice';
import './Home.css'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Form, FormControl } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));


const Home = () => {
    const classes = useStyles();
    
   
    const [rices, setRices] = useState([]);

    useEffect(() => {
        fetch('https://protected-crag-65686.herokuapp.com/rices')
        .then(res => res.json())
        .then(data => setRices(data))
    }, []);
    return (
        <div className="container" >
            <div className='d-flex justify-content-center'>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-4" />
                    <Button className="btn-primary" type="submit">Search</Button>
                </Form>
            </div>
            {
                rices.length === 0 && <Backdrop className={classes.backdrop} open> <CircularProgress color="inherit" /></Backdrop>
            }
            <div className="row row-cols-1 row-cols-md-5 padding-right">
                {
                    rices.map(rice => <Rice key={rice._id} rice={rice}></Rice>)
                }
            </div>
            
            
        </div>
    );
};

export default Home;