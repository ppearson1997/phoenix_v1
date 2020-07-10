import  React from  'react';
import HeaderNavigation from '../../common/headers/header-nav';

export  default  class  SignupChoice  extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            isLoaded: false
        }
    }

    componentDidMount(){
        this.setState({
            isLoaded: true
        })
    }
    render() {
        let { isLoaded } = this.state
        if(isLoaded){
            return(
            <div>
                <HeaderNavigation/>
                <div className='main-container'>
                    <div className="row">
                        <div className="col1">
                            <div className= 'div-box'> </div>
                            <div className= 'textarea'>
                                <i className="fa fa-check"></i> 100% FREE <br/>
                                <i className="fa fa-check"></i>  Find jobs <br/>
                                <i className="fa fa-check"></i>  Contact employers <br/>
                                <i className="fa fa-check"></i>  Dedicated to Filipino's <br/>
                                <i className="fa fa-check"></i>  Access free training <br/>
                                <i className="fa fa-check"></i>  Apply for home based jobs <br/><br/>
                                <center><button><a className= 'text-white' href="/signup/jobseeker/">I want to work</a></button></center>
                            </div>
                        </div>
                        <div className='col2'>
                            <div className= 'div-box'> </div>
                            <div className= 'textarea'>
                                <i className="fa fa-check"></i> Post Jobs<br/>
                                <i className="fa fa-check"></i> Contact Jobseekers<br/>
                                <i className="fa fa-check"></i> Bookmark candidates<br/>
                                <i className="fa fa-check"></i> Training resources<br/>
                                <i className="fa fa-check"></i> Hire Filipino Virtual Assistants<br/><br/><br/>
                                <center><button><a className= 'text-white' href="/signup/employer/">I want to hire</a></button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }else{
            return(
                <div> isLoaded state not true </div>
            )
        }
    }
}