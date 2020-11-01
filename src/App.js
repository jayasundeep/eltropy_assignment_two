// import logo from './logo.svg';

// import ItemForm from './components/ItemForm';
import React from 'react';
import EditItem from './components/EditItem'
import Home from './components/Home';

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

/*
function App() {
  return (
    <div className="App">
      <h1> Hello! </h1>
      <AddItem />
      <ItemList />
    </div>
  );
}
*/
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
        <div>
            <h1> Item Cart </h1>
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/edit/:id' component={EditItem} />
            </Switch>
        </div>
    </Router>
)

export default App;
