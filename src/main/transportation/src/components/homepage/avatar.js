import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

export default function VariantAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" className={classes.rounded}>
                <AssignmentIcon />
            </Avatar>
        </div>
    );
}
