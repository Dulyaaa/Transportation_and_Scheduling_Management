import React, { Component } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import RequestDataService from "../../services/request.service";
import VehicleDataService from "../../services/vehicle.service";
import '../../App.css'
import { red } from "@material-ui/core/colors";
import { Col, Row } from "react-bootstrap";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 25,
        paddingBottom: 25
    },

    body: {
        fontSize: 18,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            //backgroundColor: theme.palette.action.hover,
            backgroundColor: theme.palette.action.focus,
        },
        padding: 20
    },
}))(TableRow);

function createData(Customer_Name, Address, Distance, Quantity, Status, Option) {
    return { Customer_Name, Address, Distance, Quantity, Status, Option };
}

const rows = [
    createData('William Hamilgton', 'Kandy', 100, 120, 'Not Approved'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
    Fab: {
        margin: 0,
        top: 'auto',
        right: 50,
        bottom: 50,
        left: 'auto',
        position: 'fixed',
    }
});

export default class RequestAssign extends Component {

    constructor(props) {
        super(props);
        this.onChangetransportedDate = this.onChangetransportedDate.bind(this);
        this.onChangeVehicleNumber = this.onChangeVehicleNumber.bind(this);
        this.getRequest = this.getRequest.bind(this);
        this.updateRequest = this.updateRequest.bind(this);
        this.requestStatus = this.requestStatus.bind(this);
        this.retrieveVehicles = this.retrieveVehicles.bind(this);
        this.vehicleStatus = this.vehicleStatus.bind(this);


        this.state = {
            vehicles: [],

            currentRequest: {
                id: null,
                customerName: "",
                customerAddress: "",
                quantity: "",
                assignedVehicle: "",
                requestedDate: "",
                transportedDate: "",
                status: false,
            },

            message: ""
        };
    }

    componentDidMount() {
        this.getRequest(this.props.match.params.id);
        this.retrieveVehicles();
    }

    onChangeVehicleNumber(e) {
        const assignedVehicle = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRequest : {
                    ...prevState.currentRequest,
                    assignedVehicle: assignedVehicle
                }
            };
        });
    }

    onChangetransportedDate(e) {
        const transportedDate = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRequest: {
                    ...prevState.currentRequest,
                    transportedDate: transportedDate
                }
            };
        });
    }

    getRequest(id) {
        RequestDataService.get(id)
        .then(response => {
            this.setState({
                currentRequest: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    requestStatus(status) {
        var data = {
            id: this.state.currentRequest.id,
            customerName: this.state.currentRequest.customerName,
            customerAddress: this.state.currentRequest.customerAddress,
            quantity: this.state.currentRequest.quantity,
            assignedVehicle: this.state.currentRequest.assignedVehicle,
            requestedDate: this.state.currentRequest.requestedDate,
            transportedDate: this.state.currentRequest.transportedDate,
            status: status,
        };

        RequestDataService.update(this.state.currentRequest.id, data)
            .then(response => {
                this.setState(prevState => ({
                    currentRequest: {
                        ...prevState.currentRequest,
                        status: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    vehicleStatus(status, id, vehicleNumber, registeredYear, type, price, capacity) {
        var data = {
            id: id,
            vehicleNumber: vehicleNumber,
            registeredYear: registeredYear,
            type: type,
            capacity: capacity,
            status: status,
            price: price,
        };

        VehicleDataService.update(id, data)
            .then(response => {
                this.setState(prevState => ({
                    vehicle: {
                        ...prevState.vehicle,
                        status: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    updateRequest() {
        RequestDataService.update(
            this.state.currentRequest.id,
            this.state.currentRequest
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

    retrieveVehicles() {
        VehicleDataService.getAll().then (response => {
            this.setState({
                vehicles: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    render() {

        const { currentRequest } = this.state;

        const classes = useStyles;

        return (

            <div>
                <Row>
                <Col>
                {currentRequest ? (
                    <div className="edit-form" style={{ width: 300,  }}>
                        <h3>Order Details
                        </h3><br /><br />
                        <form>
                            <div className="form-group">
                                <label style={{ fontSize: 20 }}>
                                    <strong>Customer Name:</strong>
                                </label>{" "}
                                <p style={{fontSize: 20}}>{currentRequest.customerName}</p>
                            </div>
                            <div className="form-group">
                                <label style={{ fontSize: 20 }}>
                                    <strong>Customer Address:</strong>
                                </label>{" "}
                                <p style={{fontSize: 20}}>{currentRequest.customerAddress}</p>
                            </div>
                            <div>
                                <label className="form-group" style={{ fontSize: 20 }}>
                                    <strong>Quantity:</strong>
                                </label>{" "}
                                <p style={{fontSize: 20}}>{currentRequest.quantity}</p>
                            </div>

                            <div className="form-group">
                                <label style={{ fontSize: 20 }}>
                                    <strong>Status:</strong>
                                </label>
                                <p style={{fontSize: 20}}>{currentRequest.status ? "Assigned" : "Not Assigned"}</p>
                            </div>

                            <div className="form-group">
                                <strong> <label htmlFor="assignedVehicle" style={{ fontSize: 20 }}>Assign Vehicle Number:</label></strong>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="assignedVehicle"
                                    value={currentRequest.assignedVehicle}
                                    onChange={this.onChangeVehicleNumber}
                                />
                            </div>

                                    <div className="form-group">
                                        <strong> <label htmlFor="transportedDate" style={{ fontSize: 20 }}>Transported Date:</label></strong>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="transportedDate"
                                            value={currentRequest.transportedDate}
                                            onChange={this.onChangetransportedDate}
                                        />
                                    </div>

                        </form>

                        <br/> <br/>
                        
                        {currentRequest.status ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.requestStatus(false)}
                                style={{ fontSize: 18 }}>Not Assigned</button>
                         ) : ( 
                                <button
                                    className="badge badge-primary mr-2"
                                    onClick={() => this.requestStatus(true)}
                                    style={{ fontSize: 18 }} >Assigned</button>
                             )} 

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateRequest}
                            style={{ fontSize: 18 }} > Save Changes </button>
                        <br /><br />
                        <p style={{ fontSize: 25 }}>
                            {this.state.message}
                            </p>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Tutorial...</p>
                        </div>
                     )} 
                </Col>
        
                <Col>
                     <h3>All Vehicle Details</h3>

                     <br/><br/>

                <TableContainer component={Paper} style={{width: 900}}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Vehicle Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Capacity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.vehicles.map(
                                    vehicle =>
                                        <StyledTableRow key={vehicle.id}>
                                            <StyledTableCell component="th" scope="row">{vehicle.vehicleNumber} </StyledTableCell>
                                            <StyledTableCell align="center">{vehicle.capacity}</StyledTableCell>
                                            <StyledTableCell align="center">{vehicle.status ? "Available" : "Not Available"}</StyledTableCell>
                                            <StyledTableCell align="center"> {vehicle.status ? (
                                                <button
                                                    className="badge badge-primary mr-2"
                                                    onClick={() => this.vehicleStatus(false, vehicle.id, vehicle.vehicleNumber, vehicle.registeredYear, vehicle.type, vehicle.price, vehicle.capacity)}
                                                    style={{ fontSize: 18 }}>Not Available</button>
                                            ) : (
                                                    <button
                                                        className="badge badge-primary mr-2"
                                                        onClick={() => this.vehicleStatus(true, vehicle.id, vehicle.vehicleNumber, vehicle.registeredYear, vehicle.type, vehicle.price, vehicle.capacity)}
                                                        style={{ fontSize: 18 }} >Available</button>
                                                )} </StyledTableCell>
                                        </StyledTableRow>
                                 )} 
                        </TableBody>
                    </Table>
                </TableContainer>
                </Col>
                </Row>
            </div>
        );
    }
}