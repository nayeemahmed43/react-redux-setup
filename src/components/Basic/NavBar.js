import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FilterNone } from '@material-ui/icons';
import { Link, Router } from 'react-router-dom';

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
    menuItem: {
      textDecoration: "none",
      marginRight:"3%", 
      color: "white"
    },
    signupBtn: {
      background: "rgb(0 113 205)", 
      marginLeft:"5%", 
      textDecoration: "none", 
      color: "white"
    },
    title: {
      flexGrow: 0.5,
    },
    fontStyle: {
      fontStyle: 'italic',
      textDecoration: "none", 
      color: "white"
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
                    <Link to="/" className={classes.fontStyle}>
                      <Typography variant="h6" >
                        Unique Transport
                      </Typography>
                    </Link>
                    
                    <div className={classes.menu}>
                    <a href="/solutions" className={classes.menuItem}><p>Solutions</p></a>
                      <a href="/resources" className={classes.menuItem}><p>Resources</p></a>
                      <a href="/company" className={classes.menuItem}><p>Company</p></a>
                      <a href="/pricing" className={classes.menuItem}><p>Pricing</p></a>
                    </div>
                    <Button color="inherit" style={{marginLeft: "auto"}}>LOG IN</Button>
                    <Link to="/signup" className={classes.signupBtn}><Button color="inherit">SIGN UP</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;