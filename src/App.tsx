import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Authorization from './page/Authorization/Authorization';
import Desktop from './page/Desktop/Desktop';

const App: React.FC = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Switch>
          <Route component={Authorization} path="/" exact />
          <Route component={Desktop} path="/desktop" />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
