import fetch from 'cross-fetch';
import Constants from '../../constants';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const GET_SIGNUP_RESPONSE = 'GET_SIGNUP_RESPONSE';


export function requestSignup() {
    return {
        type: REQUEST_SIGNUP
    };
};

export function getSignupResponse(response) {
    return {
        type: GET_SIGNUP_RESPONSE,
        status: response.status
    };
};

export function signup(email, desc) {
    return function(dispatch) {
        dispatch(requestSignup());

        return fetch(Constants.URL.SIGNUP, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                desc: desc
            })
        })
        .then(
            response => dispatch(getSignupResponse(response))
        );
    };
}
