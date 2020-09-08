import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Requests from './components/requests';
import Drivers from './components/drivers';
import Vehicles from './components/vehicles/index';
import VehicleForm from './components/vehicles/vehicleForm';
import Layout from './components/layout';
import Assign from './components/assign';
import RequestForm from './components/requests/requestForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/requests' component={Requests} />
            <Route exact path='/drivers' component={Drivers} />
            <Route exact path='/vehicles' component={Vehicles} />
            <Route exact path='/assign' component={Assign} />
            <Route exact path='/vehicleForm' component={VehicleForm} />
            <Route exact path='/requestForm' component={RequestForm} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;