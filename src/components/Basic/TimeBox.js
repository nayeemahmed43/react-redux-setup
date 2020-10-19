import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // [theme.breakpoints.down("md")]: {
    //   width: "100%"
    // }
    //justifyContent: 'space-between',
  },
  inputLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    marginTop: theme.spacing(3),
    //marginRight: '10px',
    width: 110,
    border: '1px solid #ced4da',
  },
}));

export default function TimePickers(props) {
  const classes = useStyles();

  return (
      <form className={classes.container} noValidate>
          <FormControl>
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel}>
                 {props.label}
              </InputLabel>
              <TextField
                  id="time"
                  type="time"
                  defaultValue="07:30"
                  onChange={props.handleTime}
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  inputProps={{
                      step: 300, // 5 min
                  }}
              />
          </FormControl>
      </form>
  );
}
