import React from 'react';
import { Route } from 'react-router-dom';
import Searchbar from '../../../common/input/search-input';
import PostAJob from './tab-containers/postajob';
import Staff from './tab-containers/staff';
import Payroll from './tab-containers/payroll';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoaded: false,
            // postJobcontainer: true,
            // staffscontainer: false,
            // payrollcontainer: false,
        }
    }
    componentDidMount(){
        // let { location } = this.props
        this.setState({
            isLoaded: true,
            // url: location.pathname,
            // isPostActive: true,
            // isStaffActive: false,
            // isPayrollActive: false,
        })
    }
//   onChangeIpt( ev ){
//     let { name, value } = ev.target;
//     let obj = {};
//     obj[ name ] = value;
//     this.setState( obj );
//   }
    toggleShowTabContainer(e){
        console.log(e)
        // let { postJobcontainer, staffscontainer, payrollcontainer, url } = this.state
        
    }

    render(){
        // let { isLoaded, isPostActive, isStaffActive, isPayrollActive  } = this.state
        let { isLoaded } = this.state
        if(isLoaded){
            return(
                <div className= 'col-2'>
                    <Searchbar 
                        placeholder = { 'Search for a resume' }
                    />
                    <div className='col-2-tab'>
                        <a  href= '/employer/dashboard/post-a-job/'> Post A Job </a>
                        <a  href= '/employer/dashboard/staff/'>Staff</a>
                        <a  href= '/employer/dashboard/payroll/'> Payroll</a>
                    <span className='active'></span>
                    <hr/>
                    </div>
                    <div className='tab-container'>
                        <Route path= '/employer/dashboard/post-a-job/'component = { PostAJob }/>
                        <Route path= '/employer/dashboard/staff/' component = { Staff }/>
                        <Route path= '/employer/dashboard/payroll/' component = { Payroll }/>
                    </div>
                </div>
            )
        }else{
            return(
                <div> isLoaded not set to true </div>
            )
        }
    }
}