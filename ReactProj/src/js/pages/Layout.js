import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchProducts } from "../actions/productActions";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    products: store.products.products,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
      this.props.dispatch(fetchUser())
    }
  render() {
    

   const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}