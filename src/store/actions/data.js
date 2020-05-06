import fetch from 'cross-fetch';
import Constants from '../../constants';

export const REQUEST_ADD_DATA = 'REQUEST_ADD_DATA';
export const GET_ADD_DATA_RESPONSE = 'GET_ADD_DATA_RESPONSE';


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
