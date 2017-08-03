import React, {Component} from 'react';

class Cart extends Component {
  render(){
    let items = this.props.cart.map( (e,i) => {
      return (
        <li key={i}>
          {e.fontFamily}
        </li>
      );
    });
    return(
      <div>
        <h1>Cart</h1>
        <div>
          <ul>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
