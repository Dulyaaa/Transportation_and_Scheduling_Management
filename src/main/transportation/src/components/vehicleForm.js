import React from "react";
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
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
    button: {
        marginRight: theme.spacing(1),
    },
}));

export default class Step2 extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            firstname : '',
        }   
    }

    componentDidMount(){
        this.setState({
            firstname: ''
        });
    }
    render(){

        const classes = useStyles;

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
                            <TextField id="standard-basic" label="Vehicle No." required/>
                        </form>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Registered Year." required/>
                        </form>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Capacity" required/>
                        </form>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Type" required/>
                        </form>
                        <Button
                            variant="contained"
                            color="primary"
                            //onClick={handleNext}
                            className={classes.button}
                        >
                            Add
                        </Button>
                        <Button
                            variant="contained"
                            color="secondry"
                            // onClick={handleNext}
                            className={classes.button}
                        >
                            Cancel
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
}
