import React from 'react';
import axios from "axios";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

// props to pass
export default class LoginForm extends React.Component{
  constructor(props){
    console.log(this.props)
    super(props);
    this.state = {
      value : '0'
    }
  }
  componentDidMount() {
    let { options } = this.props;
    this.setState( { options : options} );
  }
  render(){
    return(
        <form onSubmit = { this.handleSubmit } >
            <br/><br/><br/>
                <div className="form-group">
                    <div className='icon'>
                    <center>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-google"></i>
                    </center>
                    </div>
                    <br/>
                    <div className="separator">or</div>
                    <label>
                        Full Name:</label>
                        <input className="form-control" type="text" ref='fullname' />
                    <label>
                        Email:</label>
                        <input className="form-control" type="text" ref='email' />
                        <label>
                        Password:</label>
                        <input className="form-control" type="password" ref='password' />
                    <br/>
                    <center><input className="btn btn-primary" type="submit" value="Create an account" /></center>
                </div>
        </form>
    )
  }
}