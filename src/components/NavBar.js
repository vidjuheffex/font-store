import React, {Component} from 'react';
import { StyleSheet, css} from 'aphrodite';
import {NavLink} from 'react-router-dom';

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  homeLink: {
    flex: 1,
    fontSize: '1.25rem',
    fontWeight: 'bolder'
  },
  navLink: {
    color: 'black',
    padding: '1rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ":hover":{
      textDecoration: 'underline'        
    }
  },
  active: {
    textDecoration: 'underline'
  },
  token: {
    backgroundColor: 'red',
    textAlign: 'center',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '1.5rem',
    verticalAlign: 'middle',
    display: 'inline-block',
    paddingTop: 'calc(.15 * 1.5rem)',
    marginLeft: '1rem',
    color: 'white'
  },
  tokenWrapper: {

  }
});

function CartToken({numItems}){
  console.log("num items: ", numItems);
  return(
      <div>
      {numItems}
      </div>
  );
}


class NavBar extends Component {
  render(){
    let Links = [];
    for (let routeGroup in this.props.routes){
      Links = Links.concat(this.props.routes[routeGroup].objs);
    }    

    let NavLinks = Links.map((e,i)=>{
      let cssArray = [];
      if(i === 0)
        cssArray = cssArray.concat([styles.homeLink]);
      cssArray = cssArray.concat(styles.navLink);

      return(
        <NavLink to={e.link} key={i} className={css(cssArray)}>
          {e.title}
          {e.title === 'Cart' && <span className={css(styles.token)}> {this.props.numItems} </span> }

        </NavLink>
          
      );
    });

    return(
      <div className={css(styles.navContainer)}>
        {NavLinks}
      </div>
    );
  }
}

export default NavBar;


