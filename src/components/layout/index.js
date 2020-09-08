import React, { Children } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';
import VehicleIcon from '@material-ui/icons/LocalShipping';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Home from '../home';
import Requests from '../requests';
import Drivers from '../drivers';
import Vehicles from '../vehicles';
import Assign from '../assign';
import VehicleForm from '../vehicles/vehicleForm';
import Step1 from '../assign/step1';
import RequestForm from '../requests/requestForm';

import { Card } from '@material-ui/core';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 345,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  media: {
    height: 240,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 0,
    marginTop: 100,
    marginLeft: 350,
    marginBottom: 300,
    padding: theme.spacing(0),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/transport.png"
            title="Transport Admin"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Transport Admin
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider />
      <List>
              <List component="nav">
                  <ListItem component={NavLink} to="/" button>
                      <ListItemIcon>
                          <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem component={NavLink} to="/requests" button>
                      <ListItemIcon>
                          <ListIcon />
                      </ListItemIcon>
                      <ListItemText primary="Requests" />
                  </ListItem>
                  <ListItem component={NavLink} to="/drivers" button>
                      <ListItemIcon>
                          <PeopleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Drivers" />
                  </ListItem>
                  <ListItem component={NavLink} to="/vehicles" button>
                      <ListItemIcon>
                          <VehicleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Vehicles" />
                  </ListItem>
                  <ListItem component={NavLink} to="/assign" button>
                      <ListItemIcon>
                          <VehicleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Assign" />
                  </ListItem>
              </List>
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Transport Department
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/requests' component={Requests} />
                  <Route exact path='/vehicles' component={Vehicles} />
                  <Route exact path='/drivers' component={Drivers} />
                  <Route exact path='/assign' component={Assign} />
                  <Route exact path='/vehicleForm' component={VehicleForm} />
                  <Route exact path='/step1' component={Step1} />
                  <Route exact path='/requestForm' component={RequestForm} />
              </Switch>
          
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    window: PropTypes.func,
};

export default ResponsiveDrawer;
