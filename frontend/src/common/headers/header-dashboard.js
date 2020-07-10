import React from 'react';

export default class HeaderDashboardNavigation extends React.Component{
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
            <div className = 'dashnav-right' >
              <div className= 'dash-nav'>
                <div className="bell"><i className="fa fa-bell"></i></div>
                <div className="photo"></div>
                <div className="username">Jon Doe
                <span>{this.props.username}</span>
                </div>
                <div className="usernav"><i className="fa fa-angle-down"></i></div>
              </div>
            </div>
        </div>
    )
  }
}