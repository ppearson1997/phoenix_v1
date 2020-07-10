import React from 'react';
import Searchbar from '../../../common/input/search-input';
import { Route } from 'react-router-dom';
import Messages from './tab-containers/inbox'

export default class Inbox extends React.Component{
//   onChangeIpt( ev ){
//     let { name, value } = ev.target;
//     let obj = {};
//     obj[ name ] = value;
//     this.setState( obj );
//   }s
    toggleShowTabContainer(tab){
        
    }

    render(){
        return(
            <div className= 'col-2'>
                <Searchbar
                    placeholder = 'Search for name'
                />
                <div className='col-2-tab'>
                    <a  href= '/employer/inbox/messages/'> Inbox </a>
                    <hr/>
                </div>
                <div className='tab-container'>
                    <Route path= '/employer/inbox/messages/'component = { Messages }/>
                </div>
            </div>
        )
    }
}