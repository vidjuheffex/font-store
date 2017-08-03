import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {deepEqual} from 'assert';

const styles= StyleSheet.create({
  input: {
    padding: '.5rem',
    margin: '.5rem',
    border: 'none',
    width: '100%',
    fontSize: '2rem',
    ":focus": {
      outline: 'none'
    }
  },
  header: {
    display: 'flex'
  },
  Classic: {
    fontFamily: 'sans-serif'
  },
  Cursive: {
    fontFamily: 'cursive'
  },
  Monospace: {
    fontFamily: 'monospace'
  }
});


function StringInput (props) {
    return(
      <input type="text" className={css(styles.input)}
             placeholder="Your words! Your words!"
             onBlur={props.handleStringSet}
             onKeyUp={props.handleStringChange}
             autoFocus />
    );  
}

function CartButton({font, addToCart, removeFromCart}){
  let buttonStyles = StyleSheet.create({
    button: {
      padding: '.5rem',
      display: 'inline-block',
      cursor: 'default'
    },
    add: {
      backgroundColor: 'lightgreen'
    },
    remove: {
      backgroundColor: 'lightpink'
    }
    
  });
  
  if(font.purchased){
  return (
    <div className = {css(buttonStyles.button, buttonStyles.remove)} onClick ={e=>removeFromCart(e, font)}>Remove From Cart</div>
  );
  }
  else{
    return(
      <div className= {css(buttonStyles.button, buttonStyles.add)} onClick ={e=>addToCart(e, font)}>Add To Cart</div>
    );
  }
}

class Explorer extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayString: this.props.previewString,
      fonts: []
};

  }

  handleStringChange = (e) => {
    this.setState({displayString: e.target.value});
  }

  updateComponent = () => {
        let fonts = this.props.fonts.map(e => {
      let o = Object.assign({}, e);
      o.purchased = this.props.cart.find(
        cartItem => cartItem.fontFamily === e.fontFamily) !== undefined;
      return o;
    });
    try{
      deepEqual(this.state.fonts, fonts);
    }
    catch(err){
      this.setState({fonts});
    }

  }
  
  componentDidMount(){
    this.updateComponent();
  }

  componentDidUpdate(){
    this.updateComponent();
  }
 
  render(){


    let fonts = this.state.fonts.map((e,i) => {
      let font = {
        fontFamily: e.fontFamily,
        fontStyle: e.fontStyle,
        fontWeight: e.fontWeight,
        src: e.src
      };
      let fontStyles = StyleSheet.create({
        font: {
          fontFamily: [font]
        },
        header: {
          paddingTop: '.5rem',
          paddingBottom: '1rem'
        },
        preview: {
          fontSize: '1.25rem',
          padding: '1.25rem'
        },
        card: {
          paddingBottom: '1rem',
          marginBottom: '1rem',
          borderBottom: '1px solid black'
        }
      });

      return (
        <div key={i} className={css(fontStyles.card)}>
          <h2 className={css(fontStyles.font, fontStyles.header)}>{e.fontFamily}</h2>
          <h3>example text:</h3>
          <p  className={css(fontStyles.font, fontStyles.preview)}>
            {this.state.displayString !== "" ? this.state.displayString : "The quick brown fox jumped over the lazy dog." }
          </p>
          <p>{e.purchased}</p>
          <CartButton cart = {this.props.cart} font = {e} addToCart = {this.props.addToCart} removeFromCart = {this.props.removeFromCart}/>
        </div>
      );
    });

    return(
      <div>
        <h1>{this.props.title}</h1>
        <StringInput handleStringSet={this.props.handleStringSet}
                     handleStringChange={this.handleStringChange}
                     />
        {fonts}
        
      </div>
    );
  }
}

export default Explorer;
