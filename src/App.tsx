import React from 'react';
import Authorization from './components/Authorization/Authorization';
import Desktop from './Desktop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const App: React.FC = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Authorization />
          </Route>
          <Route path="/desktop">
            <Desktop />
          </Route>
        </Switch>
      </BrowserRouter>
    </main> 
  );
}

export default App;
