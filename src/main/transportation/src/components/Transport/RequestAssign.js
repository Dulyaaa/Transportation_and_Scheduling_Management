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
import '../../App.css'
import { red } from "@material-ui/core/colors";


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

        this.getVehicle = this.getVehicle.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);

        this.state = {
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
    }

    onChangeVehicleNumber(e) {
        const vehicleNumber = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRequest : {
                    ...prevState.currentRequest,
                    vehicleNumber: vehicleNumber
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

    // componentDidMount() {
    //     this.getVehicle(this.props.match.params.id);
    // }

    // onChangevehicleNumber(e) {
    //     const vehicleNumber = e.target.value;

    //     this.setState(function (prevState) {
    //         return {
    //             currentVehicle: {
    //                 ...prevState.currentVehicle,
    //                 vehicleNumber: vehicleNumber
    //             }
    //         };
    //     });
    // }

    // onChangeregisteredYear(e) {
    //     const registeredYear = e.target.value;

    //     this.setState(prevState => ({
    //         currentVehicle: {
    //             ...prevState.currentVehicle,
    //             registeredYear: registeredYear
    //         }
    //     }));
    // }

    // onChangetype(e) {
    //     const type = e.target.value;

    //     this.setState(prevState => ({
    //         currentVehicle: {
    //             ...prevState.currentVehicle,
    //             type: type
    //         }
    //     }));
    // }

    // onChangecapacity(e) {
    //     const capacity = e.target.value;

    //     this.setState(prevState => ({
    //         currentVehicle: {
    //             ...prevState.currentVehicle,
    //             capacity: capacity
    //         }
    //     }));
    // }

    // onChangeprice(e) {
    //     const price = e.target.value;

    //     this.setState(prevState => ({
    //         currentVehicle: {
    //             ...prevState.currentVehicle,
    //             price: price
    //         }
    //     }));
    // }

    // getVehicle(id) {
    //     VehicleDataService.get(id)
    //         .then(response => {
    //             this.setState({
    //                 currentVehicle: response.data
    //             });
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    // updateStatus(status) {
    //     var data = {
    //         id: this.state.currentVehicle.id,
    //         vehicleNumber: this.state.currentVehicle.vehicleNumber,
    //         registeredYear: this.state.currentVehicle.registeredYear,
    //         type: this.state.currentVehicle.type,
    //         capacity: this.state.currentVehicle.capacity,
    //         status: status,
    //         price: this.state.currentVehicle.price,
    //     };

    //     VehicleDataService.update(this.state.currentVehicle.id, data)
    //         .then(response => {
    //             this.setState(prevState => ({
    //                 currentVehicle: {
    //                     ...prevState.currentVehicle,
    //                     status: status
    //                 }
    //             }));
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    // updateVehicle() {
    //     VehicleDataService.update(
    //         this.state.currentVehicle.id,
    //         this.state.currentVehicle
    //     )
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({
    //                 message: "The vehicle details were updated successfully!"
    //             });
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    render() {

        // const { currentVehicle } = this.state;

        const classes = useStyles;

        return (

            <div>
                {/* {currentVehicle ? ( */}
                    <div className="edit-form" style={{ width: 500 }}>
                        <h3>Assign the vehicle to transport 
                        </h3><br /><br />
                        <form>
                            <div className="form-group">
                                <label style={{ fontSize: 20 }}>
                                    <strong>Vehicle Number:</strong>
                                </label>{" "}
                                {/* {currentVehicle.vehicleNumber} */}
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
                                {/* {currentVehicle.registeredYear} */}
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
                                {/* {currentVehicle.type} */}
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
                                    // value={currentVehicle.capacity}
                                    // onChange={this.onChangecapacity} 
                                    />
                            </div>

                            <div className="form-group">
                                <strong> <label htmlFor="price" style={{ fontSize: 20 }}>Price (Rs):</label></strong>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    // value={currentVehicle.price}
                                    // onChange={this.onChangeprice}
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ fontSize: 20 }}>
                                    <strong>Status:</strong>
                                </label>
                                {/* {currentVehicle.status ? "Available" : "Not Available"} */}
                            </div>
                        </form>

                        {/* {currentVehicle.status ? ( */}
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updateStatus(false)}
                                style={{ fontSize: 18 }}>Not Available</button>
                        {/* ) : ( */}
                                <button
                                    className="badge badge-primary mr-2"
                                    onClick={() => this.updateStatus(true)}
                                    style={{ fontSize: 18 }} >Available</button>
                            {/* )} */}

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
                        <br /><br />
                        <p style={{ fontSize: 25 }}>
                            {/* {this.state.message} */}
                            </p>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Tutorial...</p>
                        </div>
                    {/* )} */}

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Customer Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Customer Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Requested Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {
                                this.state.requests.map(
                                    request => */}
                                        <StyledTableRow 
                                        // key={request.id}
                                        >
                                            <StyledTableCell component="th" scope="row">
                                                {/* {request.customerName} */}
                                                </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {/* {request.customerAddress} */}
                                                </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {/* {request.quantity} */}
                                                </StyledTableCell>
                                            <StyledTableCell align="center">
                                                {/* {request.requestedDate} */}
                                                </StyledTableCell>
                                            <StyledTableCell align="center">
                                                <div className={classes.root}>
                                                    <Chip size="small"
                                                        // label={request.status ? "Assigned" : "Not Assigned"}
                                                        color="primary" />
                                                </div>
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                <button className="btn btn-info">View</button>&nbsp;&nbsp;
                                    <button className="btn btn-success"
                                    //  onClick={() => this.assignRequest(request.id)}
                                    >Assign</button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                {/* )} */}
                        </TableBody>
                    </Table>
                </TableContainer>




            </div>
        );
    }
}