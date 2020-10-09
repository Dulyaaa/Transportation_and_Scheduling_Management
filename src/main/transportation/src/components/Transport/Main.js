import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './components/home';
// import Requests from './components/requests';
// import Drivers from './components/drivers';
// import Vehicles from './components/vehicles/index';
// import VehicleForm from './components/vehicles/vehicleForm';
import Layout from './Layout';
import Vehicles from '../Transport/Vehicles';
import VehicleForm from '../Transport/VehicleForm';
// import Assign from './components/assign';
// import NewRequest from './components/requests/newRequest';
// import RequestForm from './components/requests/requestForm';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                   <div>
                        <h1>Welcome to Transport Department</h1>
                   </div>

                    <Switch>
                        {/* <Route exact path='/' component={Vehicles} />
                        <Route exact path='/Vehicles' component={Vehicles} />
                        <Route exact path='/VehicleForm' component={VehicleForm} />
                        <Route exact path='/drivers' component={Drivers} />
                        <Route exact path='/vehicles' component={Vehicles} />
                        <Route exact path='/assign' component={Assign} />
                        <Route exact path='/vehicleForm' component={VehicleForm} />
                        <Route exact path='/requestForm' component={RequestForm} />
                        <Route exact path='/newRequest/:id' component={NewRequest} /> */}
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Main;