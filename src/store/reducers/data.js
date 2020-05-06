import {
    REQUEST_ADD_DATA,
    GET_ADD_DATA_RESPONSE
} from '../actions/data';


const initialState = {};

export default function data(state = initialState, action) {
    switch(action.type) {
        case REQUEST_ADD_DATA:
            return Object.assign({}, state, {
                addDataLoading: true
            })
        case GET_ADD_DATA_RESPONSE:
            return Object.assign({}, state, {
                addDataLoading: false,
                addDataSuccess: (Math.floor(action.status/100) == 2)
            })        
        default:
            return state
    }
};
