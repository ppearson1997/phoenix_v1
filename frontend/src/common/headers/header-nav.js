import React from 'react';
// import Login from '../../modules/login/loginpage'
// import Registration from '../../modules/registration/registration'
// import { Route } from 'react-router-dom'

export default class HeaderNavigation extends React.Component{
//   onChangeIpt( ev ){
//     let { name, value } = ev.target;
//     let obj = {};
//     obj[ name ] = value;
//     this.setState( obj );
//   }
  render(){
    return(
      <div className = 'topnav' >
          <a href="/"  className="logo">LOGO</a>
          <div className = 'nav-right' >
          <a href="#how" className='v1' >How It Works</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
          <button>Free Resources</button>
          </div>
          <div className='icon'>
          <i className="fa fa-chevron-right" ></i>
          </div>
      </div>
    )
  }
}