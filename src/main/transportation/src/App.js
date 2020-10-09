import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Card from './components/homepage/card';
import TransportMain from './components/Transport/Main';
import Vehicle from './components/Transport/Vehicles';
import VehicleForm from './components/Transport/VehicleForm';
import VehicleUpdate from './components/Transport/VehicleUpdate';
import Requests from './components/Transport/Requests';
import RequestForm from './components/Transport/RequestForm';
import './App.css';
import RequestAssign from './components/Transport/RequestAssign';

function App() {
  return (

    <div className="App" style={{padding: 10}}>

            <div>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Card} />
          <Route exact path='/TransportMain' component={TransportMain} />
          <Route exact path='/Requests' component={Requests} />
          <Route exact path='/RequestForm' component={RequestForm} />
          <Route exact path='/RequestAssign/:id' component={RequestAssign} />
          <Route exact path='/Vehicle' component={Vehicle} />
          <Route exact path='/VehicleForm' component={VehicleForm} />
          <Route exact path='/VehicleUpdate/:id' component={VehicleUpdate} />
        </Switch>
       </BrowserRouter>
            </div>
      <br />
      <div>
        <footer>
          <hr/>
          @Copyright© 2020
        </footer>
        </div>

    </div>
  );
}

export default App;
