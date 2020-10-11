import React, { Component } from 'react'
import RequestDataService from '../../services/request.service';

class RequestForm extends Component {

    constructor(props) {
        super(props);
        this.onChangecustomerName = this.onChangecustomerName.bind(this);
        this.onchangecustomerAddress = this.onchangecustomerAddress.bind(this);
        this.onchangequantity = this.onchangequantity.bind(this);
        this.onchangerequestedDate = this.onchangerequestedDate.bind(this);
        this.saveRequest = this.saveRequest.bind(this);
        this.newRequest = this.newRequest.bind(this);
        this.addDetails = this.addDetails.bind(this);

        this.state = {
            date: new Date().toLocaleString(),
            id: null,
            customerName: "",
            customerAddress: "",
            quantity: "",
            assignedVehicle: "",
            requestedDate: "",
            transportedDate: "",
            status: false,

            submitted: false
        };
    }

    onChangecustomerName(e) {
        this.setState({
            customerName: e.target.value
        });
    }

    onchangecustomerAddress(e) {
        this.setState({
            customerAddress: e.target.value
        });
    }

    onchangequantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onchangerequestedDate(e) {
        this.setState({
            requestedDate: e.target.value
        });
    }

    saveRequest() {
        var data = {
            customerName: this.state.customerName,
            customerAddress: this.state.customerAddress,
            quantity: this.state.quantity,
            requestedDate: this.state.requestedDate,
        };

        RequestDataService.create(data)
        .then(response => {
            this.setState({
                id: response.data.id,
                customerName: response.data.customerName,
                customerAddress: response.data.customerAddress,
                quantity: response.data.quantity,
                assignedVehicle: response.data.assignedVehicle,
                requestedDate: response.data.requestedDate,
                status: response.data.status,
                transportedDate: response.data.transportedDate,

                submitted: true
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    newRequest() {
        this.setState({
            id: null,
            customerName: "",
            customerAddress: "",
            quantity: "",
            assignedVehicle: "",
            requestedDate: "",
            transportedDate: "",
            status: false,

            submitted: false
        });
    }

    addDetails () {
        this.setState({
            customerName: "William Hamilgton",
            customerAddress: "Raththanapitya, Borelasgamuwa",
            quantity: 300,
            assignedVehicle: "",
            requestedDate: this.state.date,
            transportedDate: "",
            status: false,
        })
    }

    render() {
        return (
            <div className="submit-form" style={{ width: 900 }}>
                {this.state.submitted ? (
                    <div>
                        <h4>You created a new Order successfully!</h4>
                        <button className="btn btn-success" 
                        onClick={this.newRequest}
                        >
                            Want to create New Order?
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
                                <h2>ADD NEW ORDER DETAILS</h2>
                                <br /><br />
                                <label htmlFor="customerName" style={{ fontSize: 20 }}>Customer Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="customerName"
                                    required
                                    value={this.state.customerName}
                                    onChange={this.onChangecustomerName}
                                    name="customerName"
                                    style={{ fontSize: 25 }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="customerAddress" style={{ fontSize: 20 }}>Customer Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="customerAddress"
                                    required
                                    value={this.state.customerAddress}
                                    onChange={this.onchangecustomerAddress}
                                    name="customerAddress"
                                    style={{ fontSize: 25 }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantity" style={{ fontSize: 20 }}>Quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quantity"
                                    required
                                    value={this.state.quantity}
                                    onChange={this.onchangequantity}
                                    name="quantity"
                                    style={{ fontSize: 25 }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="requestedDate" style={{ fontSize: 20 }}>Requested Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="requestedDate"
                                    required
                                    value={this.state.date}
                                    onChange={this.onchangerequestedDate}
                                    name="requestedDate"
                                    style={{ fontSize: 25 }}
                                />
                            </div>

                            <button className="btn btn-success" onClick={this.saveRequest} style={{ marginLeft: "10px", width: 300, fontSize: 20}}>Save</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={this.addDetails} style={{ marginLeft: "10px", width: 300, fontSize: 20 }}>Demo</button>
                        </div>
                     )} 
            </div>
        );
    }
}

export default RequestForm