import React, { Component } from "react";
import VehicleDataService from "../../services/vehicle.service";
import '../../App.css'
import { red } from "@material-ui/core/colors";

export default class VehicleUpdate extends Component {

    constructor(props) {
        super(props);
        this.onChangevehicleNumber = this.onChangevehicleNumber.bind(this);
        this.onChangeregisteredYear = this.onChangeregisteredYear.bind(this);
        this.onChangetype = this.onChangetype.bind(this);
        this.onChangecapacity = this.onChangecapacity.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.getVehicle = this.getVehicle.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);

        this.state = {
            currentVehicle: {
                id: null,
                vehicleNumber: "",
                registeredYear: "",
                type: "",
                status: false,
                capacity: "",
                price: 0
            },

            message: ""
        };
    }

    componentDidMount() {
        this.getVehicle(this.props.match.params.id);
    }

    onChangevehicleNumber(e) {
        const vehicleNumber = e.target.value;

        this.setState(function (prevState) {
            return {
                currentVehicle: {
                    ...prevState.currentVehicle,
                    vehicleNumber: vehicleNumber
                }
            };
        });
    }

    onChangeregisteredYear(e) {
        const registeredYear = e.target.value;

        this.setState(prevState => ({
            currentVehicle: {
                ...prevState.currentVehicle,
                registeredYear: registeredYear
            }
        }));
    }

    onChangetype(e) {
        const type = e.target.value;

        this.setState(prevState => ({
            currentVehicle: {
                ...prevState.currentVehicle,
                type: type
            }
        }));
    }

    onChangecapacity(e) {
        const capacity = e.target.value;

        this.setState(prevState => ({
            currentVehicle: {
                ...prevState.currentVehicle,
                capacity: capacity
            }
        }));
    }

    onChangeprice(e) {
        const price = e.target.value;

        this.setState(prevState => ({
            currentVehicle: {
                ...prevState.currentVehicle,
                price: price
            }
        }));
    }

    getVehicle(id) {
        VehicleDataService.get(id)
            .then(response => {
                this.setState({
                    currentVehicle: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateStatus(status) {
        var data = {
            id: this.state.currentVehicle.id,
            vehicleNumber: this.state.currentVehicle.vehicleNumber,
            registeredYear: this.state.currentVehicle.registeredYear,
            type: this.state.currentVehicle.type,
            capacity: this.state.currentVehicle.capacity,
            status: status,
            price: this.state.currentVehicle.price,
        };

        VehicleDataService.update(this.state.currentVehicle.id, data)
            .then(response => {
                this.setState(prevState => ({
                    currentVehicle: {
                        ...prevState.currentVehicle,
                        status: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateVehicle() {
        VehicleDataService.update(
            this.state.currentVehicle.id,
            this.state.currentVehicle
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The vehicle details were updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){

        const{currentVehicle} = this.state;

        return(

            <div>
                {currentVehicle ? (
                    <div className="edit-form" style={{width: 500}}>
                        <h3>Vehicle Details of "{currentVehicle.vehicleNumber}"</h3><br/><br/>
                        <form>
                            <div className="form-group">
                                <label style={{fontSize: 20}}>
                                    <strong>Vehicle Number:</strong>
                                </label>{" "}
                                {currentVehicle.vehicleNumber}
                                {/* <label htmlFor="vehicleNumber">Vehicle Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentVehicle.title}
                                    onChange={this.onChangeTitle}
                                /> */}
                            </div>
                            <div className="form-group">
                                <label style={{ fontSize: 20 }}>
                                    <strong>Registered Year:</strong>
                                </label>{" "}
                               {currentVehicle.registeredYear}
                                {/* <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentVehicle.description}
                                    onChange={this.onChangeDescription}
                                /> */}
                            </div>
                            <div>
                                <label className="form-group" style={{ fontSize: 20 }}>
                                    <strong>Type:</strong>
                                </label>{" "}
                                {currentVehicle.type}
                                {/* <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentVehicle.description}
                                    onChange={this.onChangeDescription}
                                /> */}
                            </div>

                            <div className="form-group">
                                <strong> <label htmlFor="capacity" style={{ fontSize: 20 }}>Capacity</label></strong>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    value={currentVehicle.capacity}
                                    onChange={this.onChangecapacity} />
                            </div>

                            <div className="form-group">
                               <strong> <label htmlFor="price" style={{ fontSize: 20 }}>Price (Rs):</label></strong>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    value={currentVehicle.price}
                                    onChange={this.onChangeprice}
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ fontSize: 20 }}>
                                    <strong>Status:</strong>
                                </label>
                                {currentVehicle.status ? "Available" : " Not Available"}
                            </div>
                        </form>

                        {currentVehicle.status ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updateStatus(false)}
                                style={{ fontSize: 18 }}>Not Available</button>
                        ) : (
                                <button
                                    className="badge badge-primary mr-2"
                                    onClick={() => this.updateStatus(true)} 
                                    style={{ fontSize: 18 }} >Available</button>
                            )}

                        <button
                            className="badge badge-danger mr-2"
                           // onClick={this.deleteTutorial}
                            style={{ fontSize: 18 }}
                           > Generate Report </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateVehicle}
                            style={{ fontSize: 18 }} > Update </button>
            <br/><br/>
                        <p style={{ fontSize: 25 }}>{this.state.message}</p>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Tutorial...</p>
                        </div>
                    )}
            </div>
        );
    }
}