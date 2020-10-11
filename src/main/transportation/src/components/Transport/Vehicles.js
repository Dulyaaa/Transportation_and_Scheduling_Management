import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { render } from '@testing-library/react';
import VehicleDataService from "../../services/vehicle.service";
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.action.active,
        color: theme.palette.common.white,
        fontSize: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 25,
        paddingBottom:25
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

function createData(vehicle, reg, type, capacity, status, option) {
    return { vehicle, reg, type, capacity, status, option };
}
const rows = [
    createData('WP AAA-1234', 2015, 'Van', 500, 'Available')
];

const useStyles = makeStyles((theme) => ({

    table: {
        minWidth: 100,
    },

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    
    Fab: {
        margin: 0,
        top: 'auto',
        right: 50,
        bottom: 50,
        left: 'auto',
        position: 'fixed',
    }
}));

export default class CustomizedTables extends Component {

    constructor(props) {
        super(props)
        this.retrieveVehicles = this.retrieveVehicles.bind(this);
        this.editVehicle = this.editVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);

        this.state = {
            message: "",
            vehicles: [],
        }
    }

    componentDidMount(){
        this.retrieveVehicles();
    }

    retrieveVehicles(){
        VehicleDataService.getAll().then(response => {
            this.setState({
                vehicles: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    editVehicle(id){
        this.props.history.push("/VehicleUpdate/" + id);
    }

    deleteVehicle(id){
        VehicleDataService.delete(id)
        .then(response => {
            this.setState({
                vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id),
                message: "Successfully Deleted."
            });
            console.log(response.data);
            alert("Do you really want to delete?")
        })
        .catch(e => {
            console.log(e)
            this.setState({
                message: "Can't delete."
            });
        })
    }

    render(){
    const classes = useStyles;

       return (

        <div>
               <div style={{ backgroundColor: "yellow" }}>
                   <p style={{ fontSize: 25 }}>{this.state.message}</p>
               </div>
            <div>
                <h1 style={{paddingTop: 20 }}>
                    Vehicle Details
                </h1>
                <br /><br />
            </div>

           <div className={classes.root}>

                   <Link to="/VehicleForm">
                       <Fab variant="extended" color="primary" className={classes.Fab}>
                           <AddIcon className={classes.extendedIcon} />
        Add New Vehicle
      </Fab>
     </Link>

        <br/><br/>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                               <StyledTableCell align="center">Vehicle No.&nbsp;&nbsp;&nbsp;</StyledTableCell>
                               <StyledTableCell align="center">Registered Year&nbsp;&nbsp;&nbsp;</StyledTableCell>
                               <StyledTableCell align="center">Vehicle Type&nbsp;&nbsp;&nbsp;</StyledTableCell>
                               <StyledTableCell align="center">Capacity&nbsp;&nbsp;&nbsp;</StyledTableCell>
                               <StyledTableCell align="center">Status&nbsp;&nbsp;&nbsp;</StyledTableCell>
                               <StyledTableCell align="center">Option&nbsp;&nbsp;&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    this.state.vehicles.map (
                        vehicle =>
                        <StyledTableRow key={vehicle.id}>
                                <StyledTableCell component="th" scope="row" align="center">{vehicle.vehicleNumber}</StyledTableCell>
                                <StyledTableCell align="center">{vehicle.registeredYear}</StyledTableCell>
                                <StyledTableCell align="center">{vehicle.type}</StyledTableCell>
                                <StyledTableCell align="center">{vehicle.capacity}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className={classes.root}>
                                    <Chip size="small"
                                            label={vehicle.status ? "Available" : "Not Available"}
                                             style={vehicle.status ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
                                        color="primary"/>
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                    <button><EditIcon color="primary" onClick={() => this.editVehicle(vehicle.id)}></EditIcon></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button><DeleteIcon color="error" onClick={() => this.deleteVehicle(vehicle.id)}></DeleteIcon></button>
                            </StyledTableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        <br/><br/>
        </div>
        </div>
    );
    }
}
