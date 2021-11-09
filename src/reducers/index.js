import { ADD_JOBS, FILTER_JOBS } from "../actions/actionTypes"

const initialState={
    jobs:[]
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        case ADD_JOBS:{
            return{
                ...state,
                jobs:action.jobs
            }
        }
        case FILTER_JOBS:{
            return{
                ...state,
                jobs:action.jobs
            }
        }
        default:
            return state
    }
}