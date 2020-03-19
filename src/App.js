import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Home/HomePage';
import {Router, Switch} from "react-router-doom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
function App() {
  return (
    <Redirect/>
    <Router history={history}>
      <Switch>
    <div className="app d-flex align-items-center justify-content-center h-100">
      <HomePage/>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
