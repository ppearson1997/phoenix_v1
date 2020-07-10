import React from 'react';
import '../../static/css/main.css'
import HeaderNavigation from '../../common/headers/header-nav';

export default class LoginPage extends React.Component{
    constructor(props){
      super(props)
      this.state={
        isLoaded: false,
      }
    }
    componentDidMount() {
      this.setState({
        isLoaded: true
      })
    }
    handleSubmit(){
      this.props.history.push('/employer/dashboard/post-a-job/');
    }
    render(){
      let { isLoaded } = this.state
      if(isLoaded){
        return(
          <div>
            <HeaderNavigation/>
            <div className='main-container'>
              <div className='content-container'>
                <div className= 'row-1'>
                    <span className= 'hdr-txt'>Ready to Join Thousands of Filipinos</span><br/>
                    <span className= 'sub-txt'>who already have home based jobs in the Philippines?</span>
                </div>
                <div className= 'row-2'>
                    <div className='row-2-content'>
                        <center>
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-google"></i>
                        </center>
                        <br/>
                        <div className="separator">or</div>
                        <form onSubmit = { this.handleSubmit.bind(this) } >
                            <label> Username </label>
                            <input className="form-control" type="text" ref='fullname' />
                            <label> Password </label>
                            <input className="form-control" type="password" ref='password' />
                            <div className='div-opt'>
                                <input type='checkbox'/>
                                <label className='remember'> Remember Me </label>
                                <label className= 'forgot'>Forgot Password?</label>
                            </div>
                            <center><input className="btn" type="submit" value="Login"/></center>
                        </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )
      }else{
        return(
          <div> isloaded not set to true </div>
        )
      }
    }
  }