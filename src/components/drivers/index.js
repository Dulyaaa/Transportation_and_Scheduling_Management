import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

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
            backgroundColor: theme.palette.action.focus,
        },
    },
}))(TableRow);

function createData(name, lcn, number, status) {
    return { name, lcn, number, status };
}

const rows = [
    createData('Sam Perera', 159223, '0111111111', 'Available'),
    createData('Ice cream sandwich', 233227, '0222222222', 'Not Available'),
    createData('Bently Perera', 262123, '03333333333', 'Not Available'),
    createData('Cupcake', 305345, '0444444444', 'Available'),
    createData('William Perera', 356543, '05555555555', 'Available'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 900,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <div>
            <div><h1>Drivers Details</h1></div> <br /><br /><br />
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Driver Name</StyledTableCell>
                        <StyledTableCell align="center">Driving License No.</StyledTableCell>
                        <StyledTableCell align="center">Mobile No.</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name} align="center">
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.lcn}</StyledTableCell>
                            <StyledTableCell align="center">{row.number}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className={classes.root}>
                                    <Chip size="small"
                                        label={row.status}
                                        color="primary"
                                    />
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
