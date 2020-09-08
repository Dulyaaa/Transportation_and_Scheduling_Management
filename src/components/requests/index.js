import React from 'react';
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


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 20,
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
    },
}))(TableRow);

function createData(Customer_Name, Address, Distance, Quantity, Status, Option) {
    return { Customer_Name, Address, Distance, Quantity, Status, Option};
}

const rows = [
    createData('William Hamilgton', 'Matale', 100, 100, 'Not Approved'),
    createData('Sam Perera', 'Galle', 45, 10, 'Not Approved'),
    createData('Keren Senadheera', 'Colombo 07', 23, 50, 'Approved'),
    createData('Gray Hao', 'Colombo 05', 56, 150, 'Not Approved'),
    createData('William Hamilgton', 'Colombo 07', 26, 80, 'Approved'),
    createData('Bently Weerasinghe', 'Colombo 07', 95, 40, 'Approved'),
    createData('William Hamilgton', 'Colombo 07', 56, 100, 'Not Approved'),
    createData('William Hamilgton', 'Kalutara', 12, 100, 'Approved'),
    createData('Dyan Perera', 'Matara', 56, 110, 'Not Approved'),
    createData('William Hamilgton', 'Kandy', 100, 120, 'Not Approved'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 1000,
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

export default function CustomizedTables() {
    const classes = useStyles();

    return (

        <div><h1>All Requests</h1> <br /><br />
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                            <StyledTableCell>Customer Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Distance&nbsp;(Km)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Transport Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.Customer_Name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.Address}</StyledTableCell>
                            <StyledTableCell align="center">{row.Distance}</StyledTableCell>
                            <StyledTableCell align="center">{row.Quantity}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className={classes.root}>
                                    <Chip size="small" 
                                    label={row.Status}
                                    color="primary"
                                    />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <EditIcon color="primary">
                                    <Link component={NavLink} to="/assign" button>
                                    </Link>
                                </EditIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <DeleteIcon color="error"></DeleteIcon>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            <Link to="/requestForm">
                <Fab variant="extended" color="primary" className={classes.Fab}>
                    <AddIcon className={classes.extendedIcon} />
        Make a request
      </Fab>
            </Link>
        </div>
    );
}
