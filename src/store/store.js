import { createStore, applyMiddleware } from 'redux';
import createRootReducer from './reducers/root-reducer.js';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger();

export default () => {
    let store = createStore(
        createRootReducer(),
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    return store;
}