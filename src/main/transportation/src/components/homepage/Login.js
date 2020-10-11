import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.onChangeuserName = this.onChangeuserName.bind(this);
        this.onchangepassword = this.onchangepassword.bind(this);
        this.checkAuthentication = this.checkAuthentication.bind(this);

        this.state = {
            username: "",
            password: ""
        };
    }

    onChangeuserName(e) {
        this.setState({
            username: e.target.value
        });
    }

    onchangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    checkAuthentication(){

        if(this.state.username === "" || this.state.password === ""){
            alert("Please enter username and password.")
        }
        else {
            if(this.state.username === "Transport" && this.state.password === "12345"){
                this.props.history.push("/TransportMain");
            }
            else if (this.state.username === "Customer" && this.state.password === "12345") {
                this.props.history.push("/");
            }
            else if (this.state.username === "Employee" && this.state.password === "12345") {
                this.props.history.push("/");
            }
            else if (this.state.username === "Supplier" && this.state.password === "12345") {
                this.props.history.push("/");
            }
            else if (this.state.username === "RawMaterial" && this.state.password === "12345") {
               this.props.history.push("/");
            }
            else if (this.state.username === "FinalProduct" && this.state.password === "12345") {
                this.props.history.push("/");
            }
            else if (this.state.username === "Payroll" && this.state.password === "12345") {
               this.props.history.push("/");
            }
            else if (this.state.username === "Utilities" && this.state.password === "12345") {
               this.props.history.push("/");
            }

            else{
            alert("Access Denied!")
            this.props.history.push("/");}
        }

    }

    render() {
        return (
        <div>
            <div>
                <h1 style={{ fontSize: 60, padding: 30 }}>C-four Industries</h1>
            </div>
                <div style={{ marginLeft: 1300 }}>
                    <h2>Address Details</h2>
                    <h3>Telephone Number</h3>
                </div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                    </Nav>
                </Navbar>
            <div style={{width:500, padding: 50, marginLeft: 750}}>
            <form>
                <h3>Authentication</h3>
                <br/><br/>
                <div className="form-group">
                    <label>UserName</label>
                    <input id="username" type="username" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.onChangeuserName}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                            <input id="password" type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onchangepassword}/>
                </div>

                <div className="form-group">
                </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.checkAuthentication}>Submit</button>
                <p className="forgot-password text-right">
                </p>
            </form>
            </div>
            </div>
        );
    }
}