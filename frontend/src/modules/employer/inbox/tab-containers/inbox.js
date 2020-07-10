import React from 'react';

export default class Messages extends React.Component{
  constructor(props){
    super(props)
    this.state={
        isLoaded: false,
    }
  }
  componentDidMount(){
    //   let { location } = this.props
      this.setState({
          isLoaded: true,
      })
  }
  render() {
    let { isLoaded } = this.state
    if(isLoaded){
      return (
        <div className="tab-content">
            <div className='col-1-inbox'>
                <div className='hdr'>
                    <label><b>All Messages</b></label>
                    <i className='fa fa-edit'/>
                </div>
                <div className='list-of-messages'>
                  <div className='desc'>
                    <div className='user-info'>
                        <i className='fa fa-circle'/>
                        <span>
                            <b>Jon Doe</b><br/>
                            <label>Position</label>
                        </span>
                    </div>
                    <div className='status'>
                        status
                    </div>
                </div>
                <div className='preview'>
                    <br/><br/><br/><br/><br/>
                    Show latest message here
                </div>
                </div>
            </div>
            <div className='col-2-inbox'>
              <div className='desc'>
                <div className='user-info'>
                    <i className='fa fa-circle'/>
                    <span>
                      <b>Jon Doe</b><br/>
                      <label>Position</label>
                    </span>
                </div>
              </div>
              <div className='msg-content'>
                <div className='div-msg'>
                  <div className='user-info'>
                      <i className='fa fa-circle'/>
                      <span>
                        message here<br/>
                        message here
                      </span>
                  </div>
                </div>
                <div className='msg-date'> <center>Today </center> </div>
                <div className='div-msg'>
                  <div className='user-info'>
                      <i className='fa fa-circle'/>
                      <span>
                        message here<br/>
                        message here
                      </span>
                  </div>
                  <br/>
                  <br/>
                  <br/>
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