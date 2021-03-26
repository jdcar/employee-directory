import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Directory from './pages/Directory'
import './App.css';

import Navbar from './components/Jumbotron';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/directory">
            <Directory />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div>REact page</div>
  );
}

export default App;
