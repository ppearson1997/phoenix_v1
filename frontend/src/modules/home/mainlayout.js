import React, { Component } from 'react';
import { Route , Switch } from "react-router-dom"
import '../../static/css/main.css';
import Homepage from './homepage';
import Login from '../login/loginpage'
import EmployerPage from '../employer/employerpage'
import PageFooter from '../../common/footer/pagefooter';
import SignupChoice from '../registration/signupchoice';

class Mainlayout extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ Homepage } exact/>
          <Route path="/login/"  component={ Login }/>
          <Route path="/signup/"  component={ SignupChoice } />
          <Route path="/employer/"  component={ EmployerPage } />
        </Switch>
        <PageFooter/>
      </div>
    );
  }
}
export default Mainlayout;