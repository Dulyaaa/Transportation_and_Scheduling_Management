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
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';


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

function createData(vehicle, reg, type, capacity, status, option) {
    return { vehicle, reg, type, capacity, status, option };
}
const rows = [
    createData('WP AAA-1234', 2015, 'Van', 500, 'Available'),
    createData('WP AAA-1432', 2015, 'Van', 500, 'Available'),
    createData('WP AAA-1232', 2013, 'Lorry', 1000, 'Not Available'),
    createData('WP AAA-1432', 2014, 'Lorry', 1000, 'Available'),
    createData('WP AAA-1232', 2017, 'Lorry', 1000, 'Not Available'),
    createData('WP AAA-1432', 2010, 'Van', 500, 'Available'),
    createData('WP AAA-3432', 2013, 'Lorry', 1000, 'Not Available'),
];

const useStyles = makeStyles((theme) => ({

    table: {
        minWidth: 900,
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

export default function CustomizedTables() {
    const classes = useStyles();

       return (

        <div>
            <div>
                <h1>
                    Vehicle Details
                </h1>
                <br /><br />
            </div>

           <div className={classes.root}>

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
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.vehicle}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.reg}</StyledTableCell>
                            <StyledTableCell align="center">{row.type}</StyledTableCell>
                            <StyledTableCell align="center">{row.capacity}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className={classes.root}>
                                    <Chip size="small"
                                        label={row.status}
                                        color="primary"
                                    />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <button>
                                <EditIcon color="primary">
                                </EditIcon>
                                </button>&nbsp;&nbsp;
                                <button>
                                <DeleteIcon color="error"></DeleteIcon>
                                </button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            <Link to="/VehicleForm">
               <Fab variant="extended" color="primary" className={classes.Fab}>
                   <AddIcon className={classes.extendedIcon} />
        Add New Vehicle
      </Fab>
      </Link>
        </div>
        </div>
    );
}
