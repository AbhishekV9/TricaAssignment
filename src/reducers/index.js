import { ADD_JOBS } from "../actions/actionTypes"

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
        default:
            return state
    }
}