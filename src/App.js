import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Basket from "./containers/Basket";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Payment from "./containers/Payment";



function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/basket" component={Basket} /> 
          <Route path="/payment" component={Payment}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
