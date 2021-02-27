import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
