import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
const App = () => {
  return (
    <div>
      <Router>
        React shopify Store
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
