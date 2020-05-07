import {
    REQUEST_ADD_DATA,
    GET_ADD_DATA_RESPONSE,
    REQUEST_WAITING_QUOTE,
    GET_WAITING_QUOTE_RESPONSE,
    REQUEST_VALIDATE_QUOTE,
    GET_VALIDATE_QUOTE_RESPONSE,
    REQUEST_RANDOM_QUOTE,
    GET_RANDOM_QUOTE_RESPONSE
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
            
        case REQUEST_WAITING_QUOTE:
            return Object.assign({}, state, {
                waitingQuoteLoading: true,
            })
        case GET_WAITING_QUOTE_RESPONSE:
            return Object.assign({}, state, {
                waitingQuote: action.waitingQuote,
                waitingQuoteLoading: false,
            })        

        case REQUEST_VALIDATE_QUOTE:
            return Object.assign({}, state, {
                validateQuoteLoading: true,
            })        
        case GET_VALIDATE_QUOTE_RESPONSE:
            return Object.assign({}, state, {
                validateQuoteLoading: false,
                validateQuoteSuccess: (Math.floor(action.status/100) == 2)
            })     

        case REQUEST_RANDOM_QUOTE:
            return Object.assign({}, state, {
                quoteLoading: true,
            })            
        case GET_RANDOM_QUOTE_RESPONSE:
            return Object.assign({}, state, {
                quote: action.quote,
                quoteLoading: false,
            })        

        default:
            return state
    }
};
