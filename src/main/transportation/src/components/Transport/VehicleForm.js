import React, { Component } from "react";
import VehicleDataService from "../../services/vehicle.service";
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class VehicleForm extends Component {
  
  constructor(props) {
    super(props);
    this.onChangevehicleNumber = this.onChangevehicleNumber.bind(this);
    this.onChangeregisteredYear = this.onChangeregisteredYear.bind(this);
    this.onChangetype = this.onChangetype.bind(this);
    this.onChangecapacity = this.onChangecapacity.bind(this);
    this.saveVehicle = this.saveVehicle.bind(this);
    this.newVehicle = this.newVehicle.bind(this);
    this.addDetails = this.addDetails.bind(this);

    this.state = {
      id: null,
      vehicleNumber: "",
      registeredYear: "",
      type: "",
      capacity: "",
      price: 0,
      status: false,

      submitted: false
    };
  }

  onChangevehicleNumber(e) {
    this.setState({
      vehicleNumber: e.target.value
    });
  }

  onChangeregisteredYear(e) {
    this.setState({
      registeredYear: e.target.value
    });
  }

  onChangetype(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangecapacity(e) {
    this.setState({
      capacity: e.target.value
    });
  }

  saveVehicle() {
    var data = {
      vehicleNumber: this.state.vehicleNumber,
      registeredYear: this.state.registeredYear,
      type: this.state.type,
      capacity: this.state.capacity,
    };

    VehicleDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          vehicleNumber: response.data.vehicleNumber,
          registeredYear: response.data.registeredYear,
          type: response.data.type,
          capacity: response.data.capacity,
          status: response.data.status,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newVehicle() {
    this.setState({
      id: null,
      vehicleNumber: "",
      registeredYear: "",
      type: "",
      capacity: "",
      price: 0,
      status: false,

      submitted: false
    });
  }

  addDetails() {
    this.setState({
      id: null,
      vehicleNumber: "SP BBB 0987",
      registeredYear: "2018",
      type: "Lorry",
      capacity: "500",
      price: 0,
      status: false,
    })
  }

  render() {
    return (
      <div className="submit-form" style={{ width: 900 }}>
        {this.state.submitted ? (
          <div>
            <h4>You inserted a new Vehicle successfully!</h4>
            <button className="btn btn-success" onClick={this.newVehicle}>
              Want to submit New Vehicle?
            </button>
          </div>
        ) : (
          <div Style="width:900px;">
            {/* <div className="form-group">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Vehicle Number</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange ={this.onChangeTitle}
                    value = {this.state.title}
                  />
                </InputGroup>
            </div> */}

              <div className="form-group">
                <h2>ADD NEW VEHICLE DETAILS</h2>
                <br/><br/>
                <label htmlFor="vehicleNumber" style = {{fontSize: 20}}>Vehicle Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="vehicleNumber"
                  required
                  value={this.state.vehicleNumber}
                  onChange={this.onChangevehicleNumber}
                  name="vehicleNumber"
                  style={{fontSize: 25}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="registeredYear" style={{ fontSize: 20}}>Registered Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="registeredYear"
                  required
                  value={this.state.registeredYear}
                  onChange={this.onChangeregisteredYear}
                  name="registeredYear"
                  style={{ fontSize: 25}}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type" style={{ fontSize: 20}}>Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  required
                  value={this.state.type}
                  onChange={this.onChangetype}
                  name="type"
                  style={{ fontSize: 25 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="capacity" style={{ fontSize: 20}}>Capacity</label>
                <input
                  type="text"
                  className="form-control"
                  id="capacity"
                  required
                  value={this.state.capacity}
                  onChange={this.onChangecapacity}
                  name="capacity"
                  style={{ fontSize: 25 }}
                />
              </div>

              <button onClick={this.saveVehicle} className="btn btn-success" style={{ fontSize: 23, width: 250}}>
              Submit
            </button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={this.addDetails} className="btn btn-danger" style={{ fontSize: 23, width: 250}}>
                DEMO
            </button>
          </div>
        )}
      </div>
    );
  }
}