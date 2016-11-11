import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

import Product from "../components/Product";


@connect((store) => {
  return{
    cart: store.cart.cart,
  }
})
export default class Cart extends React.Component {

  render() {
    const { cart } = this.props;
    
     const Cart = cart.map( product => <Product key={product.id} product={product}/>)
    return (
      <div class="col-md-12">
         <div class="row">
          <h3>Cart</h3>
        </div>
        <div class="row">
          {Cart}
        </div>
      </div>);
  }
}