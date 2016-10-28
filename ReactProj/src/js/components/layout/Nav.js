import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="navbar-collapse">
            <ul class="nav navbar-nav">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
              </li>
              <li activeClassName="active">
                <Link to="products" onClick={this.toggleCollapse.bind(this)}>Products</Link>
              </li>
              <li activeClassName="active">
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>        
                  <a href="//slate.lemonstand.com/login">Login</a>
              </li>
              <li id="normal-cart">
                <a id="normal-carts" href="//slate.lemonstand.com/cart" data-toggle="dropdown"><span class="hidden-xs" id="navbar-totals">0 Items</span></a>
                <div id="mini-cart" class="dropdown-menu">
                    <h6>No items in cart.</h6>
                </div>
              </li>
              <li id="mobile-cart">
                <a href="//slate.lemonstand.com/cart">View Cart</a>
              </li>
              <li id="mobile-cart">
                <a href="//slate.lemonstand.com/checkout-start" >Checkout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}