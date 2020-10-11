import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './components/home';
// import Requests from './components/requests';
// import Drivers from './components/drivers';
// import Vehicles from './components/vehicles/index';
// import VehicleForm from './components/vehicles/vehicleForm';
import Layout from './Layout';
import Home from './Home'
import Vehicles from '../Transport/Vehicles';
import VehicleForm from '../Transport/VehicleForm';
// import Assign from './components/assign';
// import NewRequest from './components/requests/newRequest';
// import RequestForm from './components/requests/requestForm';

class Main extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        {/* <Route exact path='/' component={Home} /> */}
                    </Switch>
                </Layout>
            </BrowserRouter>
            </div>
        );
    }
}

export default Main;