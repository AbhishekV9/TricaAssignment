import { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


function Searchbar(){
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

    const applyJob=()=>{
        
    }

    return(
        
        <div>
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

            <div>
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
                <Button variant="contained" onClick={()=> applyJob() } >Contained</Button>
            </div>
        </div>
    )
}
export default Searchbar;