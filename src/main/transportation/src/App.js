import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Vehicles from './components/Vehicles';
import VehicleForm from './components/VehicleForm';
import Notifier from './components/Notifier'
import history from './history'
import Vservices from './services/vehicle.service'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import CardMedia from '@material-ui/core/CardMedia';
import { Row, Col } from 'react-bootstrap';
import { Button, Nav, FormControl } from 'react-bootstrap';
import Card from './components/homepage/card';
import Avatar from './components/homepage/avatar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">

            <div>
              <Row>
                <Col>
                  <Avatar />
                </Col>
                <Col><h1 style={{fontSize: 100,}}>C-four Industries</h1></Col>
              </Row>
            </div>
            <br/>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar>
            <br />
            <div>
              <Card />
            </div>
            <div>
            </div>

//      <button onClick={() => history.push('./Vehicles')}>Transport</button>
      <BrowserRouter>
        <Switch>
          <Route exact path='/Vehicles' component={Vehicles} />
          <Route exact path='/Vservices' component={Vservices} />
          <Route exact path='/Notifier' component={Notifier} />
          <Route exact path='/VehicleForm' component={VehicleForm} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
