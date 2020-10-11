import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <div style={{width: 1000, marginLeft: 100}}>
                <h1>Welcome to Transport Department</h1>
                <br/><br/>
                <Row>
                    <Col>
                        <img src="./delivery.png" height="300" width="400"></img>
                        <br /><br />
                    </Col>
                    <Col>
                        <img src="./transportation.png" height="300" width="400"></img>
                        <br /><br />
                    </Col>
                </Row>
                <br /><br /> <br /><br />
                <div style={{textAlign: "left", marginLeft: 300}}>
                <h3>Services:-</h3>
                <h4>
                    ⨷ Getting orders from customer<br /><br />
                    ⨷ Assign a vehicle for each order to deliver<br /><br />
                    ⨷ Fast and safe way to deliver<br /><br />
                    ⨷ Manage vehicles<br /><br />
                    ⨷ Generate reports<br /><br />
                </h4>
                </div>
            </div>
        );
    }
}

export default Main;