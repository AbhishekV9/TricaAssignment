import React,{ Component} from 'react';
import { connect } from 'react-redux';





import jobs from '../utils/jobs.json';
import Navbar from "./Navbar";
import {AddJobs} from "../actions";
import Jobcard from './Jobcard';
import Searchbar from "./Searchbar"


class App extends Component{
    
    componentDidMount(){
        this.props.dispatch(AddJobs(jobs));
    }
    
    render(){
        const {jobs} =this.props;

        return(
            <div>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <Searchbar />
                </div>
                
                {jobs.map((job,index)=>(
                    <div className="jobcards">
                        <Jobcard job={job} key={index}/>
                    </div>
                ))}
                
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