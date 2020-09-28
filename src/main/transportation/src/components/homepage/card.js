import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import {Row, Col} from 'react-bootstrap';
import { Link, NavLink } from 'react-dom';
import AddIcon from '@material-ui/icons/Add';
//import Form from './form';
import props from 'prop-types';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 100,
        marginTop:50,
    },
    media: {
        height: 140,
    },
    button: {
        marginLeft: 100,
    },

});

export default function MediaCard() {
    const classes = useStyles();

    function handleClick () {
        props.history.push('/form');
    }

    return (
        <div>
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

        </div>
        
    );
}
