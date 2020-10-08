import React from 'react';
import { TextField } from '@material-ui/core'
const Input = (props) => {
    const { name, value, onChange, label } = props
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;