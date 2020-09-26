import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Vehicles from './components/Vehicles';
import VehicleForm from './components/VehicleForm';
import Notifier from './components/Notifier'
import history from './history'
import Vservices from './services/vehicle.service'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <button onClick={() => history.push('./Vehicles')}>Transport</button>
      <BrowserRouter>
        <Switch>
          <Route exact path='/Notifier' component={Notifier} />
          <Route exact path='/Vehicles' component={Vehicles} />
          <Route exact path='/VehicleForm' component={VehicleForm} />
          <Route exact path='/Vservices' component={Vservices} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
