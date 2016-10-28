import React from "react";

import Product from "../components/Product";

export default class Products extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { pId } = params;
    const { date, filter } = query;

    const Products = [
      "All Products would be in",
      "A List Here",
    ].map((title, i) => <Product key={i} title={title}/> );

    return (
      <div>
        <h1>Products</h1>
        product id: {pId}, date: {date}, filter: {filter}
        <div class="row">{Products}</div>
      </div>
    );
  }
}