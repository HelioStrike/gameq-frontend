import {
    REQUEST_SIGNUP,
    GET_SIGNUP_RESPONSE
} from '../actions/auth';


const initialState = {};

export default function auth(state = initialState, action) {
    switch(action.type) {
        case REQUEST_SIGNUP:
            return Object.assign({}, state, {
                signupLoading: true
            })
        case GET_SIGNUP_RESPONSE:
            return Object.assign({}, state, {
                signupLoading: false,
                mailSuccess: (action.status/100 == 2)
            })        
        default:
            return state
    }
};
