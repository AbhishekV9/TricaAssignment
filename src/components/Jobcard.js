import Button from '@mui/material/Button';
function Jobcard(props){
    const {job,handleToaster}=props;
    
    return(
        <div className="jobs" >
            <div >
                <img src={job.companyLogo} alt="company-logo" />
            </div>

            <div className="part">
                <div className="heading">
                    <p>{job.position}</p>
                </div>
                <p>{job.companyName}</p>  
            </div>

            <div className="part">
                <div className="heading">
                    <p>{job.location},India</p>
                </div>
                <p>Location</p>  
            </div>

            <div className="part">
                <div className="heading">
                    <p>{job.experienceRange.min}-{job.experienceRange.max} Years</p>
                </div>
                <p>Experiance</p>     
            </div>

            <div className="part">
                <div className="heading">
                   <p>{ job.requiredSkills.map((elem,index)=>(<span style= {{textTransform: 'capitalize'}} key={index}>{elem+" "}</span>))}</p>
                </div>
                <p>Skills</p>    
            </div>

            <div>
                <Button variant="contained" onClick={()=>{handleToaster(job.companyName)}}>Apply</Button>
            </div>
        </div>
    )
}

export default Jobcard;