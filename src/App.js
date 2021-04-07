import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
                <Route path="/home">
                  <Home></Home>
                </Route>
                <PrivateRoute path="/orders">
                  <Orders></Orders>
                </PrivateRoute>
                <PrivateRoute path="/addRice">
                  <AddRice></AddRice>
                </PrivateRoute>
                <PrivateRoute path="/admin">
                  <Admin></Admin>
                </PrivateRoute>
                <PrivateRoute path="/checkout/:id">
                  <Checkout></Checkout>
                </PrivateRoute>
                <Route path="/riceManager">
                  <RiceManager></RiceManager>
                </Route>
                <PrivateRoute path="/deals">
                  <Deals></Deals>
                </PrivateRoute>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route exact path="/">
                  <Home></Home>
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
