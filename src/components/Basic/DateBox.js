import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(4),
  },
  textField: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(5),
    width: 140,
    borderRadius: 2,
    border: '1px solid #ced4da',
  },
}));

export default function DatePickers(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <FormControl>
        <TextField
          id="date"
          type="date"
          defaultValue="2020-05-24"
          className={classes.textField}
          onChange={props.handleDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </form>
  );
}
