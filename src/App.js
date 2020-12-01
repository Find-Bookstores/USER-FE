import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserRouter from './routers/UserRouter';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={ UserRouter }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
