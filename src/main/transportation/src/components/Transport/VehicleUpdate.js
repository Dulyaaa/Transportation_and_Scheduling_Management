import React, { Component } from "react";
import VehicleDataService from "../../services/vehicle.service";
import jsPDF from 'jspdf';
import { Row, Col } from 'react-bootstrap';
import '../../App.css'
import { red } from "@material-ui/core/colors";
import { Form } from "react-bootstrap";

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
            date: new Date().toLocaleString(), 

            currentVehicle: {
                id: null,
                vehicleNumber: "",
                registeredYear: "",
                type: "",
                status: false,
                capacity: "",
                price: 0,
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
                this.setState({
                    message: "Can't get the details."
                });
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
                this.setState({
                    message: "Can't update the details."
                });
            });
    }

    jsPdfGenerator = () => {

        var doc = new jsPDF();

        // doc.text(50, 50, 'Hello world!')

        // doc.text(20, 20, 'Vehicle details')
        
        // doc.setFont('helvetica')
        // doc.text(20, 60, this.state.currentVehicle.vehicleNumber)


        var imgData = '/logo.png'
        doc.addImage(imgData, 'png', 30, 45, 40, 0)
        doc.rect(20, 20, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 40, 'S');
        doc.setFontSize(11)
        doc.text(145, 50, 'Beligammana, Mawanella')
        doc.text(145, 55, '+94 778 357 755')
        doc.text(145, 60, '+94 352 050 255')
        doc.text(145, 65, 'cfour@sltnet.lk')
        doc.setFontSize(20)
        doc.text(70, 100, 'Vehicle Cost Report')
        doc.line(65, 102, 140, 102)
        doc.setFontSize(15)
        doc.text(40, 130, 'Vehicle Details')
        doc.setFontSize(12)
        doc.text(40, 145, 'Vehicle Number:')
        doc.text(40, 155, 'Vehicle Registered Year:')
        doc.text(40, 165, 'Vehicle Type:')
        doc.text(40, 175, 'Vehicle Capacity:')
        doc.text(40, 185, 'Price*:')
        doc.text(145, 220, 'Certified By:')
        doc.text(145, 225, 'Head of Transport Department')
        doc.setFontSize(11)
        doc.text(110, 145, this.state.currentVehicle.vehicleNumber)
        doc.text(110, 155, `${this.state.currentVehicle.registeredYear}`)
        doc.text(110, 165, this.state.currentVehicle.type)
        doc.text(110, 175, `${this.state.currentVehicle.capacity}`)
        doc.setTextColor(0, 190, 0)
        doc.text(110, 185, 'Rs: ' + `${this.state.currentVehicle.price}`)
        doc.setFontSize(9)
        doc.setTextColor(255, 0, 0)
        doc.text(30, 250, '* The given price was until ' + `${this.state.date}` + ' from the last report generating.')

        doc.save(this.state.currentVehicle.vehicleNumber+' Report.pdf')

        alert("Make sure to update the price into zero (Price: Rs.0).")

    }

    render(){

        const{currentVehicle} = this.state;

        return(

            <div style={{marginLeft: 300}}>
               
                {currentVehicle ? (
                    <div className="edit-form" style={{ width: 500 }}>
                         {/* <img src="./transport.png" height="400" width="400" /> */}
                        <h3>Vehicle Details of "{currentVehicle.vehicleNumber}"</h3><br/><br/>
                        <form>
                            <Form>
                            <div className="form-group">
                                <label style={{fontSize: 20}}>
                                    <strong>Vehicle Number:</strong>
                                </label>{" "}
                               
                                    <Form.Control type="text" placeholder={currentVehicle.vehicleNumber} readOnly />
                               {/* <h4> {currentVehicle.vehicleNumber}</h4> */}
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
                                <Form.Control type="text" placeholder={currentVehicle.registeredYear} readOnly />
                              {/* <h4> {currentVehicle.registeredYear}</h4> */}
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
                                <Form.Control type="text" placeholder={currentVehicle.type} readOnly />
                               {/* <h4> {currentVehicle.type}</h4> */}
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
                                <Form.Control type="text" placeholder={currentVehicle.status ? "Available" : "Not Available"} readOnly />
                               {/* <h4> {currentVehicle.status ? "Available" : " Not Available"}</h4> */}
                            </div>
                            </Form>
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
                                onClick={this.jsPdfGenerator}
                                    style={{ fontSize: 18 }}
                                > Generate Report </button>

                                <button
                                    type="submit"
                                    className="badge badge-success"
                                    onClick={this.updateVehicle}
                                    style={{ fontSize: 18 }} > Update </button>
            <br/><br/>
                        <div style={{backgroundColor: "yellow"}}>
                        <p style={{ fontSize: 25 }}>{this.state.message}</p>
                        </div>
                         </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Vehicle...</p>
                        </div>
                    )}
            </div>
        );
    }
}