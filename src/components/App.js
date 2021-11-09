import React,{ Component} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import jobs from '../utils/jobs.json';
import Navbar from "./Navbar";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

class App extends Component{
    
    componentDidMount(){
        console.log(jobs);
    }
    render(){
        return(
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                
            </Grid>
        );
    }
}

export default App;