import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import createStore from './store/redux-store';
import { startSetItem } from './actions/items'

const reduxStore = createStore();

const jsx = (
  <Provider store={reduxStore}>
    <App />
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};

reduxStore.dispatch(startSetItem()).then(() => {
  renderApp();
})

