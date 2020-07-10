import React from 'react';

export default class PostAJob extends React.Component{
  constructor(props){
    super(props)
    let { location } = this.props
    this.state={
        isLoaded: false,
        url: location.pathname,
    }
  }
  componentDidMount(){
      let { location } = this.props
      this.setState({
          isLoaded: true,
          url: location.pathname,
      })
  }
  render() {
    let { isLoaded } = this.state
    if(isLoaded){
      return (
        // <div className="div-post-a-job">
        //   <div className='inside-div'>
        //     <span><i>  Lorem ipsum dolor sit amet, consectetur adipiscing elit  </i></span><br/><br/>
        //     <button className= 'btn'>Post A Job</button>
        //   </div>
        // </div>
        <div>
          <div className= 'filter'>
            <select>
              <option>Filter</option>
              <option>Filter</option>
            </select>
            <div className= 'div-right-actions'>
              <i className='fa fa-th-large'></i>
              <i className='fa fa-th-large'></i>
            </div>
            <button className= 'btn-create'>Create Job</button>
          </div>
          <div className="tab-content-container">
            <div className='div-hdr'>
              <div className='hdr'>
                <div className='company'>
                  <i className='fa fa-square'/>
                  <span>
                    <b> Company Name </b><br/> June 1, 2020
                  </span>
                </div>
                <div className='company-dtl'>
                  <div className='statistics'>
                    Insert Company Statistics here <br/>
                    Insert Company Statistics here
                  </div>
                  <div className='skills'>
                    Job Position
                  </div>
                </div>
              </div>
            </div>
            <div className='job-desc'>
              <h3>Job Position</h3>
              <p>
                Insert job description here<br/>
                Insert job description here<br/>
                Insert job description here<br/>
                Insert job description here<br/>
                Insert job description here<br/><br/>
              </p>
              <label><b>Skills </b></label><br/><br/>
              <div className='skills'>
                Insert skill here
              </div>
              <div className='skills'>
                Insert skill here
              </div>
              <div className='skills'>
                Insert skill here
              </div>
            </div>
            <div className= 'div-btn'>
              <button className= 'btn-edit'>Edit</button>
              <button className= 'btn-default'>Delete</button>
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