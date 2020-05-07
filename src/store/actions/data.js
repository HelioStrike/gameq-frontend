import fetch from 'cross-fetch';
import ApolloClient from 'apollo-boost';
import Constants from '../../constants';
import { gql } from "apollo-boost";

export const REQUEST_ADD_DATA = 'REQUEST_ADD_DATA';
export const GET_ADD_DATA_RESPONSE = 'GET_ADD_DATA_RESPONSE';

export const REQUEST_WAITING_QUOTE = 'REQUEST_WAITING_QUOTE';
export const GET_WAITING_QUOTE_RESPONSE = 'GET_WAITING_QUOTE_RESPONSE';

export const REQUEST_VALIDATE_QUOTE = 'REQUEST_VALIDATE_QUOTE';
export const GET_VALIDATE_QUOTE_RESPONSE = 'GET_VALIDATE_QUOTE_RESPONSE';

export const REQUEST_RANDOM_QUOTE = 'REQUEST_RANDOM_QUOTE';
export const GET_RANDOM_QUOTE_RESPONSE = 'GET_RANDOM_QUOTE_RESPONSE';

export function requestAddData() {
    return {
        type: REQUEST_ADD_DATA
    };
};

export function getAddDataResponse(response) {
    return {
        type: GET_ADD_DATA_RESPONSE,
        status: response.status
    };
};

export function requestWaitingQuote() {
    return {
        type: REQUEST_WAITING_QUOTE
    };
};

export function getWaitingQuoteResponse(waitingQuote) {
    return {
        type: GET_WAITING_QUOTE_RESPONSE,
        waitingQuote: waitingQuote
    };
};

export function requestValidateQuote() {
    return {
        type: REQUEST_VALIDATE_QUOTE
    };
};

export function getValidateQuoteResponse(response) {
    return {
        type: GET_VALIDATE_QUOTE_RESPONSE,
        status: response.status
    };
};

export function requestRandomQuote() {
    return {
        type: REQUEST_RANDOM_QUOTE
    };
};

export function getRandomQuoteResponse(quote) {
    return {
        type: GET_RANDOM_QUOTE_RESPONSE,
        quote: quote
    };
};

export function addData(game, character, quote) {

    return function(dispatch) {
        dispatch(requestAddData());

        return fetch(Constants.URL.ADDDATA, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                game: game,
                character: character,
                quote: quote
            })
        })
        .then(
            response => dispatch(getAddDataResponse(response))
        );
    };
}

export function getWaitingQuote() {

    return function(dispatch) {
        dispatch(requestWaitingQuote());

        const client = new ApolloClient({
            uri: Constants.URL.GRAPHQL,
        });

        return client.query({
            query: gql`
            {
                getRandomWaitingquote {
                    id
                    game
                    character
                    quote
                }
            }
            `
        })
        .then(
            response => {
                dispatch(getWaitingQuoteResponse(response.data.getRandomWaitingquote));
            }
        );
    };
}

export function validateQuote(id, vote) {

    return function(dispatch) {
        dispatch(requestValidateQuote());

        return fetch(Constants.URL.VALIDATEDATA, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                vote: vote
            })
        })
        .then(
            response => {
                dispatch(getValidateQuoteResponse(response));
                dispatch(getWaitingQuote());
            }
        );
    };
}

export function getRandomQuote() {

    return function(dispatch) {
        dispatch(requestRandomQuote());

        const client = new ApolloClient({
            uri: Constants.URL.GRAPHQL,
        })
        
        return client.query({
            query: gql`
            {
                getRandomQuote {
                    text
                    character {
                        name
                    }
                    game {
                        name
                    }
                }
            }
            `
        })
        .then(
            response => {
                dispatch(getRandomQuoteResponse(response.data.getRandomQuote));
            }
        );
    };
}