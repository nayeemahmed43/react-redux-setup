import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels() {

  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox name="checkedC" />} label="Fixed frequent route" />
    </FormGroup>
  );
}
