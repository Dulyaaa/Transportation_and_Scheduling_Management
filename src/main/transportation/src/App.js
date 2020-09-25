import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Vehicles from './components/Vehicles';
import VehicleForm from './components/VehicleForm';
import history from './history'
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <button onClick={() => history.push('./Vehicles')}>Transport</button>
      <BrowserRouter>
        <Switch>
          <Route exact path='/Vehicles' component={Vehicles} />
          <Route exact path='/VehicleForm' component={VehicleForm} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
