import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: '100%'
  },
  pagesContainer: {
    flexGrow: 1,
    paddingTop: '1rem',
    paddingLeft: '10%',
    paddingRight: '10%'
  }
});

class BaseLayout extends Component {
  render(){
    return(
        <div className = {css(styles.container)}>
        <NavBar routes={this.props.routes} numItems={this.props.numItems}/>
        <div className = {css(styles.pagesContainer)}>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default BaseLayout;
