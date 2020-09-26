import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";
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
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      vehicleNumber: "",
      registeredYear: "",
      type: "",
      capacity: "",
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

  saveTutorial() {
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

  newTutorial() {
    this.setState({
      id: null,
      vehicleNumber: "",
      registeredYear: "",
      type: "",
      capacity: "",
      status: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully inserted new Vehicle!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Submit New
            </button>
          </div>
        ) : (
          <div Style="width:600px; margin:0 auto">
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
                <label htmlFor="vehicleNumber">Vehicle Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="vehicleNumber"
                  required
                  value={this.state.vehicleNumber}
                  onChange={this.onChangevehicleNumber}
                  name="vehicleNumber"
                />
              </div>

              <div className="form-group">
                <label htmlFor="registeredYear">Registered Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="registeredYear"
                  required
                  value={this.state.registeredYear}
                  onChange={this.onChangeregisteredYear}
                  name="registeredYear"
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  required
                  value={this.state.type}
                  onChange={this.onChangetype}
                  name="type"
                />
              </div>

              <div className="form-group">
                <label htmlFor="capacity">Capacity</label>
                <input
                  type="text"
                  className="form-control"
                  id="capacity"
                  required
                  value={this.state.capacity}
                  onChange={this.onChangecapacity}
                  name="capacity"
                />
              </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}