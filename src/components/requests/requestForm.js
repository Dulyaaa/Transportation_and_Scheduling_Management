import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Step2(props) {

    const classes = useStyles();

    return (
        <Container style={{marginRight: 700}}>
            <Row
                style={{ marginTop: "30px" }}
                className="h-100 justify-content-center align-items-center">
                <Col md={{ span: 6 }} className="text-center my-auto">
                    <h3 style={{ marginBottom: "1rem" }}>Make a New Request</h3>
                    <Form>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Customer Name" required/>
                            <TextField id="standard-basic" label="Destination" required/>
                            <TextField id="standard-basic" label="Distance (Km)" required/>
                            <TextField id="standard-basic" label="Quantity" required/>
                        </form>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
