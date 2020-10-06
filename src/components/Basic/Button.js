import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Box} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
        border: 'none',
        color: 'white',
    },
    label: {
      padding: theme.spacing(1)
    },
    // export_button: {
    //   border: 'none',
    //   color: 'white',
    //   backgroundColor : '#b1b3b5',
    //   fontSize:13,
    //   minHeight: theme.spacing(6),
    //   minWidth: theme.spacing(10),
    //   paddingRight:theme.spacing(2),
    //   paddingLeft:theme.spacing(2),
    //   fontWeight:800
    // }
}));

const IxButton = ({label, fullWidth = false, color = 'primary' , icon, onClick, className="", startIcon="", disabled = false, type="submit"}) => {
  const classes = useStyles();
  return (
        <Button
            type={type}
            fullWidth={fullWidth}
            variant="contained"
            color={color}
            className={classes[className]}
            className={classes.submit}
            startIcon={icon}
            startIcon={icon}
            onClick={onClick}
            startIcon={startIcon}
            disabled= {disabled}
            >
            <Box className={classes.label}>{label}</Box>
          </Button>
  )
}


export default IxButton;