import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ThePage from './ThePage'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import NavHeader from './NavHeader.js'
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='ph3 pv1 background-gray'>
        <Switch>
          <Route exact path='/' component={ThePage}/>
          <Route exact path='/page1' component={PageOne}/>
          <Route exact path='/Page2' component={PageTwo}/>
         </Switch>
      </div>
      </div>
    );
  }
}

export default App;
