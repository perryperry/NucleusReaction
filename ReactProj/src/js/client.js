import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux"
import store from "./store"

import Products from "./pages/Products";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="products(/:productId)" name="products" component={Products}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>
  </Provider>,
app);

