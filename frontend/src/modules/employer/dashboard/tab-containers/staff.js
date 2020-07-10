import React from 'react';

export default class Staff extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isLoaded: false,
    }
  }
  componentDidMount(){
    this.setState({
      isLoaded: true,
    })
  }
  render() {
    let { isLoaded } = this.state
    if(isLoaded){
      return (
        <div className="div-staff">
          <button>Staff</button>
        </div>
      )
    }else{
      return(
        <div>isLoaded state not true</div>
      )
    }
  }
}