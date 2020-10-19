import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { InputLabel } from '@material-ui/core';

export default function CheckboxLabels(props) {

  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox name="checkedC" value="false" onChange={props.handleCheckBox}/>} label="Fixed frequent route"/>
    </FormGroup>
  );
}
