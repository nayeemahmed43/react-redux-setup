import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'
export const useForm = (initialValues) => {
    const [freightData, setFreightData] = useState(initialValues);

    const handleInputChange = e => {
        const {name, value} = e.target
        setFreightData({
            ...freightData,
            [name]: value
        })
    }


    return {
        freightData,
        setFreightData,
        handleInputChange
    }
};

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
}))

export const Form = (props) => {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            {props.children}
        </form>
    );
};
