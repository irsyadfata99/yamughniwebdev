import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/IndexPages';
import SigninPage from './pages/Signin';
import CompanyP from './components/CompanyProfile/CompanyProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Signin" component={SigninPage} exact />
        <Route path="/CompanyProfile" component={CompanyP} exact />
      </Switch>
    </Router>
  );
}

export default App;
