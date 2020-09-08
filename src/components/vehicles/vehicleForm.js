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
                className="h-100 justify-content-center align-items-center"
            >
                <Col md={{ span: 6 }} className="text-center my-auto">
                    <h3 style={{ marginBottom: "1rem" }}>New Vehicle Details</h3>
                    <Form>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Standard" />
                            
                        </form>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Vehicle No." required />
                                <TextField id="standard-basic" label="Standard" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Targa" required />
                                <TextField id="standard-basic" label="Standard" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Paese immatricolazione"
                                required
                            />
                        </Form.Group>
                        <h6 style={{ marginBottom: "1rem" }}>Possiede un rimorchio?</h6>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Targa" />
                            <TextField id="standard-basic" label="Standard" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Paese immatricolazione" />
                            <TextField id="standard-basic" label="Standard" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
