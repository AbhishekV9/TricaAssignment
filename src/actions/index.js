import { ADD_JOBS,FILTER_JOBS } from "./actionTypes";

export function AddJobs(jobs){
    return{
        type:ADD_JOBS,
        jobs
    }
}

export function filterJobs(jobs){
    return{
        type:FILTER_JOBS,
        jobs
    }
}
