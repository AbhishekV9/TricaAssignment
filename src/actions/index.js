import { ADD_JOBS } from "./actionTypes";

export function AddJobs(jobs){
    return{
        type:ADD_JOBS,
        jobs
    }
}