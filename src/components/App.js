import React,{ Component} from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import Alert from '@mui/material/Alert';
import jobs from '../utils/jobs.json';
import Navbar from "./Navbar";
import {AddJobs} from "../actions";
import Jobcard from './Jobcard';
import Searchbar from "./Searchbar"


class App extends Component{
    constructor(){
        super();
        this.state={
            showToaster:false,
            companyName:""
        }
    }
    componentDidMount(){
        this.props.dispatch(AddJobs(jobs));
    }

    handleToaster=(companyName)=>{
        this.setState({
            showToaster:true,
            companyName
        })
        setTimeout(()=>{
            this.setState({
                showToaster:false,
                companyName:""
            })
        },2000)
    }
    
    render(){
        const {jobs} =this.props; 
        return(
            <div className="main">

                <div> 
                    {this.state.showToaster && <Alert severity="success" color="info">
                        Successfully Applied to {this.state.companyName}
                    </Alert>}
                </div>

                <div>
                    <Navbar/>
                </div>

                <div>
                    <Searchbar />
                </div>

                <div className="jobcardcontainer">
                    {jobs.map((job,index)=>(
                        <div className="jobcards">
                            <Jobcard  key={index} job={job} handleToaster={this.handleToaster} />
                        </div>
                    ))}
                </div>
                
                <div>
                    <Footer />
                </div>

            </div>
        );
    }
}

function mapStatetoprops(state){
    return{
      jobs:state.jobs
    }
  }
  
  //using connect to connect this component to global store
  const connectedComponent=connect(mapStatetoprops)(App);
  
  export default connectedComponent;