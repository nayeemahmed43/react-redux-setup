import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FilterNone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: "rgb(12 47 85)",
    },
    menu: {
      display: 'flex',
      width: '30%',
      justifyContent: 'space-around',
      marginLeft: theme.spacing(15),
      [theme.breakpoints.down("sm")]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 0.5,
    },
    fontStyle: {
      fontStyle: 'italic'
    }
  }));

const NavBar = () => {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography className={classes.fontStyle} variant="h6" >
                        Unique Transport
                    </Typography>
                    
                    <div className={classes.menu}>
                      <p style={{marginRight:"3%"}}>Solutions</p>
                      <p style={{marginRight:"3%"}}>resources</p>
                      <p style={{marginRight:"3%"}}>Company</p>
                      <p style={{marginRight:"3%"}}>Pricing</p>
                    </div>
                    <Button color="inherit" style={{marginLeft: "auto"}}>LOG IN</Button>
                    <Button color="inherit" style={{background: "rgb(0 113 205)", marginLeft:"5%"}}>SIGN UP</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;