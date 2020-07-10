import  React, { Component } from  'react';

import  RegistrationFunc  from  './registrationfunc';

const  registrationFunc  =  new  RegistrationFunc();

class Registration extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          registrationFunc.getClients(params.pk).then((c)=>{
            this.refs.fullname.value = c.fullname;
            this.refs.password.value = c.password;
            this.refs.email.value = c.email;
          })
        }
      }

      handleCreate(){
        registrationFunc.createClients(
          {
            "fullname": this.refs.fullname.value,
            "password": this.refs.password.value,
            "email": this.refs.email.value,
        }
        ).then((result)=>{
          alert("Registered Successfully!");
          this.refs.fullname.value = '';
          this.refs.password.value = '';
          this.refs.email.value = '';
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        registrationFunc.updateClients(
          {
            "pk": pk,
            "fullname": this.refs.fullname.value,
            "password": this.refs.password.value,
            "email": this.refs.email.value,
        }
        ).then((result)=>{
          console.log('sssss',result);
          alert("Successfully updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;
        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {console.log(params)
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <br/><br/><br/>
          <div className="form-div">
          <div className='ad-div'>
            Ready to Join Thousands of Filipinos who already have home based jobs in the Philippines? <br/><br/><br/><br/><br/><br/><br/>
            Post a Job <br/>
            Contact Jobseekers <br/>
            Bookmark Candidates <br/>
            Training Resources <br/>
            Hire Filipino Virtual Staff <br/>
          </div>
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
            </div>
          </form>
        );
      }
}

export default Registration;