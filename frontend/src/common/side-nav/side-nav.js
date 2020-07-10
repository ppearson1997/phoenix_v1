import React from 'react';

export default class SideBarNavigation extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            options: []
        }
    }
    componentDidMount(){
        let { options } = this.props
        this.setState({
            options: options
        })
    }
//   onChangeIpt( ev ){
//     let { name, value } = ev.target;
//     let obj = {};
//     obj[ name ] = value;
//     this.setState( obj );
//   }
  render(){
      let { options } = this.state
    return(
        <div className= 'col-1'>
            { options.map((item, i)=>{
                return(
                    <a key = { i } href= {item.url }>{ item.label }</a>
                )
            })
            }
        </div>
    )
  }
}