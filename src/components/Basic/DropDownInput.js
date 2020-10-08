import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

const shipmentTypes = [
  {
    value: 'FTL (Full Truck Load)',
    label: 'FTL (Full Truck Load)',
  },
  {
    value: 'HTL (Half Truck Load)',
    label: 'HTL (Half Truck Load)',
  },
  {
    value: 'QTL (Quarter Truck Load)',
    label: 'QTL (Quarter Truck Load)',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '22ch',
      
    },
  },
  textField: {
    marginTop: theme.spacing(3),
    border: '1px solid #ced4da',
    
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  // const [shipmentType, setShipmentType] = useState('FTL (Full Truck Load)');

  // const handleChange = (event) => {
  //   setShipmentType(event.target.value);
  // };

  return (
      <form className={classes.root} noValidate autoComplete="off">
          <FormControl>
              <InputLabel shrink htmlFor="bootstrap-input" style={{marginTop:"8px"}}>
                  Shipment Type
              </InputLabel>
              <TextField
                  id="outlined-select-shipmentType"
                  select
                  className={classes.textField}
                  value={props.value}
                  onChange={props.handleChange}
                  //variant="outlined"
                >
                  {shipmentTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                          {option.label}
                      </MenuItem>
                  ))}
              </TextField>
          </FormControl>
      </form>
  );
}
