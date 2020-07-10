import React from 'react';

export default class Searchbar extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    // componentDidMount(){
    //     let { options } = this.props
    //     this.setState({
    //         options: options
    //     })
    // }
    // onChangeIpt( ev ){
    //     let { name, value } = ev.target;
    //     let obj = {};
    //     obj[ name ] = value;
    //     this.setState( obj );
    // }
  render(){
    return(
        <div className = 'div-search'>
            <div className='searchbar'>
                <i className='fa fa-search icon'/>
                <input type="text" placeholder= { this.props.placeholder }/>
                <button>Search</button>
            </div>
        </div>
    )
  }
}