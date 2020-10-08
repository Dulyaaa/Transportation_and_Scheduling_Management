import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Row, Col} from 'react-bootstrap';
//import Form from './form';
import props from 'prop-types';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
//import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 100,
        marginTop:50,
    },
    media: {
        height: 200,
    },
    button: {
        marginLeft: 100,
    },

});

export default function MediaCard() {
    const classes = useStyles();

    const history = useHistory();

    const routeChangeTrans = () => {
        let path = 'TransportMain';
        history.push(path);
    }

    return (
        <div>
            <div>
                <h1 style={{ fontSize: 60, padding: 30 }}>C-four Industries</h1>
            </div>
            <div style={{marginLeft: 1300}}>
                <h2>Address Details</h2>
                <h3>Telephone Number</h3>
            </div>
            <br />
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                </Nav>
            </Navbar>
            <br />
            <Row>
                <Col>
                    <Card className={classes.root} border="dark">
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/cus.png"
                                title="Transport"
                            />
                            <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                       Customer Management
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                //onClick={}
                                className={classes.button}
                            >
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Col>


                <Col>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/employee.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Employee Details Management
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                //onClick={}
                                className={classes.button}
                            >
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Col>


                <Col>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/supplier.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Supplier Management
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                //onClick={}
                                className={classes.button}
                            >
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Col>


                <Col>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/net.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Raw Material Inventory
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                //onClick={}
                                className={classes.button}
                            >
                                View
                            </Button>

                        </CardActions>
                    </Card>
                </Col>
            </Row>
            <br/>

            <Row>

                <Col>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/product.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Final Product Inventory
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                //onClick={}
                                className={classes.button}
                            >
                                View
                            </Button>

                        </CardActions>
                    </Card>
                </Col>


                <Col>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/payroll.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Payroll Management
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                //onClick={}
                                className={classes.button}
                            >
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Col>


                <Col>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/utilities.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Utilities Management
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                //onClick={}
                                className={classes.button}
                            >
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Col>


                <Col>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/trans.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Transport and Scheduling Management
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Link to="/Vehicles">View */}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={routeChangeTrans}
                                className={classes.button}
                            >
                                View
                            </Button>
                            {/* </Link> */}
                        </CardActions>
                    </Card>
                </Col>
            </Row>

        </div>
        
    );
}