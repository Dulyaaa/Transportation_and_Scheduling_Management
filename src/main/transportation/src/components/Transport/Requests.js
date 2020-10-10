import React, { Component } from 'react';
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
import RequestDataService from "../../services/request.service";


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

export default class CustomizedTables extends Component {

    constructor(props) {
        super(props)

        this.retrieveRequests = this.retrieveRequests.bind(this);
        this.assignRequest = this.assignRequest.bind(this);

        this.state = {
            requests: [],
        }
    }

    componentDidMount(){
        this.retrieveRequests();
    }

    retrieveRequests(){
        RequestDataService.getAll().then(response => {
            this.setState({
                requests: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    assignRequest(id) {
        this.props.history.push("/RequestAssign/" + id);
    }

    viewRequest(id) {
        this.props.history.push("/RequestView/" + id);
    }

    render(){
    const classes = useStyles;

    return (

        <div><h1>All Requests</h1> <br /><br />
            <Link to="/requestForm">
                <Fab variant="extended" color="primary" className={classes.Fab}>
                    <AddIcon className={classes.extendedIcon} />
                     Make a new Order </Fab>
            </Link>

            <br/><br/>
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
                        {
                        this.state.requests.map (
                            request =>
                            <StyledTableRow key={request.id}>
                                <StyledTableCell component="th" scope="row">{request.customerName}</StyledTableCell>
                                <StyledTableCell align="center">{request.customerAddress}</StyledTableCell>
                                <StyledTableCell align="center">{request.quantity}</StyledTableCell>
                                <StyledTableCell align="center">{request.requestedDate}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className={classes.root}>
                                        <Chip size="small"
                                            label={request.status ? "Assigned" : "Not Assigned"}
                                                color={request.status ? "primary"  : "secondary"}
                                                //style={request.status ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
                                                />
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                        <button className="btn btn-info" onClick={() => this.viewRequest(request.id)}>View</button>&nbsp;&nbsp;
                                    <button className="btn btn-success" onClick={() => this.assignRequest(request.id)}>Assign</button>
                                </StyledTableCell>
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
    }
}