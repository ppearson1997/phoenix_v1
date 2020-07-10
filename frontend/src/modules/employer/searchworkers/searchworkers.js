import React from 'react';
import Searchbar from '../../../common/input/search-input'

export default class SearchWorkers extends React.Component{
    // constructor(props){
    //     super(props)
    //     let { location } = this.props
    //     this.state={
    //         url: location.pathname,
    //     }
    // }
    // componentDidMount(){
    //     let { location } = this.props
    //     this.setState({
    //         url: location.pathname,
    //     })
    // }
//   onChangeIpt( ev ){
//     let { name, value } = ev.target;
//     let obj = {};
//     obj[ name ] = value;
//     this.setState( obj );
//   }
    toggleShowTabContainer(tab){
        
    }

    render(){
        // let { url } = this.state
        return(
            <div className= 'col-2'>
                <Searchbar 
                    placeholder = { 'Search for a resume' }
                />
                <div className='col-2-tab'>
                <span className='active'></span>
                <hr/>
                </div>
                <div className='tab-container'>
                    
                </div>
            </div>
        )
    }
}