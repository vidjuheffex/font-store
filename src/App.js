import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout.js';
import Home from './components/Home.js';
import Store from './components/Store.js';
import Cart from './components/Cart.js';
import Contact from './components/Contact.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

      routeGroups:
      {
        homeRoute: {
          path: "/",
          component: Home,
          objs: [{
            title: "Font Place",
            link: "/"
          }]},
        storeRoutes: {
          path: "/category/:cat",
          component: Store,
          objs: [
            {
              title: "Classic",
              link: '/category/classic'
            },{
              title: "Cursive",
              link: '/category/cursive'
            },{
              title: "Monospace",
              link: '/category/monospace'
            }]
        },
        contactRoutes: {
          path: "/contact",
          component: Contact,
          objs: [{
            title: "Contact",
            link:"/contact"
          }]
        },
        cartRoutes: {
          path: "/cart",
          component: Cart,
          objs: [{
            title: "Cart",
            link: "/cart"
          }]
        } 
      },
      shoppingCart:
      []
    };
  }

  addToCart = (event, font) => {
    console.log("adding: ", font);
    let shoppingCart = this.state.shoppingCart.slice();
    shoppingCart = shoppingCart.concat(font);
    return this.setState({shoppingCart}, ()=>{return console.log("Set State");});
  }

  removeFromCart = (event, font) => {
    console.log("removing: ", font);
    let shoppingCart = this.state.shoppingCart.slice();
    let index = shoppingCart.findIndex(items => items.fontFamily === font.fontFamily);
    shoppingCart.splice(index, 1);
    return this.setState({shoppingCart}, ()=>{return console.log("Set State");});
  }
  
  render() {
    let routes = Object.keys(this.state.routeGroups).map((e,i)=>{
      let component = this.state.routeGroups[e].component;
      let renderFunc = props => {
        let newProps = Object.assign(
          {...props},
          {cart: this.state.shoppingCart,
           route: this.state.routeGroups[e],
           addToCart: this.addToCart,
           removeFromCart: this.removeFromCart});
        return React.createElement(component, newProps);
      };
      
      return (
        <Route key={i} exact path={this.state.routeGroups[e].path}
               render = {renderFunc} />);
    });
                                                         
    return (
      <Router>
        <BaseLayout routes={this.state.routeGroups} numItems={this.state.shoppingCart.length}>
          <Switch>
            {routes}
          </Switch>          
        </BaseLayout>
      </Router>
    );
  }
}

export default App;
