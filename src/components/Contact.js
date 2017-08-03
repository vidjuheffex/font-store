import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

let styles = StyleSheet.create({
  contactblock: {
    display: 'inline-block',
    width: 500
  },
  contactarea: {
    textAlign: 'center'
  },
  contactlabel: {
    display: 'block',
    padding: '.25rem'
  },
  input: {
    width: '100%'
  },
  button: {
    padding: '.25rem',
    margin: '.5rem'
  }
});

class Cart extends Component {
  render(){
    return(
      <div>
        <h1>Contact</h1>
        <div className={css(styles.contactarea)}>
          <div className={css(styles.contactblock)}>
            <div>
              <label className={css(styles.contactlabel)} htmlFor="nameInput">Your Name:</label>
              <input className={css(styles.input)} type="text" name="name" id="nameInput" />
            </div>
            <div>
              <label className={css(styles.contactlabel)} htmlFor="emailInput">Your Email:</label>
              <input className={css(styles.input)} type="email" name="email" id="emailInput" />
            </div>
            <div>
              <label className={css(styles.contactlabel)} htmlFor="textInput">Your Msg:</label>
              <textarea  className={css(styles.input)} id="textInput" name="msg" />
            </div>
            <button className={css(styles.button)}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
