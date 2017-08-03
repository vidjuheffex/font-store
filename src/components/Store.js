import React, {Component} from 'react';
import * as fonts from '../data/fonts';

import Explorer from './Explorer.js';

class Store extends Component {
  constructor(props){
    super(props);
    this.state = {
      previewString: "",
      title: "",
      category: "",
      fonts: []
    };
  }

  updateComponent = () => {
     if (this.state.category !== this.props.match.params.cat){
       let fontCategory = this.props.match.params.cat;
       console.log(this.props.match);
      this.setState({
        category: fontCategory,
        title:  this.props.route.objs.find(e => e.link === this.props.match.url).title,
        fonts: fonts.getFonts(fontCategory).fonts
      });
    }
  }

  componentDidMount(){
    this.updateComponent();
  }

  componentDidUpdate(){
    this.updateComponent();
  }

  handleStringSet = (e) => {
    this.setState({focusString: e.target.value});
  }
  
  render() {    
    return (
      <div>
        <Explorer previewString={this.state.previewString}
                  category={this.state.category}
                  title={this.state.title}
                  handleStringChange={this.handleStringChange}
                  fonts={this.state.fonts}
                  cart={this.props.cart}
                  addToCart={this.props.addToCart}
                  removeFromCart={this.props.removeFromCart}/>
      </div>
    );
  }
};

export default Store;
