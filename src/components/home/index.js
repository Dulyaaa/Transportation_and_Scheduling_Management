import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginLeft: 10,
        marginRight: 70
    },
    details: {
        //display: 'flex',
        //flexDirection: 'column',
    },
    content: {
        //flex: '1 0 auto',
        width:200,
        height: 150
    },
    cover: {
        width: 150,
    },

    table: {
        minWidth: 900,
    },

}));


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

function createData(name, destination, quantity, status) {
    return { name, destination, quantity, status };
}

const rows = [
    createData('William Hamilgton', 'Colombo 07', 100, 'Not assigned'),
    createData('Sam Perera', 'Malabe', 50, 'Assigned'),
    createData('Bently Weerasinghe', 'Galle', 100, 'Not assigned'),
    createData('Gray Hao', 'Kandy', 150, 'Not assigned'),
    createData('Dyan Perera', 'Kalutara', 100, 'Assigned'),
];


export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
        <div className="row">

        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="/driver.png"
                title="Driver"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Available Drivers 
          </Typography>
                            <Typography component="h4" variant="h4" align="center">
                                5
          </Typography>
                </CardContent>
            </div>

        </Card>

                <br/><br/>


                <Card className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        image="/vehicle.png"
                        title="vehicle"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Available Vehicles 
          </Typography>
                            <Typography component="h4" variant="h4" align="center">
                                7
          </Typography>
                        </CardContent>
                    </div>

                </Card>
        </div>
       

        <div className="row">
            <div>
                    <br /><br /><br /><br /> <br />
                <h2>Recent Requests</h2><br /> <br />
            </div>
                
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Customer Name</StyledTableCell>
                                <StyledTableCell align="center">Destination</StyledTableCell>
                                <StyledTableCell align="center">Quantity</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name} align="center">
                                    <StyledTableCell component="th" scope="row" align="center">{row.name} </StyledTableCell>
                                    <StyledTableCell align="center">{row.destination}</StyledTableCell>
                                    <StyledTableCell align="center">{row.quantity}</StyledTableCell>
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
        </div>
    );
}
