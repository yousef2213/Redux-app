const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUserReguest  = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess  = Groups =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: Groups
    }
}
const fetchUserFailure  = error =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    fetchUserReguest,
    fetchUserSuccess,
    fetchUserFailure
    }