import { createStore } from 'redux';
import createRootReducer from './reducers/root-reducer.js';

export default () => {
    let store = createStore(createRootReducer());
    return store;
}