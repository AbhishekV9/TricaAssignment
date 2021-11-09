import { useState } from 'react';
import {connect } from 'react-redux';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import jobs1 from '../utils/jobs.json';
import {filterJobs,AddJobs} from "../actions";


function Searchbar(props){
    const [ searchBar, setSearchbar] =useState("");
    const [all , setAll ] =useState(false);
    const [free , setFree ]= useState(false);
    const [part , setPart ]= useState(false);
    const [full ,setFull ]=useState(false);
    
    
    const handleAll=()=>{
        setAll(!all);
    }

    const handleFree=()=>{
        setFree(!free);
    }

    const handleFull=()=>{
        setFull(!full)
    }

    const handlePart=()=>{
        setPart(!part);
    }


    const handleChange=(e)=>{
        const newValue=e.target.value
        setSearchbar(newValue);
    }

    const applyJob=async ()=>{
        console.log(all,full,part,free)
        await props.dispatch(AddJobs(jobs1))
        const {dispatch}=props;
        const newValue=searchBar.toLowerCase();
        const filteredArray=jobs1.filter((job)=>{
            return job.position
            .toLowerCase()
            .includes(newValue) || job.location
            .toLowerCase()
            .includes(newValue) || job.companyName
            .toLowerCase()
            .includes(newValue);
        })
        console.log("asasas",filteredArray);
        if(all){
            dispatch(filterJobs(filteredArray));
        }else if(free && full && part){
            const filteredArray2=filteredArray.filter((job)=>{
                return job.jobType
                .includes("Freelancer") || job.jobType
                .includes("Part Time") || job.jobType
                .includes("Full Time") ;
            })
            dispatch(filterJobs(filteredArray2));
        }else if(free && part){
            const filteredArray2=filteredArray.filter((job)=>{
                return job.jobType
                .includes("Part Time") || job.jobType
                .includes("Freelancer");
                
            });
            dispatch(filterJobs(filteredArray2));
        }else if(free && full){
            const filteredArray2=filteredArray.filter((job)=>{
                return job.jobType
                .includes("Full Time") || job.jobType
                .includes("Freelancer");
            });
            dispatch(filterJobs(filteredArray2));
        }else if(part && full){
            const filteredArray2=filteredArray.filter((job)=>{
                return job.jobType
                .includes("Full Time") || job.jobType
                .includes("Part Time");
            });
            dispatch(filterJobs(filteredArray2));
        }else if(full){
            const filteredArray2=filteredArray.filter((job)=>{
                return job.jobType
                .includes("Full Time");
            });
            dispatch(filterJobs(filteredArray2));
        }else if(part){
            const filteredArray2=filteredArray.filter((job)=>{
                return job.jobType
                .includes("Part Time");
            });
            dispatch(filterJobs(filteredArray2));
        }else if(free){
            const filteredArray2=filteredArray.filter((job)=>{
                return job.jobType
                .includes("Freelancer");
            });
            dispatch(filterJobs(filteredArray2));
        }
        
    }

    return(
        
        <div  className="searchbar">
            <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search By Keywords"
                    inputProps={{ 'aria-label': 'search google maps' }} 
                    onChange={ handleChange }
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            </div>

            <div >
                <FormControlLabel control={<Checkbox  />} label="All" onChange={handleAll} />
            </div>
            <div>
                <FormControlLabel control={<Checkbox  />} label="Full-Time" onChange={handleFull} />
            </div>
            <div>
                <FormControlLabel control={<Checkbox  />} label="Part-Time" onChange={handlePart} />
            </div>
            <div>
                <FormControlLabel control={<Checkbox  />} label="Freelancer" onChange={handleFree} />
            </div>
            <div >
                <Button variant="contained" onClick={()=> applyJob() } >Find Job</Button>
            </div>
        </div>
    )
}

function mapStatetoprops(state){
    return{
      jobs:state.jobs
    }
  }
  
  //using connect to connect this component to global store
  const connectedComponent=connect(mapStatetoprops)(Searchbar);
  
  export default connectedComponent;