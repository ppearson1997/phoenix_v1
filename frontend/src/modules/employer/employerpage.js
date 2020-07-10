import React from 'react';
import { Route } from 'react-router-dom';
import HeaderDashboardNavigation from '../../common/headers/header-dashboard';
import SideBarNavigation from '../../common/side-nav/side-nav';
import Dashboard from '../employer/dashboard/dashboard';
import SearchWorkers from './searchworkers/searchworkers';
import Inbox from './inbox/inbox';
import Tools from './tools/tools';

export default class EmployerPage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        isLoaded: false,
        options: [
                {'label': 'Dashboard', 'url': '/employer/dashboard/post-a-job/'},
                {'label': 'Search Workers', 'url': '/employer/searchworkers/'},
                {'label': 'Inbox', 'url': '/employer/inbox/messages/'},
                {'label': 'Applicants', 'url': '/employer/applicants/'},
                {'label': 'Tools', 'url': '/employer/tools/'}
        ]
      }
    }
    componentDidMount() {
      this.setState({
        isLoaded: true,
      })
    }
    render(){
      let { options, isLoaded } = this.state
      if(isLoaded){
        return(
          <div>
            <HeaderDashboardNavigation/>
            <div className='dashboard-container'>
              <div className= 'main-container'>
                <SideBarNavigation
                  options = { options }
                />
                <div className = 'nav-content-container'>
                  <Route path='/employer/dashboard/' component = { Dashboard }/>
                  <Route path='/employer/searchworkers/' component = { SearchWorkers }/>
                  <Route path='/employer/inbox/' component = { Inbox }/>
                  <Route path='/employer/tools/' component = { Tools }/>
                </div>
              </div>
            </div>
          </div>
        )
      }else{
        return(
          <div>isLoaded state not true</div>
        )
      }
    }
  }