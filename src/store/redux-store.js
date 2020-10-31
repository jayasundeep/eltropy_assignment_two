import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import itemReducer from '../reducers/ItemReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore (
        combineReducers({
            items : itemReducer
        }),
        compose(applyMiddleware(thunk))
    );
    // composeEnhancers(applyMiddleware(thunk))
    return store;
}