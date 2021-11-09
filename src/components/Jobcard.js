import Button from '@mui/material/Button';
function Jobcard(props){
    const {job}=props;
    console.log(job);
    return(
        <div className="jobs">
            <div >
                <img src={job.companyLogo} alt="company-logo" />
            </div>

            <div className="part">
                <div>
                    <h4>{job.position}</h4>
                </div>
                <p>{job.companyName}</p>  
            </div>

            <div className="part">
                <div>
                    <h4>{job.location},India</h4>
                </div>
                <p>Location</p>  
            </div>

            <div className="part">
                <div>
                    <h4>{job.experienceRange.min}-{job.experienceRange.max} Years</h4>
                </div>
                <p>Experiance</p>     
            </div>

            <div className="part">
                <div>
                   
                </div>
                <p>Skills</p>    
            </div>

            <div>
                <Button variant="contained">Apply</Button>
            </div>
        </div>
    )
}

export default Jobcard;