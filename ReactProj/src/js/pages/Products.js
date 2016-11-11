import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

import Product from "../components/Product";


@connect((store) => {
  return{
    products: store.products.products,
  }
})
export default class Products extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }
  render() {
    const { products } = this.props;
    console.log({products});
    var i = 0;
     const Products = products.map( product => <Product key={product.id} product={product}/>)
    return (
      <div class="col-md-12">
         <div class="row">
          <h3>Products</h3>
        </div>
        <div class="row">
          {Products}
        </div>
      </div>);
  }
}