import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Authorization from './page/Authorization/Authorization';
import Desktop from './page/Desktop/Desktop';

/**
 * Redux
 */
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <main className="main">
      <Provider store={store} >
        <BrowserRouter>
          <Switch>
            <Route component={Authorization} path="/" exact />
            <Route component={Desktop} path="/desktop" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
