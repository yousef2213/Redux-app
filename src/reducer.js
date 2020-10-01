import axios from "axios";
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    fetchUserReguest,
    fetchUserSuccess,
    fetchUserFailure
} from './Actions/actions.js'

const initState = {
    loading: false,
    Groups: [],
    error:''
}

const reducer = (state = initState, action) =>{ 
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
            
            case FETCH_USERS_SUCCESS:
                return {
                    loading: false,
                    Groups: action.payload,
                    error: ''
                }

            case FETCH_USERS_FAILURE:
                return {
                    loading: false,
                    Groups: [],
                    error: action.payload
                }
                
            default: 
                return {
                    loading: false,
                    Groups: [],
                    error: ''
                }
    }
}

const fetchGroups = () =>{
    return function(dispatch){
        dispatch(fetchUserReguest())
        axios.get("https://megakheir.herokuapp.com/ngos")
            .then(res => {
                const allGroups = res.data.data;
                dispatch(fetchUserSuccess(allGroups))
            }).catch(error => {
                // error.messaged
                dispatch(fetchUserFailure(error.message))
            })
    }
}



export {reducer, fetchGroups };