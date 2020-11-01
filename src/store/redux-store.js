import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import itemReducer from '../reducers/itemReducer';
import filterReducer from '../reducers/filterReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore (
        combineReducers({
            items : itemReducer,
            filters : filterReducer
        }),
        compose(applyMiddleware(thunk))
    );
    // composeEnhancers(applyMiddleware(thunk))
    return store;
}