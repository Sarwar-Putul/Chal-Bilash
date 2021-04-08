import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import NotFound from './Components/NotFound/NotFound';
import Checkout from "./Components/Checkout/Checkout";
import AddRice from "./Components/AddRice/AddRice";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import RiceManager from "./Components/RiceManager/RiceManager";
import Footer from "./Components/Footer/Footer";




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className= "body">
          <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
            <Router>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/home">
                  <Home></Home>
                </Route>
                <PrivateRoute exact path="/orders">
                  <Orders></Orders>
                </PrivateRoute>
                <PrivateRoute exact path="/addRice">
                  <AddRice></AddRice>
                </PrivateRoute>
                <PrivateRoute exact path="/admin">
                  <Admin></Admin>
                </PrivateRoute>
                <PrivateRoute exact path="/checkout/:id">
                  <Checkout></Checkout>
                </PrivateRoute>
                <Route exact path="/riceManager">
                  <RiceManager></RiceManager>
                </Route>
                <PrivateRoute exact path="/deals">
                  <Deals></Deals>
                </PrivateRoute>
                <Route exact path="/login">
                  <Login></Login>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
              <Footer></Footer>
            </Router>
          </UserContext.Provider>
      </div>
  );
}

export default App;
