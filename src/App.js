import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'

import './App.css';

const HatsPage= () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    // <div>
    //   Hello world!
    //   <HomePage></HomePage>
    // </div>
    <div>
      <Switch>
        <Route path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
